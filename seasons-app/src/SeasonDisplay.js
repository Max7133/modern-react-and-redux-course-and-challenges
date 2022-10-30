import React from "react";
import "./SeasonDisplay.css";

//Object with 2 key value pairs
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, its cold",
    iconName: "snowflake",
  },
};

// Determines what the current season is
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // if lat > 0 - means in the Nothern Hemisphere then return Summer, otherwise Winter in Southern Hemisphere
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer"; // in the Nothern Hemisphere then return Winter, otherwise Summer in Southern Hemisphere
  }
};

const SeasonDisplay = (props) => {
  //console.log(props.lat); // 60.2217741
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // returns seasonConfig Object with { text, iconName }

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
