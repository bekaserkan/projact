import React, { useState } from "react";

const Star = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFilled ? "yellow" : "gray"}
      width="24px"
      height="24px"
      style={{ cursor: "pointer", marginLeft: "13px" }}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2l3.09 6.31L22 9.21l-4.42 4.3.99 6.09L12 17.77l-5.57 2.83.99-6.09L2 9.21l6.91-0.9L12 2zm0 2.76L8.74 9.49l-5.18.67 3.76 3.67-.88 5.39L12 16.34l4.56 2.35-.88-5.39 3.76-3.67-5.18-.67L12 4.76zM12 14l-3.09 1.58.59-3.63-2.5-2.44 3.46-.5L12 6l1.54 3.01 3.46.5-2.5 2.44.59 3.63L12 14z" />
    </svg>
  );
};

export default Star;
