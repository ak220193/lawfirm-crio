import React from "react";
import styles from "./Carousell.module.css";
import Person1 from "../../Assets/Ellipse 14.png";
import Person2 from "../../Assets/Ellipse 14 (1).png";
import Person3 from "../../Assets/Ellipse 14 (2).png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Carousel = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>
          What Says <br /> Our Happy Clients
        </h2>
      </div>
      <div className={styles.Carousel}>
        <Card sx={{ maxWidth: 345 }} className={styles.card}>
          <CardActionArea style={{ backgroundColor: "black" }}>
            <CardMedia
              component="img"
              image={Person2}
              alt="green iguana"
              className={styles.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, veniam.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ backgroundColor: "black" }}>
            <Button
              size="small"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={styles.card}>
          <CardActionArea style={{ backgroundColor: "black" }}>
            <CardMedia
              component="img"
              image={Person3}
              alt="green iguana"
              className={styles.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, veniam.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ backgroundColor: "black" }}>
            <Button
              size="small"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={styles.card}>
          <CardActionArea style={{ backgroundColor: "black" }}>
            <CardMedia
              component="img"
              image={Person1}
              alt="green iguana"
              className={styles.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, veniam.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ backgroundColor: "black" }}>
            <Button
              size="small"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Carousel;
