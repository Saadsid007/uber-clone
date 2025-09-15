import React, { useState } from "react";

export const CaptainStateContext = React.createContext();

const CaptainContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [captain, setCaptain] = useState({
    _id: "",
    fullName: {
      firstName: "",
      lastName: ""
    },
    email: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: ""
    },
    socketID: null
  });

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  };

  return (
    <CaptainStateContext.Provider value={value}>
      {children}
    </CaptainStateContext.Provider>
  );
};

export default CaptainContext;
