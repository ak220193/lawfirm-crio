import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Mainpage";
import Attorney from "../Pages/Mainpage";
import PracticeAreas from "../Components/Grid/Grid";
import AboutUs from "../Components/ChooseUs/ChooseUs";

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/attorney" component={Attorney} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route path="/about-us" component={AboutUs} />
    </Routes>
  );
};

export default Router;
