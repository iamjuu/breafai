import React from "react";
import { House, Calendar1, Bookmark, UserRound } from "lucide-react"; // Importing Lucide icons
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 flex justify-center   transform -translate-x-1/2 w-full max-w-[500px]">
      <nav className="w-[390px] h-[80px]  bg-black/80 text-white rounded-t-lg">
        <ul className="flex w-full border-b  p-1 border-b-gray-600 border-dotted justify-around">
          {/* Home */}
          <div className="flex  w-[62px] h-[40px] flex-col   justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/">
              <div className=" flex justify-center w-[24px] h-[24px] items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <House className="text-current h-[16px]  w-[16px] transition-all duration-700 ease-out group-hover:text-black" />
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
          <div className="flex  w-[62px] h-[40px] flex-col   justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/session">
              <div className=" flex justify-center w-[24px] h-[24px] items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <Calendar1 className="text-current h-[16px]  w-[16px] transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                session
              </li>
            </Link>
          </div>

          {/* Bookmark */}
          <div className="flex  w-[62px] h-[40px] flex-col   justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/bookmark">
              <div className=" flex justify-center w-[24px] h-[24px] items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <Bookmark className="text-current h-[16px]  w-[16px] transition-all duration-700 ease-out group-hover:text-black" />
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
          <div className="flex  w-[62px] h-[40px] flex-col   justify-center items-center group">
            <Link className="flex justify-start flex-col items-center" to="/profile">
              <div className=" flex justify-center w-[24px] h-[24px] items-center rounded-full group-hover:bg-[#5BF5FF] transition-all duration-700 ease-out">
                <UserRound className="text-current h-[16px]  w-[16px] transition-all duration-700 ease-out group-hover:text-black" />
              </div>
              <li
                style={{ fontSize: "10px" }}
                className="cursor-pointer text-center hover:text-gray-300 transition-all duration-700 ease-out"
              >
                profile
              </li>
            </Link>
          </div>
        </ul>

        {/* Footer */}
        <div className="flex justify-center p-1  items-center gap-2 ">
          <p style={{fontSize:'12px'}} className="text-[#CDD0D5]" >Powered By</p>
          <div className="flex gap-1 justify-center items-center">

          <img className="w-[15px] [h-15px]" src={Logo} alt="Logo" />
          <p style={{fontSize:'12px'}} >EventHex</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
