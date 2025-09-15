import React from "react";
import { arrowForward } from "../assets/assets";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div
      className="min-h-screen max-h-screen w-full bg-cover bg-center flex flex-col justify-between px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2347623/pexels-photo-2347623.jpeg')",
      }}
    >
      <div className="w-full flex justify-start pt-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-28 sm:w-32 h-auto"
        />
      </div>
      <div className="w-full flex justify-center pb-8">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 flex flex-col items-center">
          <h1 className="text-base sm:text-xl font-semibold text-black mb-4 text-center">
            Get started with Uber
          </h1>
          <Link to="/login" className="bg-black text-white w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-gray-900 transition">
            Continue
            <img src={arrowForward} alt="arrow forward" className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
