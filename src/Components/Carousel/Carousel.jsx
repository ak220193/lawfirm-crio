import React, { useState, useEffect } from "react";
import styles from "./Carousell.module.css";
import Person1 from "../../Assets/Ellipse 14.png";
import Person2 from "../../Assets/Ellipse 14 (1).png";
import Person3 from "../../Assets/Ellipse 14 (2).png";
import Arrow from "../../Assets/arrow.png";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

const Carousel = () => {
  const cards = [
    {
      image: Person1,
      name: "John Cooper",
      role: "CEO of Hunt",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, minus.",
      Color: "#1d1d1d",
    },
    {
      image: Person2,
      name: "Devon Lane",
      role: "CEO of Hunt",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, minus.",
      backgroundColor: "#1d1d1d",
      Color: "black",
    },
    {
      image: Person3,
      name: "Rober Fox",
      role: "CEO of Hunt",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, minus.",
      Color: "#1d1d1d",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeCard, cards.length]);

  return (
    <>
      <div className={styles.header}>
        <h2>
          What Says <br /> Our Happy Clients
        </h2>
        <div className={styles.arrow}>
          <img src={Arrow} alt="arrow" width={112} />
        </div>
      </div>
      <div className={styles.reviewcard}>
        {cards.map((card, index) => (
          <CCard
            key={index}
            style={{
              width: "20rem",
              marginLeft: index !== 0 ? "30px" : "0",
              backgroundColor: card.backgroundColor,
              borderRadius: "10px",
              border: "1px transparent white",
              gap: "40px",
            }}
          >
            <CCardImage
              className={styles.image}
              orientation="top"
              src={card.image}
            />
            <CCardBody className={styles.body}>
              <CCardTitle className={styles.Headtext}>{card.name}</CCardTitle>
              <CCardText className={styles.text}>{card.role}</CCardText>
              <CCardText className={styles.text}>{card.text}</CCardText>
              <CButton className={styles.btn}>Read More</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </>
  );
};

export default Carousel;
