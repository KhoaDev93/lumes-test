import React from "react";
import Card from "../Card/Card";
import Img from "../../assets/images/rental.png";
import "./rentalrebate.css";

const RentalRebate = () => {
  const data = [
    {
      isActive: true,
      img: Img,
      title: "20 Coins",
      desc: "Get $20 Rental rebate",
    },
    {
      isActive: true,
      img: Img,
      title: "15 Coins",
      desc: "7Get $20 Rental rebate",
    },
  ];
  return (
    <div className="container">
      <div className="title1 text-grey01 py-24">Rental Rebate</div>
      <div className="card-list">
        {data?.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RentalRebate;
