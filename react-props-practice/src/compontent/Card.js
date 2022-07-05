import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="container">
      <div className="cardContent">
        <div className="profilePic">
          <img src={props.pic} alt="" />
        </div>
        <div className="infoSection">
          <div className="title">{props.name}</div>
          <div className="email">{props.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
