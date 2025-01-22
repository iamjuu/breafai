import React from "react";
import { House, Calendar1, Bookmark, UserRound } from "lucide-react"; // Importing Lucide icons
import { Link } from "react-router-dom";
import {Logo} from '../../assets'
const Navbar = () => {
  return (
    <div className="fixed  bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px]">
      <nav className="w-full p-2 bg-gray-900 text-white rounded-t-lg">
        <ul className="flex w-full  border-b border-b-gray-600 border-dotted  justify-around">
          <div className="flex flex-col items-center group">
            <Link to="/">
              <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
                <House className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
              >
                Home
              </li>
            </Link>
          </div>
          <div className="flex flex-col items-center group">
            <Link to="/session">
              <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
                <Calendar1 className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
              >
                Sessions
              </li>
            </Link>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
              <Bookmark className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
            </div>
            <li
              style={{ fontSize: "14px" }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
            >
              Bookmark
            </li>
          </div>
          <div className="flex flex-col items-center mb-2 group">
            <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
              <UserRound className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
            </div>
            <li
              style={{ fontSize: "14px" }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
            >
              Contact
            </li>
          </div>
        </ul>
      <div  >
        <div className=" flex justify-center items-center gap-2 p12 "> <p>Powered By</p> <p> <img src={Logo} alt="" /> </p> </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
