"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import FreeTrial from "./components/Freetrial";
import ScrollingText from "./components/ScrollingText";
import PersonalTraining from "./components/PersonalTraining";
import ClassicClasses from "./components/ClassicClasses";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PersonalTraining />
      <ScrollingText />
      <ClassicClasses />
      <FreeTrial />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
