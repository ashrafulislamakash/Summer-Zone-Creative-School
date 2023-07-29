import React from "react";

const BTN = ({ children }) => {
  return (
    <div>
      <button className="py-3 px-6 bg-orange hover:bg-dark1  rounded-lg text-white font-semibold text-lg ">
        {children}
      </button>
    </div>
  );
};

export default BTN;
