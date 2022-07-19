import React from "react";

const GoBackButton = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        style={{
          padding: "6px 15px",
          backgroundColor: "#ff0000",
          color: "#fff",
          border: 0,
          borderRadius: "6px",
          fontSize: "18px",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default GoBackButton;
