import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Herobanner from "../Components/Herobanner/Herobanner";
import BannerText from "../Components/BannerText/BannerText";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import Grid from "../Components/Grid/Grid";
import Carousel from "../Components/Carousel/Carousel";
import Testimonial from "../Components/Testimonials/Testimonial";
import FAQ from "../Components/FAQ/FAQ";
import Newsletter from "../Components/Newsletter/Newsletter";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <BannerText />
      <ChooseUs />
      <Grid />
      <Carousel />
      <Testimonial />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default Mainpage;
