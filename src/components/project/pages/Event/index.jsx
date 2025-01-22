import React, { useState } from "react";
import {
  Share2,
  Clock,
  Calendar,
  Download,
  Heart,
  Bookmark,
  Copy,
  Share,
  ClipboardList,
  FileType,
  Twitter,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Calander, Chat, Chat1, Folder,OverView,Takeaway } from "../../../../assets";
const EventDetailsPage = () => {
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
        <div className="flex gap-[8px]">  <span><img className="w-[26px]" src={OverView} alt="" /></span> <p style={{fontSize:'16px',fontWeight:'500'}}>Overview</p></div>
        <div className="bg-[#282C3A] p-6 rounded-lg max-w-lg">
          <p style={{fontSize:'14px'}} className="text-[#CDD0D5] mb-8 leading-relaxed">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
            to streamline even
          </p>
          <div  style={{borderRadius:'16px'}} className="mb-8 p-3  bg-[#222534]">
            <h3 className="text-white text-lg mb-4">Session Highlights</h3>
            <ul className=" flex flex-col  text-left space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex w-full justify-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-cyan-400 hover:bg-gray-800 transition-colors">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-cyan-400 hover:bg-gray-800 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
        </>
      ),
    },
    {
      name: "Overview",
      content: (
        <>
        <div className="flex gap-[8px]">  <span><img className="w-[26px]" src={OverView} alt="" /></span> <p style={{fontSize:'16px',fontWeight:'500'}}>Overview</p></div>
        <div className="bg-[#282C3A] p-6 rounded-lg max-w-lg">
          <p className="text-gray-300 mb-8 leading-relaxed">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
            to streamline even
          </p>
          <div  style={{borderRadius:'16px'}} className="mb-8 p-3  bg-[#222534]">
            <h3 className="text-white text-lg mb-4">Session Highlights</h3>
            <ul className=" flex flex-col  text-left space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex w-full justify-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-cyan-400 hover:bg-gray-800 transition-colors">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-cyan-400 hover:bg-gray-800 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
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
        <div className="flex gap-[8px]"> <span><img className="w-[26px]" src={Takeaway} alt="" /></span> <p style={{fontSize:'16px',fontWeight:'500'}}>Ai Generated Insights</p> </div>
        <div style={{borderRadius:'16px'}} className="bg-[#282C3A] rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-300 mb-3 flex justify-between items-center">
          
            
          </div>
          <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-yellow-400">👉</span>
            Cross-Border Payment Innovations Creating Key Challenges
          </h2>
          <p className="text-gray-300 mb-4 text-sm">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-cyan-400 text-sm">#AIGen</span>
            <span className="text-cyan-400 text-sm">#Prediction</span>
            <span className="text-cyan-400 text-sm">#Strategy</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-1 text-gray-400 hover:text-gray-300">
              <Heart className="w-4 h-4" />
              <span>like</span>
            </button>
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-gray-300">
                <Share className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <Bookmark className="w-4 h-4" />
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
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-300 mb-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AI Generated Insights</span>
            </div>
            <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Regenerate</span>
            </button>
          </div>
          <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-yellow-400">👉</span>
            Cross-Border Payment Innovations Creating Key Challenges
          </h2>
          <p className="text-gray-300 mb-4 text-sm">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-cyan-400 text-sm">#AIGen</span>
            <span className="text-cyan-400 text-sm">#Prediction</span>
            <span className="text-cyan-400 text-sm">#Strategy</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-1 text-gray-400 hover:text-gray-300">
              <Heart className="w-4 h-4" />
              <span>like</span>
            </button>
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-gray-300">
                <Share className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Take Away 2",
      content: (
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-300 mb-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AI Generated Insights</span>
            </div>
            <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Regenerate</span>
            </button>
          </div>
          <h2 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-yellow-400">👉</span>
            Cross-Border Payment Innovations Creating Key Challenges
          </h2>
          <p className="text-gray-300 mb-4 text-sm">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-cyan-400 text-sm">#AIGen</span>
            <span className="text-cyan-400 text-sm">#Prediction</span>
            <span className="text-cyan-400 text-sm">#Strategy</span>
          </div>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-1 text-gray-400 hover:text-gray-300">
              <Heart className="w-4 h-4" />
              <span>like</span>
            </button>
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-gray-300">
                <Share className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
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
              <Twitter className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300">Post</span>
            </div>
            <div className="flex gap-2">
              <span
                className="text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={handleSocialClick}
              >
                Linkedin
              </span>
              <span
                className="text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={handleTwitterClick}
              >
                twitter
              </span>
            </div>
          </div>

          {isTwitter && (
            <div className="text-cyan-400 text-sm mb-2 text-center">
              <p>Twitter-specific content goes here</p>
            </div>
          )}

          <div className="bg-gray-800 rounded-lg p-4 mb-3">
            {isLinked ? (
              // ************lindein **********
              <div className="max-w-xl bg-gray-900 text-gray-100 p-4 rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Post 1</span>
                  </div>
                  <span className="text-gray-400 text-sm">12/280</span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-gray-300 mb-3">
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
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            ) : (
              // ************* twitter ************
              <div className="max-w-xl bg-gray-900 text-gray-100 p-4 rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Post 1</span>
                  </div>
                  <span className="text-gray-400 text-sm">12/280</span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-gray-300 mb-3">
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
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            )}
            <div className="text-cyan-400 text-sm">#Techconf25 #Workshop</div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-cyan-400 hover:bg-gray-700 transition-colors">
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  const resourcesContent = [
    {
      name: "Resources",
      content: (
        <div className="p-4  text-white">
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <FileType className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">title</h3>
                <p className="text-gray-400 text-xs">Pdf • size</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <FileType className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 1
                </h3>
                <p className="text-gray-400 text-xs">Pdf • 2MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <FileType className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 2
                </h3>
                <p className="text-gray-400 text-xs">Doc • 1.5MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <FileType className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">
                  Resource 3
                </h3>
                <p className="text-gray-400 text-xs">Excel • 3MB</p>
              </div>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Download className="w-5 h-5" />
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
      <div className="w-full max-w-md bg-gray-900 min-h-screen">
        <div className="p-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white">
          <button className="mb-4">
            <span className="text-2xl">←</span>
          </button>
          <h1 className="text-2xl font-bold mb-4">
            Shaping the Financial Ecosystem of the Future
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div>
              <h2 className="font-semibold">Safari Sanders Dennyes</h2>
              <p className="text-sm opacity-90">
                AI Research Director, Tecnosys
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Jan 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">45 min</span>
            </div>
            <div className="ml-auto">
              <Share2 className="w-5 h-5" />
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
        <div className="p-4  flex flex-col gap-2  text-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
