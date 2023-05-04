import React from "react";
import "./Square.css";

const Square = ({ value, id, clickHandler }) => {
  const transportId = () => {
    clickHandler(id);
  };
  return (
    <div className="square" onClick={transportId}>
      <p style={{ color: value === "X" ? "#19A7CE" : "#FFD95A" }}>{value}</p>
    </div>
  );
};

export default Square;
