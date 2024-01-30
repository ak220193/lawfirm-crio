import React, { useState } from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className={styles.NewsLetter}>
        <div className={styles.subscribe}>
          <h1> Subscribe Our Newsletter </h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" Name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <button className={styles.bttn} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
