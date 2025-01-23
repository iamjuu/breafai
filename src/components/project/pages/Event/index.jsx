import React, { useState } from "react";
import {
  Clock,
  Calendar,
  Heart,
  Copy,
  Twitter,

} from "lucide-react";
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
  ShareBlack
} from "../../../../assets";
import Button from "../../../button";
import {useNavigate} from 'react-router-dom'

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

  // Separate arrays for Overview and Take Away
  const overviewContent = [
    {
      name: "Overview",
      content: (
        <>
          <div className="flex gap-[8px]">
            {" "}
            <span>
              <img className="w-[26px]" src={OverView} alt="" />
            </span>{" "}
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Overview</p>
          </div>
          <div className="bg-[#282C3A] p-3 rounded-lg max-w-lg">
            <p
              style={{ lineHeight: "18px", fontSize: "14px" }}
              className="text-[#CDD0D5] mb-8 leading-relaxed"
            >
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even
            </p>
            <div
              style={{ borderRadius: "16px" }}
              className="mb-8 p-2  bg-[#222534]"
            >
              <h3 style={{ fontSize: "14px" }} className="text-[#CDD0D5] mb-1">
                Session Highlights
              </h3>
              <ul className="flex flex-col text-left space-y-2">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center w-full text-sm text-gray-400 gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between  ">
              <div className="flex gap-[18px]">
                <button className="flex items-center   gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  {/* <Share className="w-4 h-4" /> */}
                  <img src={Share} alt="" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  {/* <Download className="w-4 h-4" /> */}
                  <img src={Download} alt="" />
                  <span>Download</span>
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Overview",
      content: (
        <>
          <div className="flex gap-[8px]">
            {" "}
            <span>
              <img className="w-[26px]" src={OverView} alt="" />
            </span>{" "}
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Overview</p>
          </div>
          <div className="bg-[#282C3A] p-3 rounded-lg max-w-lg">
            <p
              style={{ lineHeight: "18px", fontSize: "14px" }}
              className="text-[#CDD0D5] mb-8 leading-relaxed"
            >
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even
            </p>
            <div
              style={{ borderRadius: "16px" }}
              className="mb-8 p-2  bg-[#222534]"
            >
              <h3 style={{ fontSize: "14px" }} className="text-[#CDD0D5] mb-1">
                Session Highlights
              </h3>
              <ul className="flex flex-col text-left space-y-2">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center w-full text-sm text-gray-400 gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between  ">
              <div className="flex gap-[18px]">
                <button className="flex items-center   gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  {/* <Share className="w-4 h-4" /> */}
                  <img src={Share} alt="" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                  {/* <Download className="w-4 h-4" /> */}
                  <img src={Download} alt="" />
                  <span>Download</span>
                </button>
              </div>
              <div></div>
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
          <div className="  mt-2 mb-2 flex justify-between">
            <div className=" flex items-center justify-center ">
              <span>
                <img className="w-[26px]" src={Takeaway} alt="" />
              </span>
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                Ai Generated Insights
              </p>
            </div>

            <Button
              img={Takeaway}
              btnName={"Regenerate"}
              className={
                " rounded-[7px] border gap-[6px] flex border-[#5BF5FF]"
              }
            />
          </div>
          <div
            style={{ borderRadius: "16px" }}
            className="bg-[#282C3A] rounded-lg p-4 mb-4"
          >
            <div className="text-sm text-gray-300 mb-3 flex justify-between items-center"></div>
            <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-yellow-400">👉</span>
              Cross-Border Payment Innovations Creating Key Challenges
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built
            </p>
            <div className="flex flex-wrap gap-2   mb-4">
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #AIGen
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #Prediction
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
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
                  <img src={Bookmark} alt="" />
                </button>
                <button className="text-gray-400 hover:text-gray-300">
                  <img src={Share} alt="" />
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Take Away 2",
      content: (
        <>
          <div
            style={{ borderRadius: "16px" }}
            className="bg-[#282C3A] rounded-lg p-4 mb-4"
          >
            <div className="text-sm text-gray-300 mb-3 flex justify-between items-center"></div>
            <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-yellow-400">👉</span>
              Cross-Border Payment Innovations Creating Key Challenges
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built
            </p>
            <div className="flex flex-wrap gap-2   mb-4">
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #AIGen
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #Prediction
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
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
                  <img src={Bookmark} alt="" />
                </button>
                <button className="text-gray-400 hover:text-gray-300">
                  <img src={Share} alt="" />
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Take Away 2",
      content: (
        <>
          <div
            style={{ borderRadius: "16px" }}
            className="  bg-[#282C3A] rounded-lg p-4 mb-10"
          >
            <div className="text-sm text-gray-300 mb-3 flex justify-between items-center"></div>
            <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-yellow-400">👉</span>
              Cross-Border Payment Innovations Creating Key Challenges
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built
            </p>
            <div className="flex flex-wrap gap-2   mb-4">
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #AIGen
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
                  #Prediction
                </span>
              </div>
              <div
                style={{ borderRadius: "7px" }}
                className=" flex justify-center items-center bg-gray-900  "
              >
                <span
                  style={{ fontSize: "7px", fontWeight: "400" }}
                  className="text-white p-2"
                >
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
                  <img src={Bookmark} alt="" />
                </button>
                <button className="text-gray-400 hover:text-gray-300">
                  <img src={Share} alt="" />
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
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <img src={Social} alt="" />
              <span className="text-gray-300">Social Content</span>
            </div>
            <div className="flex  bg-[#222534] p-2 rounded-[8px] gap-2">
              <div className= {` flex  p-2 rounded-[6px] justify-center items-center ${isLinked ? "bg-[#5BF5FF]" : ""} `}>
                <img src={Lindekin} alt="" />
                <span
                  className="text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors"
                  onClick={handleSocialClick}
                >
                  <p className={` ${isLinked?'text-black':''}`}>Linkedin</p>
                </span>
              </div>

              <div
                className={` flex justify-center p-2  rounded-[6px] items-center ${isTwitter ? "bg-[#5BF5FF]" : ""} `}
              >
                <Twitter className={ `${isTwitter ? "text-black" : "text-[#5BF5FF]"}`} />
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
                  <p className="text-gray-300  bg-[#222534] mb-3">
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
                    <img src={Share} alt="" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
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
                  <p className="text-gray-300  bg-[#222534] mb-3">
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
                    <img src={Share} alt="" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#5BF5FF] text-cyan-400 hover:bg-gray-800 transition-colors">
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
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
        <div className="p-1  text-white">
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
      <div className="w-full max-w-md bg-gray-900 p-5  min-h-screen">
        <div
          style={{
            borderRadius: "16px",
            background:
              "linear-gradient(to bottom right, #D5F8FF, #75EEFF, #0052D4)",
          }}
          className="p-4  text-white"
        >
          <button  onClick={handleBack}>
            <img 
              className="bg-gray-200 p-1 rounded-full"
              src={Leftarrow}
              alt=""
            />
          </button>
          <h1
            style={{ fontSize: "16px", fontWeight: "500" }}
            className=" text-black  font-bold mb-4"
          >
            Shaping the Financial Ecosystem of the Future
          </h1>
          <div className="flex items-center  border-t pt-2 gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div>
              <h2
                style={{ fontSize: "14px" }}
                className=" text-black  font-semibold"
              >
                Safari Sanders Dennyes
              </h2>
              <p style={{ fontSize: "12px" }} className="text-black opacity-90">
                AI Research Director, Tecnosys
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar
                style={{ fontWeight: "100" }}
                className=" text-black  w-4 h-4"
              />
              <span className=" text-black text-sm">Jan 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className=" text-black w-4 h-4" />
              <span className=" text-black text-sm">45 min</span>
            </div>
            <div className="ml-auto">
              {/* <Share2 className="w-5 h-5" /> */}
              <img style={{ color: "black" }} src={ShareBlack} alt="" />
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab("Overview")}
            className="flex-1 p-4 text-gray-400 hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <img src={Calander} alt="" />
              <span className="text-sm">Overview</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Take Away 1")}
            className="flex-1 p-4 text-gray-400 hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <img src={Chat} alt="" />
              <span className="text-sm">Take Away</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Social")}
            className="flex-1 p-4 text-gray-400  hover:bg-gray-800 hover:rounded-md"
          >
            <div className="flex flex-col items-center gap-2">
              <img src={Chat1} alt="" />
              <span className="text-sm">Social</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("Resources")}
            className="flex-1 p-4 text-gray-400   hover:bg-gray-800 hover:rounded-md border-blue-400"
          >
            <div className="flex flex-col   items-center gap-2">
              <img src={Folder} alt="" />
              <span className="text-sm">Resources</span>
            </div>
          </button>
        </div>
        <div className="p-2   flex flex-col gap-2  text-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
