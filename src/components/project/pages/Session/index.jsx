import React, { useState } from 'react';
import { Calendar, Clock,ChevronLeft, ChevronRight } from 'lucide-react';
import { Profile, Banner } from "../../../../assets";
import Button from "../../../button";

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 2)); // October 2, 2024

  const days = [
    { date: new Date(2024, 9, 1), dayNum: '01', dayName: 'Sat' },
    { date: new Date(2024, 9, 2), dayNum: '02', dayName: 'Sun' },
    { date: new Date(2024, 9, 3), dayNum: '03', dayName: 'Mon' },
    { date: new Date(2024, 9, 4), dayNum: '04', dayName: 'Tue' },
    { date: new Date(2024, 8, 31), dayNum: '31', dayName: 'Fri' },
  ];

  const handlePrevDay = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 1);
      return newDate;
    });
  };

  const handleDayClick = (date) => {
    setCurrentDate(date);
  };

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
  
      },   {
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
    <div className='bg-gray-900' >

        {/* clock  */}
    <div className="bg-gray-900 p-4 rounded-lg text-gray-200">
      <div className="text-center mt-2">
        <span className="text-gray-500">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button 
          onClick={handlePrevDay}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4">
          {days.map((day) => (
            <div 
              key={day.dayNum}
              onClick={() => handleDayClick(day.date)}
              className={`flex flex-col items-center p-2 cursor-pointer ${
                day.date.toDateString() === currentDate.toDateString()
                  ? ' border-2 border-blue-600 rounded-lg'
                  : ''
              }`}
            >
              <span className={`text-sm ${
                day.date.toDateString() === currentDate.toDateString()
                  ? 'text-white'
                  : 'text-gray-500'
              }`}>
                {day.dayName}
              </span>
              <span className="text-lg">
                {day.dayNum}
              </span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleNextDay}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>

{/* bookings */}
    <div>
    <div className="flex flex-col gap-3">
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
  );
};

export default DatePicker;
