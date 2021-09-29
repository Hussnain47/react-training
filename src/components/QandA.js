import React from "react";

function QandA(props) {
  return (
    <div>
      <h2 style={{ display: !props.question && "none" }}>
        {" "}
        Question : {props.question}
      </h2>
      <h2 style={{ display: !props.answer && "none" }}>
        {" "}
        Answer : {props.answer}
      </h2>
      <hr />
    </div>
  );
}

export default QandA;
