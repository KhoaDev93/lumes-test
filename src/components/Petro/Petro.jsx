import React from "react";
import Card from "../Card/Card";
import PetroImg from "../../assets/images/petro.png";
import PetroIcon from "../../assets/icons/iconL.png";
import "./petro.css";

const Petro = () => {
  const data = [
    {
      icon: "",
      isActive: true,
      img: PetroImg,
      title: "15 Coins",
      desc: "50% discount for every $100 top-up on your Shell Petrol Card",
      subContent: "",
    },
    {
      icon: PetroIcon,
      isActive: false,
      img: PetroImg,
      title: "1000 Coins",
      desc: "70% discount top-up on your Shell Petrol Card",
      subContent: "Insufficient coins",
    },
  ];
  return (
    <div className="container">
      <div className="title1 text-grey01 py-24">Petro</div>
      <div className="card-list">
        {data?.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Petro;
