import React, { useState } from "react";
import BackgroundImage from "../../../assets/flighthome.jpg";
import Details from "../../../Components/Details/Details";
const TravelMain = () => {
  const [detail, setDetail] = useState([
    {
      title: "AIrline Revies",
      description: "Fly to shine and explore",
      container: [
        {
          image:
            "https://media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/da/indigo.jpg",
          title: "Indigo",
          description: "4,00,986 reviews",
          value: "4.5",
        },
        {
          image:
            "https://media-cdn.tripadvisor.com/media/photo-o/16/88/be/2c/spicejet.jpg",
          title: "Spice jet ",
          description: "2,00,760 reviews",
          value: "3.5",
        },
        {
          image:
            "https://media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/df/jet-airways.jpg",
          title: "Jet Airways",
          description: "321456 reviews",
          value: "5",
        },
        {
          image:
            "https://media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/5c/air-india-express.jpg",
          title: "Air India express ",
          description: "4,12,359 reviews",
          value: "4.0",
        },
      ],
    },
  ]);
  return (
    <div className="TravelMain">
      <img
        src={BackgroundImage}
        alt="sam"
        style={{ position: "absolute", zIndex: "-2" }}
      />
      <h1 style={{ color: "white", padding: "15%", fontSize: "3rem" }}>
        Explore with ZEE airlines
      </h1>
      <div>
        {
          detail.map((element, i) => (
            <Details key={i} detailtitle={element.title} detaildescription={element.description} detailcontainer={element.container} />
          ))
        }
      </div>
    </div>
  );
};

export default TravelMain;
