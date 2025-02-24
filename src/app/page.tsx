"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Membership from "./components/Membership";
import MembershipCards from "./components/MembershipCards";
import FreeTrial from "./components/Freetrial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Membership />
      <MembershipCards />
      <FreeTrial />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
