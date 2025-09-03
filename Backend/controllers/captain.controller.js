const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password, vehicle } = req.body;
  const { firstName, lastName } = fullName;

  const isCaptainExists = await captainModel.findOne({ email });

  if (isCaptainExists) {
    return res
      .status(400)
      .json({ error: "Captain with this email already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  try {
    const captain = await captainService.createCaptain({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      vehicle,
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ message: "Captain registered successfully", token, captain });

  } catch (error) {
    next(error);
  }
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();

    res.cookie("token", token);
    res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {

    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.header("Authorization").split(" ")[1];
    await blackListTokenModel.create({ token });

    res.status(200).json({ message: "Logged out successfully" });
    next();
}
