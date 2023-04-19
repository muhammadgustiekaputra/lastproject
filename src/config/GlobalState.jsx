import React, {useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const[isLogin, setIsLogin] =  useState(false);



 
  const GlobalState = {isLogin, setIsLogin};
  return (
    <GlobalContext.Provider value={GlobalState}>
      {children}
    </GlobalContext.Provider>
  );
};
