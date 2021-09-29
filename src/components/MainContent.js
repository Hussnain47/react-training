import React from "react";

function MainContent(props) {
  const date = new Date();
  const hours = date.getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "Good Morning";
  } else if (hours > 12 && hours < 17) {
    timeofDay = "Good AfterNoon";
  } else if (hours > 17) {
    timeofDay = "Good Night";
  }
  return (
    <div>
      <h1>{timeofDay}</h1>
    </div>
  );
}

export default MainContent;
