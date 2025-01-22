import React from "react";
import { House, Calendar1, Bookmark, UserRound } from "lucide-react"; // Importing Lucide icons

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className=" w-full  p-2  bg-gray-900 text-white">
        <ul className="flex w-full justify-around ">
        <div className="flex flex-col items-center group">
            <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
              <House className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
            </div>
            <li
              style={{ fontSize: "14px" }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
            >
              Home
            </li>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
              <Calendar1 className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
            </div>
            <li
              style={{ fontSize: "14px" }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
            >
              Sessions
            </li>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#5BF5FF] transition-all duration-150 delay-75">
              <Bookmark className="text-current transition-all duration-150 delay-75 group-hover:text-black" />
            </div>
            <li
              style={{ fontSize: "14px" }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-150 delay-75"
            >
              Book mark
            </li>
          </div>
          <div className="flex flex-col items-center group">
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
      </nav>
    </div>
  );
};

export default Navbar;
