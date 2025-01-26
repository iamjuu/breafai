import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Bookmark, Profile, Time } from "../../../../assets";
import Button from "../../../button";
import { Link } from 'react-router-dom';

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 2));

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
      buttonName: 'Transcripted',
      link:'/event'
    },
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
      buttonName: 'Transcripted',
      link:'/event'

    },
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
    }, {
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
      buttonName: 'Transcripted',
      link:'/event'

    }, {
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
      buttonName: 'Transcripted',
      link:'/event'

    },
  ];

  return (
    <div className='bg-gray-900 min-h-screen w-full px-4 md:px-6 lg:px-8'>
      <div className="max-w-2xl mx-auto">
        {/* Calendar */}
        <div className="bg-gray-900 p-4 rounded-lg  text-gray-200">
          <div className="text-center mt-2">
            <span className="text-[#E2E4E9] text-sm md:text-base">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
          </div>
          
          <div className="flex items-center justify-between gap-2 md:gap-4 mt-4">
            <button 
              onClick={handlePrevDay}
              className="p-2 rounded-md bg-[#282C3A] hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
              {days.map((day) => (
                <div 
                  key={day.dayNum}
                  onClick={() => handleDayClick(day.date)}
                  className={`flex flex-col items-center p-2 cursor-pointer min-w-[60px] ${
                    day.date.toDateString() === currentDate.toDateString()
                      ? 'border-2 border-blue-600 rounded-lg'
                      : ''
                  }`}
                >
                  <span className={`text-xs md:text-sm ${
                    day.date.toDateString() === currentDate.toDateString()
                      ? 'text-white'
                      : 'text-gray-500'
                  }`}>
                    {day.dayName}
                  </span>
                  <span className="text-base md:text-lg">
                    {day.dayNum}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleNextDay}
              className="p-2 rounded-md bg-[#282C3A]  hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Events */}
        <div className="mt-6">
  <div className="flex flex-col gap-4 w-full">
    {events.map((event) => (
      <Link to="/event" key={event.id}>
        <div className="flex bg-[#282C3A] rounded-[16px] p-4 flex-col gap-3">
          {/* Event Header */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-2   justify-center items-center md:gap-3 flex-wrap">
              <Calendar className='w-[16px]' style={{color:'CDD0D5'}}  />
              <span className="  text-gray-300 text-xs md:text-sm">{event.date}</span>
              <div className='w-[1px] h-[15px] bg-[#CDD0D5]'/>
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
            <p
              style={{ fontSize: "16px" }}
              className="text-gray-300 text-sm md:text-base font-medium"
            >
              {event.title}
            </p>
          </div>

          {/* Event Details */}
          <div className="w-full text-white flex items-center justify-between flex-wrap gap-3">
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
                <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F6F8FA] border-2 text-xs md:text-sm text-gray-700">
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
      </Link>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default DatePicker;