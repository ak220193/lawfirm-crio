import React, { useState } from "react";
import styles from "./FAQ.module.css";
import Add from "../../Assets/add.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAccordionItem = (index, title, content) => (
    <div key={index} className={styles.accordionItem}>
      <div
        className={`${styles.accordionTitle} ${
          activeIndex === index ? styles.active : ""
        }`}
        onClick={() => handleAccordionClick(index)}
      >
        <img src={Add} alt="Add icon" className={styles.addIcon} />
        {title}
      </div>
      {activeIndex === index && (
        <div className={styles.accordionContent}>{content}</div>
      )}
    </div>
  );

  return (
    <div className={styles.Faqcontainer}>
      <div className={styles.container1}>
        <h1> FAQ </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={styles.accordian}>
        <h1> Do I need a personal injury report?</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
      </div>
      <div className={styles.accordian1}>
        {renderAccordionItem(
          0,
          "How much is my case worth?",
          "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
        )}
        {renderAccordionItem(
          1,
          "What should I do right after car accidect",
          "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
        )}
        {renderAccordionItem(
          2,
          "How much is my case worth?",
          "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
        )}
      </div>
    </div>
  );
};

export default FAQ;
