import React from "react";
import { Banner,  Profile, Pen, Location, Message, Phone } from "../../../../assets";

const ProfilePage = () => {
  return (
    <div className="min-h-screen  gap-5 bg-gray-900 text-gray-300 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center p-3 md:p-6">
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
          <div className="absolute   bg-[#E2E4E9] bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <img src={Pen} alt="Edit" className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>

        {/* Profile Info */}
        <div   className="w-full   md:w-2/3 lg:w-1/2 mt-4 text-center">
          <h2 style={{fontSize:'14px', fontWeight:'500'}} className=" font-inter font-semibold">Emma Wrights</h2>
          <div  style={{lineHeight:'13px'}} className="flex flex-col  ">

          <p  style={{fontSize:'12px'}} className="text-[#E2E4E9]">Product Head</p>
          <p style={{fontSize:'12px'}} className=" text-[#E2E4E9]">George Digital Solutions</p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="flex-1    mb-56  pl-10 pt-5 md:p-6">
        <div className="max-w-md mx-auto space-y-4">          
            <div className="flex    items-center  gap-3">
              <div className="flex-shrink-0 w-[35px] h-[35px] rounded-[7px] border border-[#5BF5FF] flex items-center justify-center">
                <img src={Location} alt="" className="w-6 h-6" />
              </div>
              <div className="">
                <p style={{fontSize:'14px'}} className="font-medium text-[#868C98]">Address</p>
                <p  style={{fontSize:'16px'}} className="text-sm">Vellimadukunnu, Calicut</p>
              </div>
            </div>
            <div className="flex items-center  gap-3">
              <div className="flex-shrink-0 w-[35px] h-[35px] rounded-[7px] border border-[#5BF5FF] flex items-center justify-center">
                <img src={Message} alt="" className="w-6 h-6" />
              </div>
              <div>
                <p style={{fontSize:'14px'}} className="font-medium text-[#868C98]">Mail id</p>
                <p  style={{fontSize:'16px'}} className="text-sm">ameenahsan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center   gap-3">
              <div className="flex-shrink-0 w-[35px] h-[35px] rounded-[7px] border border-[#5BF5FF] flex items-center justify-center">
                <img src={Phone} alt="" className="w-6 h-6" />
              </div>
              <div>
                <p  style={{fontSize:'14px'}} className="font-medium  text-[#868C98]">Phone Number</p>
                <p   style={{fontSize:'16px'}} className="text-sm">984179-90837</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;