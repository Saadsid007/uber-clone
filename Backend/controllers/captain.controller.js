const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

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
