import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Herobanner from "../Components/Herobanner/Herobanner";
import BannerText from "../Components/BannerText/BannerText";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <BannerText />
    </div>
  );
};

export default Mainpage;
