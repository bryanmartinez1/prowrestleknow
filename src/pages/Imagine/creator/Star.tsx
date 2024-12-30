import React from "react";

type StarProps = {
  fillColor?: string;
  strokeColor?: string;
  strokeSize?: number;
  size?: number;
};

export default function Star({
  fillColor = "gold",
  strokeColor = "black",
  strokeSize = 2,
  size = 100,
}: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,5 61,38 95,38 67,57 78,90 50,70 22,90 33,57 5,38 39,38"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeSize}
      />
    </svg>
  );
}
