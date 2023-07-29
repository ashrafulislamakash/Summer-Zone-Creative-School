import React from "react";

const TextContainer = ({ title, dis }) => {
  return (
    <div>
      <h2 className=" text-4xl font-bold lg:text-6xl text-dark1 mb-4">
        {" "}
        {title}
      </h2>
      <p className=" text-dark2 "> {dis}</p>
    </div>
  );
};

export default TextContainer;
