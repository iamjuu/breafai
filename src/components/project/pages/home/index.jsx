import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Profile, Banner,  Time, Bookmark } from "../../../../assets";
import Button from "../../../button";

const EventDetailsPage = () => {
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
      buttonName: 'Transcripted'
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
      buttonName: 'Loading'
    },
    {
      id: 3,
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
      buttonName: 'Loading'
    },{
      id: 4,
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
      buttonName: 'Loading'
    },
    // ... other events
  ];

  return (
    <div className="bg-gray-900 w-full min-h-screen px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto flex flex-col ">
        {/* Header */}
        <div  className="p-4 flex items-center   gap-[6px] w-full">
          <div className="w-[48px] h-[48px]   md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <p  style={{fontSize:'12px'}} className=" md:text-base text-gray-300">Welcome Back</p>
            <h3 style={{fontSize:'16px',fontWeight:'600'}}  className=" font-bold text-gray-100">
              Ahmed Zidane ! 🤟🏻
            </h3>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full ">
          <img
            src={Banner}
            alt="Banner"
            className="w-[366px] rounded-[15px] object-cover"
          />
        </div>

        {/* Event Section */}
        <div className="w-full flex flex-col ] ">
          <p   style={{fontSize:'16px',fontWeight:'500'}}  className= "py-3   text-[#FFFFFF] ">
            Latest Updated
          </p>

          {/* Events List */}
          <div className="flex flex-col gap-4 w-full">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex bg-[#282C3A] rounded-[16px] p-4 flex-col gap-3"
              >
                {/* Event Header */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="flex gap-2 md:gap-3 flex-wrap">
                    <Calendar color="white" size={20} />
                    <span className="text-gray-300 text-xs md:text-sm">{event.date}</span>
                    <span className="text-gray-300 text-xs md:text-sm">{event.stage}</span>
                  </div>
                  <Button 
                    btnName={event.buttonName} 
                    img={Time} 
                    className="border text-black bg-slate-50 items-center p-1 flex rounded-md text-xs md:text-sm" 
                  />
                </div>

                {/* Event Title */}
                <div className="border-b border-dotted border-gray-500 pb-3">
                  <p   style={{fontSize:'16px'}} className="text-gray-300 text-sm md:text-base font-medium">
                    {event.title}
                  </p>
                </div>

                {/* Attendees and Time */}
                <div className="w-full  text-white flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center">
                    <div className="flex bg-[#F6F8FA] rounded-full p-[1px] -space-x-2">
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
                      <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F6F8FA] border-2  text-xs md:text-sm text-gray-700">
                        +{event.additionalAttendees}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs md:text-sm">{event.timeSlot}</span>
                    <img src={Bookmark} alt="bookmark" className="w-[24px] h-[24px]" />
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