import React from "react";
import "./tprofile.css";

const Card = (props) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src={props.img} style={{ width: "100%" }} />
        <h1>{props.name}</h1>
        <p className="title">CEO &amp; Founder, Example</p>
        <p>Harvard University</p>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
};
export default Card;
