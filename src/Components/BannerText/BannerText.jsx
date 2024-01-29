import React from "react";
import styles from "./BannerText.module.css";

const BannerText = () => {
  return (
    <div className={styles.BannerText}>
      <h1>
        Let’s Introduce <br />
        Ourself
      </h1>
      <div className={styles.line}></div>
      <div className={styles.text2}>
        <h1> Criminal Lawyer </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          enim, neque nisi, itaque accusamus temporibus
        </p>
      </div>
    </div>
  );
};

export default BannerText;
