"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Membership from "./components/Membership";
import MembershipCards from "./components/MembershipCards";
import FreeTrial from "./components/Freetrial";
import FitnessWebsite from "./components/FitnessWebsite";
import ScrollingText from "./components/ScrollingText";
import SignatureCoursesSection from "./components/SignatureCoursesSection";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FitnessWebsite />
      <ScrollingText /> 
      <SignatureCoursesSection />
      <Membership />
      <MembershipCards />
      <FreeTrial />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
