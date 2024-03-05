import React from "react";
import MainBio from "../components/MainBio";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MySkills from "../components/MySkills";
import Project from "../components/Project";
import Education from "../components/Education";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Navbar/>
      <MainBio/>
      <Project/>
      <MySkills/>
      <Education/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
};

export default Home;
