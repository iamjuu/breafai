import React from "react";
import { Banner, Logo, Profile, Pen, Location, Message, Phone } from "../../../../assets";

const ProfilePage = () => {
  return (
    <div className="min-h-screen  gap-5 bg-gray-900 text-gray-300 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center p-4 md:p-6">
        {/* Banner */}
        <div
          className="w-full h-48 md:h-64 lg:h-72 bg-gray-900 rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Banner})`
          }}
        />
        
        {/* Profile Picture */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-[#5BF5FF] rounded-full -mt-12 md:-mt-16 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${Profile})`
          }}
        >
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <img src={Pen} alt="Edit" className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="w-full md:w-2/3 lg:w-1/2 mt-4 text-center">
          <h2 className="text-lg md:text-xl font-semibold">Emma Wrights</h2>
          <p className="text-sm md:text-base">Product Head</p>
          <p className="text-sm md:text-base">George Digital Solutions</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="flex-1    mb-56  pl-10 pt-5 md:p-6">
        <div className="max-w-md mx-auto space-y-4">          
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 border border-[#5BF5FF] flex items-center justify-center">
                <img src={Location} alt="" className="w-6 h-6" />
              </div>
              <div>
                <p style={{fontSize:'14px'}} className="font-medium text-[#868C98]">Address</p>
                <p  style={{fontSize:'16px'}} className="text-sm">Vellimadukunnu, Calicut</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 border border-[#5BF5FF] flex items-center justify-center">
                <img src={Message} alt="" className="w-6 h-6" />
              </div>
              <div>
                <p style={{fontSize:'14px'}} className="font-medium text-[#868C98]">Mail id</p>
                <p  style={{fontSize:'16px'}} className="text-sm">ameenahsan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 border border-[#5BF5FF] flex items-center justify-center">
                <img src={Phone} alt="" className="w-6 h-6" />
              </div>
              <div>
                <p  style={{fontSize:'14px'}} className="font-medium  text-[#868C98]">Phone Number</p>
                <p   style={{fontSize:'16px'}} className="text-sm">984179-90837</p>
              </div>
            </div>
        </div>
      </div>

      {/* Footer - Now fixed at bottom */}
      {/* <div className=" p-4  ">
        <div className=" justify-center mt-11 mb-28 flex   gap-2">
          <p className="text-sm">Powered By</p>
          <div className="flex items-center gap-1">
            <img src={Logo} alt="EventHex Logo" className="h-5" />
            <span className="text-sm">EventHex</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;