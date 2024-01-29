import React from "react";
import styles from "./Chooseus.module.css";
import Card from "../Card/Card";

function ChooseUs() {
  const cardData = [
    {
      index: 1,
      image: "card1.png",
      tittle: "98% Success Rate",
    },
    {
      index: 2,
      image: "card2.png",
      tittle: "100% Success Rate",
      description: "",
    },
    {
      index: 3,
      image: "card3.png",
      tittle: "100% Sucess Rate",
      description: "",
    },
  ];
  return (
    <>
      <div className={styles.sectioncard}>
        <h1> Why Choose Us ? </h1>
      </div>
      <Card />
    </>
  );
}

export default ChooseUs;
