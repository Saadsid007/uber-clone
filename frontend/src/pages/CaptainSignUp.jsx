import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainStateContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("");
  const { setCaptain } = useContext(CaptainStateContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullName: {
        firstName,
        lastName
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity: Number(capacity),
        vehicleType
      }
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      if (error.response) {
        console.error('Backend Error:', error.response.data);
      } else {
        console.error('Error during registration:', error);
      }
    }
    console.log("Captain Signup Data:", CaptainData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity(1);
    setVehicleType("");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className=" bg-white w-full max-w-md px-8 py-10 flex flex-col items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-32 h-auto mb-4"
        />
        <h1 className="font-extrabold text-xl mb-6 text-center">
          Captain SignUp Page
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full"
        >
          <label className="font-bold mb-1">What's Your Name</label>
          <div className="flex gap-4 ">
            <input
              type="text"
              required
              placeholder="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              required
              placeholder="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <label className="font-bold mb-1">What's Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Enter Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-6 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Vehicle Color</label>
          <input
            type="text"
            required
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder="Vehicle Color"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Vehicle Plate</label>
          <input
            type="text"
            required
            value={plate}
            onChange={e => setPlate(e.target.value)}
            placeholder="Vehicle Plate"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Vehicle Capacity</label>
          <input
            type="number"
            min={1}
            required
            value={capacity}
            onChange={e => setCapacity(e.target.value)}
            placeholder="Vehicle Capacity"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Vehicle Type</label>
          <select
            required
            value={vehicleType}
            onChange={e => setVehicleType(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-6 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
            <option value="suv">SUV</option>
          </select>
          <button className="bg-black text-white w-full py-3 rounded-lg font-bold text-lg hover:bg-gray-900 transition mb-2">
            Register
          </button>
          <p className="text-center text-gray-500 text-sm font-semibold mb-2">
            Already a Captain?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Sign In
            </Link>
          </p>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          &copy; 2024 Uber Clone. All rights reserved.
        </p>
      </div>
      <Link
        to="/signup"
        className="bg-green-700 mt-6 p-3 font-bold text-white w-[90%] rounded-lg max-w-md text-center hover:bg-green-800 transition"
      >
        Sign Up As User
      </Link>
    </div>
  )
}

export default CaptainSignUp