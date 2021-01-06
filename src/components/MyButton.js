import React from "react";

const MyButton = ({ color, title, onClick }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: `${color}`,
        display: "block",
        marginBottom: "1rem",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MyButton;
