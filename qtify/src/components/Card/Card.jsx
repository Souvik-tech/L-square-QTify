import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import cardImage from "../../assets/cardImg.png";
import Chip from "@mui/material/Chip";
import style from "../Card/Card.css";
import { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ActionCard({ val }) {
  return (
    <Card sx={{ maxWidth: 159 }} className="card" key={val.id}>
      <CardActionArea>
        <div className="top-card">
          <CardMedia
            className="card-image"
            component="img"
            height="140"
            image={val.image}
            alt={val.title}
          />
          <Chip label={`${val.follows} follows`} className="card-chip" />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-heading"
          >
            {val.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default function ActionAreaCard({ dataUrl, isCollapsed }) {
  const [cardData, setCardData] = useState([]);

  // Function to fetch data of TOP ALBUM
  const fetchCardData = async () => {
    try {
      const res = await axios.get(dataUrl);
      setCardData(res.data); // Access the `.data` field to get the actual response body
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  };

  // Fetch data only once when the component mounts
  useEffect(() => {
    fetchCardData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  console.log(cardData);
  if (!isCollapsed || !cardData.length) {
    return (
      <div className="cardWrapFlex">
        {cardData.map((val) => (
          <ActionCard key={val.id} val={val} />
        ))}
      </div>
    );
  }

  return (
    <Slider {...settings}>
      {cardData.map((val) => (
        <ActionCard key={val.id} val={val} />
      ))}
    </Slider>
  );
}
