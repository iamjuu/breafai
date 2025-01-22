// import React, { useState, useEffect } from 'react';
// import { DeviceFrameset } from 'react-device-frameset';
// import 'react-device-frameset/styles/marvel-devices.min.css';

// const index = () => {
//   const [device, setDevice] = useState('iPhone X');
//   const [scale, setScale] = useState(1);

//   const devices = {
//     'iPhone X': {
//       color: "silver",
//       width: 375,
//       height: 812
//     },
//     'iPhone 8': {
//       color: "gold",
//       width: 375,
//       height: 667
//     },
//     'iPhone 8 Plus': {
//       color: "silver",
//       width: 414,
//       height: 736
//     }
//   };

//   // Calculate scale based on target height of 500px
//   useEffect(() => {
//     const targetHeight = 500;
//     const deviceHeight = devices[device].height;
//     const newScale = targetHeight / deviceHeight;
//     setScale(newScale);
//   }, [device]);

//   return (
//     <div className="bg-gray-400 p-10">
//       {/* Device selector */}
//       <div className="mb-4">
//         <select
//           value={device}
//           onChange={(e) => setDevice(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="iPhone X">iPhone X</option>
//           <option value="iPhone 8">iPhone 8</option>
//           <option value="iPhone 8 Plus">iPhone 8 Plus</option>
//         </select>
//       </div>

//       {/* Device frame container */}
//       <div className="flex justify-center" style={{ height: '500px' }}>
//         <div style={{
//           transform: `scale(${scale})`,
//           transformOrigin: 'top center',
//           transition: 'transform 0.3s ease'
//         }}>
//           <DeviceFrameset
//             device={device}
//             color={devices[device].color}
//             landscape={false}
//           >
//             <div className="w-full h-full bg-white p-4">
//               <div className="flex flex-col h-full">
//                 <header className="border-b pb-4">
//                   <h1 className="text-xl font-bold">Your App Name</h1>
//                 </header>

//                 <main className="flex-1 py-4">
//                   <div className="space-y-4">
//                     <div className="bg-gray-100 p-4 rounded">
//                       <h2 className="text-lg font-semibold">Welcome!</h2>
//                       <p className="text-gray-600">This is a device preview.</p>
//                     </div>
//                   </div>
//                 </main>

//                 <footer className="border-t pt-4">
//                   <p className="text-sm text-gray-500 text-center">Footer Content</p>
//                 </footer>
//               </div>
//             </div>
//           </DeviceFrameset>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;
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
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto">
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
            <h3 className="text-base font-bold text-gray-100">
              Ahmed Zidane ! 🤟🏻
            </h3>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full h-[300px] p-2 bg-gradient-to-r ">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full  rounded-md object-cover"
          />
        </div>

        {/* Event Section */}
        <div className="p-4">
          <p className="text-gray-200 py-5 text-base font-medium">
            Latest Updated
          </p>

          {/* Events List */}
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
                  <Button btnName="Transcripted"   className="border rounded-md" />
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
                          className="relative rounded-full border-2 border-gray-900 overflow-hidden w-8 h-8"
                        >
                          <img
                            src={attendee.imageUrl}
                            alt="Attendee"
                            className="w-full h-full object-cover"
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
