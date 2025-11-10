import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/context.js";
import { CheckCircle, Lock, Mail, User } from "lucide-react";

const Form = () => {
 const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // use context
  const [signin, setSingIn] = useState(false);
  const [logedin, setlogedin] = useState(false);
  const { setNewData, signUp, setSignUp, logIn, setLogIn,setIsSignedIn,setIsLoggedIn, isLoggedIn } =
    useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSingIn(true);
    setlogedin(true);
    setIsSignedIn(true);
    
console.log(data);


    // notify
    setTimeout(() => {
      setSingIn(false);
      setlogedin(false);
      setLogIn(false);
    }, 2000);
  };
  
  const handleLogSubmit = (e) => {
    e.preventDefault();
    setNewData(data);
    setlogedin(true);
    setIsSignedIn(true);
console.log(data);
setIsLoggedIn(true)
    // notify
    setTimeout(() => {
      setlogedin(false);
      setLogIn(false);
    }, 2000);
  };

  return (
    <>
      {/* signUp */}
      <div
        className={`signup transition-all duration-300 ease-in-out ${
          signUp === true ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2 z-99">
          <div className={`main w-full`}>
            <div className="w-[450px]">
              <div className="form py-[35px]! px-[37px]! w-full bg-white my-20 rounded-2xl">
                <div className="header pb-10">
                  <h2 className="text-5xl font-bold text-center">Sign Up</h2>
                  <p className="text-[16px] font-medium text-gray-500 text-center pt-6">
                    Create your account to get started.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="">
                  <div className="name ">
                    <label htmlFor="username">Username :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <User />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your username :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="email pt-7">
                    <label htmlFor="email">Email :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <Mail />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="password pt-7 pb-8">
                    <label htmlFor="password">Password :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <Lock />
                      <input
                        type="password"
                        name="password"
                        placeholder="Create a strong password :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* button */}
                  <button
                    className="w-full bg-blue-500 py-3 rounded-2xl cursor-pointer text-xl text-white font-semibold"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <div className="checkbox flex gap-3  pt-5">
                    <input
                      type="checkbox"
                      name="agree"
                      className="cursor-pointer"
                    />
                    <p className="text-[14px] font-medium capitalize">
                      By signing up, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
                  </div>
                  <div
                    className="log pt-2 cursor-pointer"
                    onClick={() => {
                      setLogIn(true);
                      setSignUp(false);
                    }}
                  >
                    <p className="text-[14px] font-medium underline text-blue-600">
                      <a href="#"> Already have an account? log in</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={() => {
              setSignUp(false);
              setLogIn(false);
            }}
            className="overlay absolute top-0 left-0 w-full h-screen bg-gray-900 opacity-45 z-98 cursor-pointer"
          ></div>

          {/* notify */}
          <div
            className={`notify fixed top-0 left-1/2 -translate-x-1/2 z-100 transition-all duration-300 ${
              signin === true ? "top-[50px] block" : "opacity-0 "
            }`}
          >
            <div className="box bg-white py-3 text-center px-3  border border-[#d3d3d3] rounded-[10px] ">
              <p className=" font-medium text-[#151515] text-center text-[12px] flex items-center gap-1 capitalize">
                <span className=" font-bold text-lg">
                  Your account has been successfully created. please log in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div
        className={`login transition-all duration-300 ease-in-out ${
          logIn === true ? "block opacity-100" : " opacity-0 hidden"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2 z-99">
          <div className={`main w-full`}>
            <div className="w-[450px]">
              <div className="form py-[35px]! px-[37px]! w-full bg-white my-20 rounded-2xl">
                <div className="header pb-10">
                  <h2 className="text-5xl font-bold text-center">Log In</h2>
                  <p className="text-[16px] font-medium text-gray-500 text-center pt-6">
                    Join us today and unlock all features
                  </p>
                </div>
                <form onSubmit={handleLogSubmit} className="">
                  <div className="name ">
                    <label htmlFor="username">Username :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <User />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your username :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="email pt-7">
                    <label htmlFor="email">Email :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <Mail />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="password pt-7 pb-8">
                    <label htmlFor="password">Password :</label>
                    <div className="flex gap-2 items-center border-b border-gray-300">
                      <Lock />
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password :"
                        className="py-3  pr-5  w-full focus-within:outline-0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {}}
                    className="w-full bg-blue-500 py-3 rounded-2xl cursor-pointer text-xl text-white font-semibold"
                    type="submit"
                  >
                    LogIn
                  </button>
                  <div className="checkbox flex gap-3  pt-5">
                    <input
                      type="checkbox"
                      name="agree"
                      className="cursor-pointer"
                    />
                    <p className="text-[14px] font-medium capitalize">
                      By logIn, you agree to our Terms of Service and Privacy
                      Policy.
                    </p>
                  </div>
                  <div className="log pt-2 flex gap-8 items-center">
                    <p className="text-[14px] font-medium underline text-blue-600">
                      <a
                        href="#"
                        onClick={() => {
                          setSignUp(true);
                          setLogIn(false);
                        }}
                      >
                        {" "}
                        Don’t have an account? Create one
                      </a>
                    </p>
                    <p className="text-[14px] font-medium underline text-blue-600">
                      <a href="#"> Forget password?</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="overlay absolute top-0 left-0 w-full h-screen bg-gray-700 opacity-45 z-98 cursor-pointer"
            onClick={() => {
              setSignUp(false);
              setLogIn(false);
            }}
          ></div>
          {/* notify */}
          <div
            className={`notify fixed top-0 left-1/2 -translate-x-1/2 z-100 transition-all duration-300 ${
              logedin === true ? "top-[50px] block" : "opacity-0 " 
            }`}
          >
            <div className="box bg-white py-3 text-center px-3  border border-[#d3d3d3] rounded-[10px] flex gap-2 ">
              <p className=" font-medium text-[#151515] text-center text-[12px]  capitalize">
                <span className=" font-bold text-lg">Login successful.</span>
              </p>
              <CheckCircle />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Form
