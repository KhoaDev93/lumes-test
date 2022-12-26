import React from "react";
import Card from "../Card/Card";
import Img from "../../assets/images/food.png";
import "./foodandbeverage.css";

const FoodandBeverage = () => {
  const data = [
    {
      isActive: true,
      img: Img,
      title: "25 Coins",
      desc: "NTUC Fairprice $50 Voucher",
    },
    {
      isActive: true,
      img: Img,
      title: "5 Coins",
      desc: "Free Cold Stone Sundae at any flavour!",
    },
  ];
  return (
    <div className="container">
      <div className="title1 text-grey01 py-24">Food and Beverage</div>
      <div className="card-list">
        {data?.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodandBeverage;
