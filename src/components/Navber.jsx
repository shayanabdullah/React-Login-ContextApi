import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/context.js";
import {
  CheckCircle,
  ChevronDown,
  Cross,
  Search,
  ShoppingCart,
  UserCircle,
  XCircle,
} from "lucide-react";


 
const Navber = () => {
  const {
    setSignUp,
    isSignedIn,
    setLogIn,
    isLoggedIn,
    setIsSignedIn,
    setNewData,
    newData,
    setIsLoggedIn,
  } = useContext(LoginContext);

  const [isLogOut, setIsLogOut] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const handleSignUpClick = () => {
    setSignUp(true);
  };

  const handleLogInClick = () => {
    setLogIn(true);
  };
  const handleLogOut = () => {
    setLogIn(false);
    setIsSignedIn(false);
    setIsLoggedIn(false);
    setNewData({});

       setIsLogOut(true);
    // remove notify 
    setTimeout(()=>{
       setIsLogOut(false);
    },2000)
  };
  const handleUserInfo = () => {
setUserInfo(!userInfo)
  };

  return (
    <>
      <section>
        <header className="py-2.5 bg-black">
          <h2 className="text-[14px] text-white text-center font-normal ">
            Sign up and get 20% off to your first order. Sign Up Now
          </h2>
        </header>
        <div className="container">
          <div className="pt-7 pb-6">
            <nav className="py-5 flex items-center gap-8">
              {/* Logo */}
              <div className="logo">
                <h1 className="text-4xl font-sans font-bold">SHOP.CO</h1>
              </div>
              {/* navItems */}
              <div className="nav-main pl-10 w-full max-w-[400px]">
                <ul className="flex items-center gap-x-6 ">
                  <li className="text-lg font-normal flex gap-1 items-center">
                    <a href="#">Shop</a> <ChevronDown />{" "}
                  </li>
                  <li className="text-lg font-normal flex gap-1 items-center">
                    <a href="#">On Sale</a>{" "}
                  </li>
                  <li className="text-lg font-normal flex gap-1 items-center">
                    <a href="#">New Arrivals</a>{" "}
                  </li>
                  <li className="text-lg font-normal flex gap-1 items-center">
                    <a href="#"> Brands</a>{" "}
                  </li>
                </ul>
              </div>
              {/* search bar */}
              <div className=" w-full relative max-w-[480px]">
                <div className="absolute top-[18px] left-[18px]">
                  {" "}
                  <Search />
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for products..."
                  className="py-4 w-full bg-[#F0F0F0] rounded-[62px] focus-within:outline-0 pl-[52px] text-lg font-normal text-black/50 "
                />
              </div>
              {/* user, btn, cart */}
              <div className="flex items-center gap-5 relative">
                <button
                  className="py-2 px-5 cursor-pointer bg-black text-white text-lg font-medium rounded-2xl"
                  onClick={
                    isLoggedIn === true
                      ? handleLogOut
                      : isSignedIn === true
                      ? handleLogInClick
                      : handleSignUpClick
                  }
                >
                  {isLoggedIn === true
                    ? "Logout"
                    : isSignedIn === true
                    ? "Log In"
                    : "Sign In"}
                </button>
                <ShoppingCart className="cursor-pointer" />
                <button className=" cursor-pointer" onClick={handleUserInfo}>
                  <UserCircle />
                </button>

                {/* user-info */}
                <div className={`absolute min-w-[300px] bg-gray-100 left-[-25px] py-5  rounded-2xl px-8 transition-all duration-300 ease-in-out  ${userInfo ? 'top-[65px] opacity-100 z-10' : 'opacity-0 -top-full -z-10'}`}>
                  <ul className="py-5 relative">
                    <li className="text-xl font-medium leading-[150%]">
                      Username :  {newData?.name || "Guest"}
                    </li>
                    <li className="text-xl font-medium pt-5 leading-[150%]">
                      Email :  {newData?.email || "N/A Please login"}
                    </li>
                    <div className="absolute top-[-5px] -right-2.5 cursor-pointer" onClick={handleUserInfo}><XCircle/></div>
                  </ul>
                    <button
                  className="py-2 px-5 cursor-pointer bg-black text-white text-lg font-medium rounded-2xl"
                  onClick={
                    isLoggedIn === true
                      ? handleLogOut
                      : isSignedIn === true
                      ? handleLogInClick
                      : handleSignUpClick
                  }
                >
                  {isLoggedIn === true
                    ? "Logout"
                    : isSignedIn === true
                    ? "Log In"
                    : "Sign In"}
                </button>
                </div>
              </div>

            </nav>
          </div>
        </div>

        {/* notification */}
        <div
          className={`notify fixed top-0 left-1/2 -translate-x-1/2 z-100 transition-all duration-300 ${
            isLogOut === true ? "top-[50px] block" : "opacity-0 "
          }`}
        >
          <div className="box bg-white py-3 text-center px-3  border border-[#d3d3d3] rounded-[10px] flex gap-2 ">
            <p className=" font-medium text-[#151515] text-center text-[12px]  capitalize">
              <span className=" font-bold text-lg">Log Out successful.</span>
            </p>
            <CheckCircle />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navber;
