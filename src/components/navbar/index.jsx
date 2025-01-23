import React from "react";
import { House, Calendar1, Bookmark, UserRound } from "lucide-react"; // Importing Lucide icons
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px]">
      <nav className="w-full p-2 bg-black/80 text-white rounded-t-lg">
        <ul className="flex w-full border-b border-b-gray-600 border-dotted justify-around">
          {/* Home */}
          <div className="flex flex-col justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/">
              <div className="w-12 h-12 flex justify-center items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <House className="text-current transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Home
              </li>
            </Link>
          </div>

          {/* Sessions */}
          <div className="flex flex-col justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/session">
              <div className="w-12 h-12 flex justify-center items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <Calendar1 className="text-current transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Sessions
              </li>
            </Link>
          </div>

          {/* Bookmark */}
          <div className="flex flex-col justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/bookmark">
              <div className="w-12 h-12 flex justify-center items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <Bookmark className="text-current transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Bookmark
              </li>
            </Link>
          </div>

          {/* Profile */}
          <div className="flex flex-col justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/profile">
              <div className="w-12 h-12 flex justify-center items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <UserRound className="text-current transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "14px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                Profile
              </li>
            </Link>
          </div>
        </ul>

        {/* Footer */}
        <div className="flex justify-center items-center gap-2 p-2">
          <p>Powered By</p>
          <img src={Logo} alt="Logo" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
