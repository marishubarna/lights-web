import React from "react";
import Lottie from "lottie-react"; // Імпорт за замовчуванням
import christmasLights from "../../public/Christmas Lights.json"; // Вкажіть правильний шлях до вашого файлу

const ChristmasLights = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className=""
    >
      <Lottie animationData={christmasLights} loop={true} autoplay={true} />
    </div>
  );
};

export default ChristmasLights;
