import React, { useState } from "react";
import { Clock, Calendar, Heart, Copy, Twitter } from "lucide-react";
import {
  Calander,
  Chat,
  Chat1,
  Folder,
  OverView,
  Takeaway,
  Share,
  Download,
  Leftarrow,
  Bookmark,
  Social,
  Lindekin,
  Pdf,
  Download1,
  ShareBlack,
  Profile,
  FolderLine,
} from "../../../../assets";
import Button from "../../../button";
import { useNavigate } from "react-router-dom";

const EventDetailsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };
  const [activeTab, setActiveTab] = useState("Overview");
  const [isTwitter, setTwitter] = useState(false);
  const [isLinked, setLinked] = useState(false);

  const handleSocialClick = () => {
    setLinked(true);
    setTwitter(false);
  };

  const handleTwitterClick = () => {
    setTwitter(true);
    setLinked(false);
  };
  const highlights = [
    "creating personalized experiences and ensuring attendee retention. This",
    "experiences and ensuring attendee",
    "stands out by tackling two key challeng",
    "personalized experiences and ensuring attendee retention. This",
  ];

  const overviewContent = [
    {
      name: "Overview",
      content: (
        <>
          <div className="flex  py-4 gap-[8px]">
            {" "}
            <span>
              <img className="w-[26px]" src={OverView} alt="" />
            </span>{" "}
            <p className=" text-[16px] font-medium ">Overview</p>
          </div>
          <div className="bg-[#282C3A] p-3  rounded-lg max-w-lg">
            <div className="p-3">
              <p className="text-[#CDD0D5] mb-5 leading-[18px] text-[14px] font-[400]">
                EventHex stands out by tackling two key challenges that
                traditional event management often struggles with: creating
                personalized experiences and ensuring attendee retention. This
                platform is built to streamline even
              </p>
            </div>
            <div
              style={{ borderRadius: "16px" }}
              className="mb-8 p-3  flex flex-col gap-[10px]  bg-[#222534]"
            >
              <h3 style={{ fontSize: "14px" }} className="text-[#CDD0D5] mb-1">
                Session Highlights
              </h3>
              <ul className="flex flex-col ml-5  text-left space-y-2 list-disc   marker:text-[#5BF5FF] marker:text-[20px]">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="w-full text-[14px] text-[#CDD0D5] leading-[18px]"
                  >
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex  p-2 justify-between  ">
              <div className="flex gap-[18px]">
                <button className="flex items-center   gap-2 px-2 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  <img className="w-[18px]" src={Share} alt="" />
                  <span style={{ fontSize: "12px" }}>Share</span>
                </button>
                <button className="flex items-center gap-2 px-2 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  <img className="w-[15px] h-[18px]" src={Download} alt="" />
                  <span style={{ fontSize: "12px" }}>Download</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Overview",
      content: (
        <>
          <div className="bg-[#282C3A] p-3  rounded-lg max-w-lg">
            <div className="p-3">
              <p className="text-[#CDD0D5] mb-5 leading-[18px] text-[14px] font-[400]">
                EventHex stands out by tackling two key challenges that
                traditional event management often struggles with: creating
                personalized experiences and ensuring attendee retention. This
                platform is built to streamline even
              </p>
            </div>
            <div
              style={{ borderRadius: "16px" }}
              className="mb-8 p-3  flex flex-col gap-[10px]  bg-[#222534]"
            >
              <h3 style={{ fontSize: "14px" }} className="text-[#CDD0D5] mb-1">
                Session Highlights
              </h3>
              <ul className="flex flex-col ml-5  text-left space-y-2 list-disc   marker:text-[#5BF5FF] marker:text-[20px]">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="w-full text-[14px] text-[#CDD0D5] leading-[18px]"
                  >
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex  p-2 justify-between  ">
              <div className="flex gap-[18px]">
                <button className="flex items-center   gap-2 px-2 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  <img className="w-[18px]" src={Share} alt="" />
                  <span style={{ fontSize: "12px" }}>Share</span>
                </button>
                <button className="flex items-center gap-2 px-2 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  <img className="w-[15px] h-[18px]" src={Download} alt="" />
                  <span style={{ fontSize: "12px" }}>Download</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const takeAwayContent = [
    {
      name: "Take Away 1",
      content: (
        <>
          <div className="   py-4 flex justify-between">
            <div className=" flex     items-center justify-center ">
              <span>
                <img className="w-[26px]" src={Takeaway} alt="" />
              </span>
              <p className="text-[16px] font-[500]">Ai Generated Insights</p>
            </div>

            <Button
              img={Takeaway}
              btnName={"Regenerate"}
              className={
                "rounded-[7px] border p-1 gap-[6px]  text-[12px] text-[#5BF5FF] flex border-[#5BF5FF] font-normal"
              }
            />
          </div>
          <div className="   bg-[#282C3A] rounded-[16px] p-4 mb-20">
            <div className=" flex justify-center">
              <h2 className="text-white  text-[17px] font-[600] mb-3 flex items-center gap-2">
                👉 Cross-Border Payment Innovations Creating Key Challenges
              </h2>
            </div>

            <p className="text-gray-300 mb-4 text-sm">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built
            </p>
            <div className="flex flex-wrap gap-2   mb-4">
              <div className=" rounded-[7px]  flex justify-center items-center bg-gray-900  ">
                <span className=" text-[12px] font-[400] text-white p-2">
                  #AIGen
                </span>
              </div>
              <div className=" rounded-[7px]  flex justify-center items-center bg-gray-900 ">
                <span className="text-[12px] font-[400] text-white p-2">
                  #Prediction
                </span>
              </div>
              <div className=" rounded-[7px]  flex justify-center items-center bg-gray-900  ">
                <span className="text-[12px] font-[400] text-white p-2">
                  #Strategy
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-1 text-gray-400 hover:text-gray-300">
                <Heart className=" text-[#5BF5FF] w-4 h-4" />
                <span>33</span>
              </button>
              <div className="flex gap-3">
                <button className="text-gray-400 hover:text-gray-300">
                  <img className="w-[24px] h-[24px]" src={Bookmark} alt="" />
                </button>
                <button className="text-gray-400 hover:text-gray-300">
                  <img className="w-[24px] h-[24px]" src={Share} alt="" />
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const socialContent = [
    {
      name: "Social",
      content: (
        <div className="mb-4">
          <div className="flex py-4 justify-between items-center ">
            <div className="flex  justify-center    items-center gap-[8px]">
              <img className="w-[26px]" src={Social} alt="" />
              <span style={{ fontSize: "16px" }} className="text-[#FFFFFF]">
                Social Content
              </span>
            </div>
            <div className="flex    bg-[#222534] rounded-[8px] gap-2">
              <div
                className={` flex  gap-1 p-1 rounded-[6px]  justify-center items-center ${isLinked ? "bg-[#5BF5FF]" : ""} `}
              >
                <img className="w-[20px]" src={Lindekin} alt="" />
                <span
                  className="text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors"
                  onClick={handleSocialClick}
                >
                  <p className={` ${isLinked ? "text-black" : ""}`}>Linkedin</p>
                </span>
              </div>

              <div
                className={` flex justify-center  gap-1 p-1 rounded-[6px] items-center ${isTwitter ? "bg-[#5BF5FF]" : ""} `}
              >
                <Twitter
                  className={`${
                    isTwitter ? "text-black" : "text-[#5BF5FF]"
                  } h-[20px] w-[20px]`}
                />

                <span
                  className="text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors"
                  onClick={handleTwitterClick}
                >
                  <p
                    className={`${isTwitter ? "text-black" : "text-[#5BF5FF]"}`}
                  >
                    Twitter
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#282C3A] mt-5 rounded-lg  mb-3">
            {isLinked ? (
              // ************lindein **********
              <div className="max-w-xl bg-[#282C3A]  text-gray-100 p-4 rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img src={Lindekin} alt="" />
                    <span className="text-gray-300"># Post 1</span>
                  </div>
                  <span className="text-gray-400 text-sm">12/280</span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className=" text-gray-300  text-[14px]  rounded-[11px] p-3 bg-[#222534] mb-3">
                    <span className=" mr-1">👍</span>
                    EventHex stands out by tackling two key challenges that
                    traditional event management often struggles with: creating
                    personalized experiences and ensuring attendee retention.
                    This platform is built to streamline even
                  </p>
                  <div className="text-cyan-400 text-sm">
                    #TechconfT25 #Wokshope
                  </div>
                </div>

                {/* Footer */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <img className="w-[24px]" src={Share} alt="" />
                    <span style={{ fontSize: "12px" }}>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <Copy className="w-[24px] h-[24px]" />
                    <span style={{ fontSize: "12px" }}>Copy</span>
                  </button>
                </div>
              </div>
            ) : (
              // ************* twitter ************
              <div className="max-w-xl  bg-[#282C3A] text-gray-100 p-4 rounded-lg">
                {/* Header */}
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Post 1</span>
                  </div>
                  <span className="text-gray-400 text-sm">12/280</span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-gray-300  p-3 text-[14px] rounded-[11px] bg-[#222534] mb-3">
                    <span className="text-yellow-400 mr-1">👍</span>
                    EventHex stands out by tackling two key challenges that
                    traditional event management often struggles with: creating
                    personalized experiences and ensuring attendee retention.
                    This platform is built to streamline even
                  </p>
                  <div className="text-cyan-400 text-sm">
                    #TechconfT25 #Wokshope
                  </div>
                </div>

                {/* Footer */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <img className="w-[24px]" src={Share} alt="" />
                    <span style={{ fontSize: "12px" }}>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <Copy className="w-[24px] h-[24px]" />
                    <span style={{ fontSize: "12px" }}>Copy</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  const resourcesContent = [
    {
      name: "Resources",
      content: (
        <div className="  text-white">
          <div className="">
            <p className="flex  gap-[8px] text-[16px] items-center py-4">
              {" "}
              <span>
                {" "}
                <img className="w-[26px] " src={FolderLine} alt="" />
              </span>{" "}
              Resources
            </p>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Pdf} alt="" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">title</h3>
                <p className="text-gray-400 text-xs">Pdf • size</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <img src={Download1} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Pdf} alt="" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 1
                </h3>
                <p className="text-gray-400 text-xs">Pdf • 2MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <img src={Download1} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Pdf} alt="" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 2
                </h3>
                <p className="text-gray-400 text-xs">Doc • 1.5MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <img src={Download1} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Pdf} alt="" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 3
                </h3>
                <p className="text-gray-400 text-xs">Excel • 3MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <img src={Download1} alt="" />
            </button>
          </div>
        </div>
      ),
    },
  ];

  const renderContent = () => {
    let activeContent;
    if (activeTab === "Overview") {
      activeContent = overviewContent;
    } else if (activeTab.startsWith("Take Away")) {
      activeContent = takeAwayContent;
    } else if (activeTab === "Social") {
      activeContent = socialContent;
    } else if (activeTab === "Resources") {
      activeContent = resourcesContent;
    }
    return activeContent.map((item) => item.content);
  };

  return (
    <div className="w-full max-w-[500px] min-h-screen">
      <div className="w-full max-w-md bg-gray-900 p-2  min-h-screen">
        <div
          style={{
            background:
              "linear-gradient(to bottom right, #D5F8FF, #75EEFF, #0052D4)",
          }}
          className=" flex  rounded-[16px]  gap-[6px] flex-col justify-center h-[175px] text-white"
        >
          <div className=" gap-[6px] flex flex-col p-5">
            <div className="w-full flex  justify-between items-center gap-[14px] ">
              <button onClick={handleBack} className="flex-shrink-0">
                <img
                  className="bg-gray-200 w-[32px] h-[32px] rounded-full"
                  src={Leftarrow}
                  alt=""
                />
              </button>
              <h1
                style={{ fontSize: "16px", fontWeight: "500" }}
                className="text-black font-bold flex-grow"
              >
                Shaping the Financial Ecosystem of the Future
              </h1>
            </div>

            <div className="flex items-center   border-t    gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <div
                  style={{
                    backgroundImage: `url(${Profile})`,
                  }}
                  className="w-full h-full bg-gray-600"
                ></div>
              </div>
              <div>
                <h2 className=" text-black text-[14px]  font-semibold">
                  Safari Sanders Dennyes
                </h2>
                <p className="text-black text-[12px] opacity-90">
                  AI Research Director, Tecnosys
                </p>
              </div>
            </div>

            <div className="flex items-center  justify-between gap-2  ">
              <div className="flex  gap-[4px]  items-center ">
                <Calendar className=" text-black  font-[100] w-[16px] h-[16px]" />
                <span className="   text-[12px] text-black text-sm">
                  Jan 17, 2025
                </span>
                <div className="w-[1px] h-4 bg-black" />
                <div className="flex items-center ">
                  <Clock className=" text-black w-4 h-4" />
                  <span className=" text-[12px] text-black ">45 min</span>
                </div>
              </div>

              <div className="">
                <img
                  className="w-[18px] h-[20px]"
                  style={{ color: "black" }}
                  src={ShareBlack}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b pb-3 mt-5  border-gray-700">
          <button
            onClick={() => setActiveTab("Overview")}
            className="flex-1     text-gray-400 hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <img className="w-[36px] h-[36px]" src={Calander} alt="" />
              <span className="text-[14px]">Overview</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Take Away 1")}
            className="flex-1  text-gray-400 hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <img className="w-[36px] h-[36px]" src={Chat} alt="" />
              <span className="text-[ 14px]">Take Away</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Social")}
            className="flex-1 text-gray-400  hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <img className="w-[36px] h-[36px]" src={Chat1} alt="" />
              <span className="text-[14px]">Social</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Resources")}
            className="flex-1  text-gray-400   hover:bg-gray-800 hover:rounded-md border-blue-400"
          >
            <div className="flex flex-col   items-center gap-2">
              <img className="w-[36px] h-[36px]" src={Folder} alt="" />
              <span className="text-[14px]">Resources</span>
            </div>
          </button>
        </div>
        <div className=" mt-2   p-2 flex flex-col gap-2  text-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
