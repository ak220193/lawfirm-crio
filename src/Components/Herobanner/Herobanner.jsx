import React, { useState } from "react";
import styles from "./Herobanner.module.css";
import BannerImg from "../../Assets/banner.png";

const Herobanner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <div className={styles.heroText}>
        <h1>
          You don’t have to <br />
          Fight them Alone.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder=" Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className={styles.SubmitButton} type="submit">
                Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.bannerImage}>
        <img src={BannerImg} alt="banner" />
      </div>
    </>
  );
};

export default Herobanner;
