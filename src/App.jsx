import React from 'react';
import Navbar from './components/navbar';
import PhoneWidget from './components/project/pages/eventDetailspage';

const App = () => {
  return (
    <div className="w-full justify-center   bg-black  flex items-center flex-col ">
      <div>
      <PhoneWidget />
      <Navbar />
      </div>
    </div>
  );
};

export default App;
