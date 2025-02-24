import Image from "next/image";
import React from "react";
import ozzybgimage from "../../assets/NEEDA-CLEANA-WEBSITE-1-10.png";

const Header = () => {
  return (
    <div>
      <Image src={ozzybgimage} alt="" />
    </div>
  );
};

export default Header;
