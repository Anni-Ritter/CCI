import React from "react";
import "../style/left-square.css";

interface Props {
  className: any;
}

export const LeftSquare = ({ className }: Props): JSX.Element => {
  return <img className={`left-square ${className}`} alt="Left square" />;
};