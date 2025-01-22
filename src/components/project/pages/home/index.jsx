import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Profile, Banner } from "../../../../assets";
import Button from "../../../button";
const EventDetailsPage = () => {
  // Event data structure
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
      buttonName:'Transcripted'
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
      buttonName:'Loading'

    },
  ];

  return (
    <div className="bg-gray-900  min-h-screen">
      <div className=" flex flex-col justify-center items-center">
        {/* Header */}
        <div className="p-4 flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-base text-gray-300">Welcome Back</p>
            <h3  style={{fontSize:'16px'}} className="text-base font-bold text-gray-100">
              Ahmed Zidane ! 🤟🏻
            </h3>
          </div>
        </div>

        {/* Banner */}
        <div className="w-[366px] h-[300px]   bg-red-200 ">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full  rounded-md object-cover"
          />
        </div>

        {/* Event Section */}
        <div>
          <p className="text-gray-200 py-5 text-base font-medium">
            Latest Updated
          </p>

          {/* Events List */}
          <div className="flex w-[366px] flex-col gap-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex bg-[#282C3A] rounded-md p-3 flex-col gap-2"
              >
                {/* Event Header */}
                <div className="flex  justify-between    items-center flex-wrap">
                  <div className="flex gap-3">
                    <Calendar color="white" size={20} />
                    <span className="text-gray-300 text-sm">{event.date}</span>
                    <span className="text-gray-300 text-sm">{event.stage}</span>
                  </div>

                  <div>
                  <Button btnName={event.buttonName}     className="border text-black bg-white rounded-md" />
                  </div>
                </div>

                {/* Event Title */}
                <div className="border-b border-dotted border-gray-500 pb-3">
                  <p className="text-gray-300 text-base font-medium">
                    {event.title}
                  </p>
                </div>

                {/* Attendees and Time */}
                <div className="w-full px-2 py-3 text-white flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {event.attendees.map((attendee) => (
                        <div
                        key={attendee.id}
                        className="relative rounded-full border-2 border-gray-900 overflow-hidden w-8 h-8 group"
                      >
                        <img
                          src={attendee.imageUrl}
                          alt="Attendee"
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:translate-y-12"
                        />
                      </div>
                      
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 text-sm text-gray-400">
                        +{event.additionalAttendees}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.timeSlot}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EventDetailsPage;
