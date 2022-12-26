import React from "react";
import BackIcon from "../../assets/icons/chevron-left2.png";
import Card from "../Card/Card";
import Coupons from "../Coupons";
import FoodandBeverage from "../FoodandBeverage/FoodandBeverage";
import Petro from "../Petro/Petro";
import RentalRebate from "../RentalRebate/RentalRebate";
import "./content.css";

const Content = () => {
  return (
    <div className="container-wrap">
      <div className="header">
        <button className="btn-back">
          <img src={BackIcon} />
        </button>
        <div>
          <div className="header3 text-white title">Silver Tier</div>
          <span className="paragraph1 text-grey05">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </span>
          <Coupons />
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          marginTop: 220,
        }}
      >
        <Petro />
        <RentalRebate />
        <FoodandBeverage />
      </div>
    </div>
  );
};

export default Content;
