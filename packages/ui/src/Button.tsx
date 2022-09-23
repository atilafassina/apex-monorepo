import * as React from "react";
export const Button = () => {
  const [boopCount, setCount] = React.useState(0);
  return (
    <button
      style={{
        backgroundColor: "black",
        border: "solid 2px white",
        padding: "0.5rem 1rem",
        borderRadius: "30px",
        fontSize: "1.2rem",
        color: "whitesmoke",
      }}
      onClick={() => {
        setCount(boopCount + 1);
      }}
    >
      ✌️ {boopCount}
    </button>
  );
};
