import React from "react";
import "./card.css";

const Card = ({ img, title, desc, isActive, icon, subContent }) => {
  return (
    <div className="card">
      <img className="card-img" alt={img} src={img} />
      <div className="card-content">
        <div
          className={`card-content-title  title2 px-8  mt-16 ${
            isActive ? "text-blue" : "text-grey03"
          }`}
        >
          {icon && <img src={icon} alt={icon} />}
          {title}
        </div>
        <div className="card-content-desc paragraph1 text-grey04 px-8">
          {desc}
          <div className="text-blue paragraph3">{subContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
