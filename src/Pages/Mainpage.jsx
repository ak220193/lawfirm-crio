import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Herobanner from "../Components/Herobanner/Herobanner";
import BannerText from "../Components/BannerText/BannerText";
import ChooseUs from "../Components/ChooseUs/ChooseUs";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <BannerText />
      <ChooseUs />
    </div>
  );
};

export default Mainpage;
