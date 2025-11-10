import { useState } from "react";
import { LoginContext } from "../context/context";




const LoginContextProvider = ({ children }) => {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [newData, setNewData] = useState({
        name: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <LoginContext.Provider
      value={{
        signUp,
        setSignUp,
        logIn,
        setLogIn,
        newData,
        setNewData,
        isLoggedIn,
        setIsLoggedIn,
        isSignedIn,
        setIsSignedIn

      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
