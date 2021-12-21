import React from "react";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    ></div>
  );
};

export default NextArrow;