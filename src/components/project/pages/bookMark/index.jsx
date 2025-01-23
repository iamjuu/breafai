import React, { useState } from "react";
import { Calendar, Clock, Heart, Share2 } from "lucide-react";
import {
  Profile,
  Time,
  Bookmark,
  Chat,
  Session,
  Nosession,
} from "../../../../assets";
import Button from "../../../button";

const Sessions = () => {
  const [activeTab, setActiveTab] = useState("sessions");
  const events = [
    {
      id: 1,
      date: "15 Aug 2024",
      stage: "Stage 01",
      title: "Shaping the Financial Ecosystem of the Future",
      timeSlot: "8:00 AM - 9:30 AM",
      attendees: [
        { id: 1, imageUrl: Profile },
        { id: 2, imageUrl: Profile },
        { id: 3, imageUrl: Profile },
      ],
      additionalAttendees: 2,
      buttonName: "Transcripted",
    },
    {
      id: 2,
      date: "15 Aug 2024",
      stage: "Stage 02",
      title: "Digital Transformation in Modern Banking",
      timeSlot: "10:00 AM - 11:30 AM",
      attendees: [
        { id: 1, imageUrl: Profile },
        { id: 2, imageUrl: Profile },
        { id: 3, imageUrl: Profile },
      ],
      additionalAttendees: 2,
      buttonName: "Loading",
    },
  ];

  const takeawayContent = {
    title: "Cross-Border Payment Innovations Creating Key Challenges",
    description:
      "EventHex stands out by tackling two key challenges that traditional event management often struggles with: creating personalized experiences and ensuring attendee retention. This platform is built",
    tags: ["AIGen", "Prediction", "Strategy"],
    likes: 33,
  };

  return (
    <div className="bg-[#10131A] min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("sessions")}
            className={`flex items-center gap-2 ${
              activeTab === "sessions"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400"
            }`}
          >
            <div className="w-5 h-5">
              <img src={Session} alt="" />
            </div>
            Sessions
          </button>

          <button
            onClick={() => setActiveTab("takeAway")}
            className={`flex items-center gap-2 px-3 py-2 ${
              activeTab === "takeAway"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400"
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
              <img src={Chat} alt="" />
            </div>
            Take Away
          </button>
        </div>

        {activeTab === "sessions" && (
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event.id}
                  className="flex bg-[#282C3A] rounded-[16px] p-4 flex-col gap-3"
                >
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex gap-2 md:gap-3 flex-wrap">
                      <Calendar color="white" size={20} />
                      <span className="text-gray-300 text-xs md:text-sm">
                        {event.date}
                      </span>
                      <span className="text-gray-300 text-xs md:text-sm">
                        {event.stage}
                      </span>
                    </div>
                    <Button
                      btnName={event.buttonName}
                      img={Time}
                      className="border text-black bg-slate-50 items-center p-1 flex rounded-md text-xs md:text-sm"
                    />
                  </div>

                  <div className="border-b border-dotted border-gray-500 pb-3">
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                      {event.title}
                    </p>
                  </div>

                  <div className="w-full py-3 text-white flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {event.attendees.map((attendee) => (
                          <div
                            key={attendee.id}
                            className="relative rounded-full border-2 overflow-hidden w-6 h-6 md:w-8 md:h-8 group"
                          >
                            <img
                              src={attendee.imageUrl}
                              alt="Attendee"
                              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:translate-y-12"
                            />
                          </div>
                        ))}
                        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 border-2 border-gray-900 text-xs md:text-sm text-gray-400">
                          +{event.additionalAttendees}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs md:text-sm">
                        {event.timeSlot}
                      </span>
                      <img src={Bookmark} alt="bookmark" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // ***************
              <div className="w-full px-4">
                <img
                  src={Nosession}
                  alt="Banner"
                  className="w-full rounded-[15px] object-cover"
                />
              </div>
            )}
          </div>
        )}
        {activeTab === "takeAway" && (
          <div className="bg-[#1C1F26] rounded-lg p-4 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl">⭐</span>
              <h2 className="text-lg font-semibold">{takeawayContent.title}</h2>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              {takeawayContent.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {takeawayContent.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-gray-400 text-sm px-2 py-1 bg-[#282C3A] rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-cyan-500">
                <Heart className="w-5 h-5" />
                <span>{takeawayContent.likes}</span>
              </div>
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-gray-400" />
                <img
                  src={Bookmark}
                  alt="bookmark"
                  className="w-5 h-5 text-gray-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sessions;
