"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyOzzy from "../components/WhyOzzy";

const Memberships = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-18 md:pt-24">
        {" "}
        {/* Ajout du padding-top pour l'espacement */}
      </div>
      <WhyOzzy />
      <Footer />
    </div>
  );
};

export default Memberships;
