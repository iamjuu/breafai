import React, { useState } from "react";
import { House, Calendar1, Bookmark, UserRound } from "lucide-react"; // Importing Lucide icons
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(""); // Track the active menu

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="fixed bottom-0 left-1/2 flex justify-center transform -translate-x-1/2 w-full max-w-[500px]">
      <nav className="w-[390px] h-[80px] bg-black/80 text-white rounded-t-lg">
        <ul className="flex w-full border-b p-1 border-b-gray-600 border-dotted justify-around">
          {/* Home */}
          <div className="flex w-[62px] h-[40px] flex-col justify-center items-center group">
            <Link
              to="/"
              className="flex justify-start flex-col items-center"
              onClick={() => handleMenuClick("home")}
            >
              <div
                className={`flex justify-center w-[24px] h-[24px] items-center rounded-full transition-all duration-700 ease-out ${
                  activeMenu === "home" ? "bg-[#5BF5FF]" : ""
                }`}
              >
                <House
                  className={`text-current h-[16px] w-[16px] transition-all duration-700 ease-out ${
                    activeMenu === "home" ? "text-white" : "group-hover:text-black"
                  }`}
                />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Home
              </li>
            </Link>
          </div>

          {/* Sessions */}
          <div className="flex w-[62px] h-[40px] flex-col justify-center items-center group">
            <Link
              to="/session"
              className="flex justify-start flex-col items-center"
              onClick={() => handleMenuClick("session")}
            >
              <div
                className={`flex justify-center w-[24px] h-[24px] items-center rounded-full transition-all duration-700 ease-out ${
                  activeMenu === "session" ? "bg-[#5BF5FF]" : "group-hover:bg-[#5BF5FF]"
                }`}
              >
                <Calendar1
                  className={`text-current h-[16px] w-[16px] transition-all duration-700 ease-out ${
                    activeMenu === "session" ? "text-white" : "group-hover:text-black"
                  }`}
                />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Session
              </li>
            </Link>
          </div>

          {/* Bookmark */}
          <div className="flex w-[62px] h-[40px] flex-col justify-center items-center group">
            <Link
              to="/bookmark"
              className="flex justify-start flex-col items-center"
              onClick={() => handleMenuClick("bookmark")}
            >
              <div
                className={`flex justify-center w-[24px] h-[24px] items-center rounded-full transition-all duration-700 ease-out ${
                  activeMenu === "bookmark" ? "bg-[#5BF5FF]" : "group-hover:bg-[#5BF5FF]"
                }`}
              >
                <Bookmark
                  className={`text-current h-[16px] w-[16px] transition-all duration-700 ease-out ${
                    activeMenu === "bookmark" ? "text-white" : "group-hover:text-black"
                  }`}
                />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Bookmark
              </li>
            </Link>
          </div>

          {/* Profile */}
          <div className="flex w-[62px] h-[40px] flex-col justify-center items-center group">
            <Link
              to="/profile"
              className="flex justify-start flex-col items-center"
              onClick={() => handleMenuClick("profile")}
            >
              <div
                className={`flex justify-center w-[24px] h-[24px] items-center rounded-full transition-all duration-700 ease-out ${
                  activeMenu === "profile" ? "bg-[#5BF5FF]" : "group-hover:bg-[#5BF5FF]"
                }`}
              >
                <UserRound
                  className={`text-current h-[16px] w-[16px] transition-all duration-700 ease-out ${
                    activeMenu === "profile" ? "text-white" : "group-hover:text-black"
                  }`}
                />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Profile
              </li>
            </Link>
          </div>
        </ul>

        {/* Footer */}
        <div className="flex justify-center p-1 items-center gap-2">
          <p style={{ fontSize: "12px" }} className="text-[#CDD0D5]">
            Powered By
          </p>
          <div className="flex gap-1 justify-center items-center">
            <img className="w-[15px] h-[15px]" src={Logo} alt="Logo" />
            <p style={{ fontSize: "12px" }}>EventHex</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
