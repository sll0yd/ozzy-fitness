"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Membership from "../components/Membership";

const Memberships = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">

      <Membership />
      <Footer />
      </main>

    </div>
  );
};

export default Memberships;
