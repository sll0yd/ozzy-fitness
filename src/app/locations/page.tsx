"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Locations from "../components/Locations";

const Memberships = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-18 md:pt-24">
        {" "}
        {/* Ajout du padding-top pour l'espacement */}
        <Locations />
      </div>

      <Footer />
    </div>
  );
};

export default Memberships;
