import React from "react";
import styles from "./Card.module.css";
import cardimage from "../../Assets/card1.png";

const Card = ({ title, image, description, link }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={cardimage} alt={image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title} 98% Success Rate</h2>
          <p className={styles.description}>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim, sequi?
          </p>
          <button className={styles.link}> {link} Read More</button>
        </div>
      </div>

      <div className={styles.card} style={{ backgroundColor: "#2E2E2E" }}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={cardimage} alt={image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title} 100% Success Rate</h2>
          <p className={styles.description}>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim, sequi?
          </p>
          <button className={styles.link}> {link} Read More</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={cardimage} alt={image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title} 100% Success Rate</h2>
          <p className={styles.description}>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim, sequi?
          </p>
          <button className={styles.link}> {link} Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
