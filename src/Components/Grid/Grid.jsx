import React from "react";
import styles from "./Grid.module.css";
import Image1 from "../../Assets/Grid-image1.png";
import Image2 from "../../Assets/Grid-image2.png";
import Image3 from "../../Assets/Grid-image-3.png";
import Image4 from "../../Assets/Grid-image4.png";
import Image5 from "../../Assets/Grid-image-5.png";
import Image6 from "../../Assets/grid-image6.png";

const Grid = () => {
  return (
    <>
      <div className={styles.main}>
        <h3>Area of Practices</h3>
        <div className={styles.gridcontainer}>
          <div className={styles.griditem}>
            <img src={Image1} alt="" />
            <h5> BUSINESS LAW </h5>
          </div>
          <div className={styles.griditem}>
            <img src={Image2} alt="" />
            <h5> Partnership LAW</h5>
          </div>
        </div>
        <div className={styles.gridcontainer1}>
          <div className={styles.griditem}>
            <img src={Image3} alt="" />
            <h5> REAL ESTATE LAW</h5>
          </div>
          <div className={styles.griditem}>
            <img src={Image4} alt="" />
            <h5> BUSINESS LAW</h5>
          </div>
        </div>
        <div className={styles.gridcontainer}>
          <div className={styles.griditem}>
            <img src={Image5} alt="" />
            <h5>LANDLORD DISPUTES</h5>
          </div>
          <div className={styles.griditem}>
            <img src={Image6} alt="" />
            <h5>ELDER ABUSE</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
