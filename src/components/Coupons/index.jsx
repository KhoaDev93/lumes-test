import React from "react";
import processImg from "../../assets/images/processImg.png";
import iconChevronLeftBlue from "../../assets/icons/chevron-left2-blue.png";
import "./coupons.css";

const Coupons = () => {
  return (
    <div className="coupons p-24">
      <div className="title3 text-grey05 mb-8">Available Coin balance</div>
      <div className="header1 text-grey01">340</div>

      <img className="process-bar" src={processImg} alt={processImg} />
      <div className="paragraph1 text-grey04 mb-16">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </div>
      <div className="paragraph1 text-blue mb-24">
        View tier benefits
        <img
          style={{ verticalAlign: "top" }}
          src={iconChevronLeftBlue}
          alt={iconChevronLeftBlue}
        />
      </div>

      <button className="btn-coupons title1 mb-16 text-center p-16 text-white">
        My Coupons
      </button>

      <p className="paragraph3 text-center text-grey05">Updated : 02/11/2021</p>
    </div>
  );
};

export default Coupons;
