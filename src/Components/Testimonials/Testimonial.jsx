import React from "react";
import styles from "./Testimonial.module.css";
import People1 from "../../Assets/people1.png";
import People2 from "../../Assets/people2.png";
import People3 from "../../Assets/people3.png";
import People4 from "../../Assets/people4.png";
import People5 from "../../Assets/people5.png";
import People6 from "../../Assets/people6.png";

const Testimonial = () => {
  const members = [
    { name: "Danial Def", cases: "301 cases", image: People1 },
    {
      name: "Sanfole",
      cases: "180 cases",
      image: People2,
      backgroundColor: "yellow",
      textColor: "black",
    },
    { name: "Cesforila", cases: "850  cases", image: People3 },
    { name: "Colleen", cases: "212 cases", image: People4 },
    { name: "Haldone", cases: "470 cases", image: People5 },
    { name: "Nik Jeo", cases: "350 cases", image: People6 },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.Heading}>
          <h1> Our Team </h1>
        </div>
        <div className={styles.gridpeople}>
          {members.map((member, index) => (
            <div
              key={index}
              className={styles.flex}
              style={{
                backgroundColor: member.backgroundColor,
                color: index === 1 ? "black" : "inherit",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className={styles.teamMemberImage}
              />
              <div className={styles.name} style={{ marginTop: "-90px" }}>
                {member.name}
              </div>
              <div className={styles.cases}>{member.cases}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
