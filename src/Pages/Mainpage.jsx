import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Herobanner from "../Components/Herobanner/Herobanner";
import BannerText from "../Components/BannerText/BannerText";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import Grid from "../Components/Grid/Grid";
import Carousel from "../Components/Carousel/Carousel";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <BannerText />
      <ChooseUs />
      <Grid />
      <Carousel />
    </div>
  );
};

export default Mainpage;
