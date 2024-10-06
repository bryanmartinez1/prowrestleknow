import React from "react";
import "./imgButton.css";

type ImgButtonProps = {
  imageSrc: string;
  altText: string;
  width?: number;
  height?: number;
};

function ImgButton({
  imageSrc,
  altText,
  width = 100,
  height = 100,
}: ImgButtonProps) {
  return (
    <button className="imgButton-button">
      <img src={imageSrc} alt={altText} width={width} height={height} />
    </button>
  );
}

export default ImgButton;
