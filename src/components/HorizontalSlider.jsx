import React from "react";

const HorizontalSlider = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "1rem",
        padding: "1rem 0",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalSlider;