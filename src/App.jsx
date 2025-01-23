import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./components/project/pages/home";
import Event from "./components/project/pages/Event";
import Session  from './components/project/pages/Session' 
import Overview from './components/project/pages/overview'
import Bookmark from './components/project/pages/bookMark'
import Profile from './components/project/pages/profile'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={< Event/>} />
          <Route path="/session" element={< Session/>} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/bookmark" element={<Bookmark/>}/>
          <Route path="/profile" element={<Profile/>}/>


        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
