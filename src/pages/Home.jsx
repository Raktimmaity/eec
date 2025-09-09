import React from "react";
import Hero from "../components/Hero";
import WhyEEC from "../components/WhyEEC";
import Highlights from "../components/Highlights";
import Features from "./Features";
import UserCentric from "../components/UserCentric";
import TopBar from "../components/TopBar";
import Contact from "../components/Contact";
import HeroEEC from "../components/HeroEEC";
// Footer stays in App

const Home = () => {
  return (
    <>
    {/* <TopBar /> */}
      <Hero />
      <WhyEEC />
      {/* <Highlights /> */}
      {/* <Features+ /> */}
      <UserCentric />
      <HeroEEC />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
