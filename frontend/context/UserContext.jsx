import React, { useState } from "react";

export const UserStateContext = React.createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  return (
    <div>
      <UserStateContext.Provider value={{ user, setuser }}>
        {children}
      </UserStateContext.Provider>
    </div>
  );
};

export default UserContext;
