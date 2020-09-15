import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={[isUserLoggedIn, setUserLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};
