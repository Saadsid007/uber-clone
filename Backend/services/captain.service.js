const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  vehicle,
}) => {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !vehicle ||
    !vehicle.color ||
    !vehicle.plate ||
    !vehicle.capacity ||
    !vehicle.vehicleType
  ) {
    throw new Error("All fields are required");
  }
  const captain = captainModel({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
    vehicle,
  });
  await captain.save();

  return captain;
};
