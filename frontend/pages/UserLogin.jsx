import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: email,
        password: password,
      };
      setUserData(data);
      setEmail("");
      setPassword("");
    };
  
    useEffect(() => {
      // console.log('userData updated:', userData);
    }, [userData]);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className=" bg-white w-full max-w-md px-8 py-10 flex flex-col items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-32 h-auto mb-4"
        />
        <h1 className="font-extrabold text-xl mb-6 text-center">
          User Login Page
        </h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col w-full"
        >
          <label className="font-bold mb-1">What's Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <label className="font-bold mb-1">Enter Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 w-full bg-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white w-full py-3 rounded-lg font-bold text-lg hover:bg-gray-900 transition mb-2">
            Login
          </button>
          <p className="text-center text-gray-500 text-sm font-semibold mb-2">
            New User?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          &copy; 2024 Uber Clone. All rights reserved.
        </p>
      </div>
      <Link
        to="/captain-login"
        className="bg-green-700 mt-6 p-3 font-bold text-white w-[90%] rounded-lg max-w-md text-center hover:bg-green-800 transition"
      >
        Login As Captain
      </Link>
    </div>
  );
};

export default UserLogin;
