import React from "react";

const IntroComponent = ({ header }) => {
  const phoneNumber = `020 555 555`;
  const content = "To make and appointment";

  const ShopStatus = () => {
    const now = new Date();
    const h = now.getHours();
    const d = now.getDay() + 1;

    if (h > 8 && h < 17 && d >= 0 && d < 5) {
      return "Open";
    } else {
      return "Close";
    }
  };

  const open = ShopStatus() === "Open";

  return (
    <div className="intro-component">
      <h1>{header}</h1>
      <h3>
        We Are:
        <span className={open ? "active-green" : "active-red"}>
          {ShopStatus()}
        </span>
      </h3>
      <h3>{content}</h3>
      <h3>{phoneNumber}</h3>
    </div>
  );
};

export default IntroComponent;
