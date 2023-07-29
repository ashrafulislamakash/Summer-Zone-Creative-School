import React from "react";

import Hero from "../../../assets/hero.png";
import BTN from "../../../components/BTN";

const Banner = () => {
  return (
    <div>
      <div className="container py-12   items-center grid md:grid-cols-2  mx-auto">
        <div>
          <h1 className=" text-3xl  md:text-6xl font-bold text-dark2">
            Creative Design
          </h1>
          <h1 className="text-4xl  text-orange md:text-6xl font-bold underline py-4">
            Courses !
          </h1>
          <h1 className="text-4xl  md:text-6xl font-bold text-dark1">
            from the Experts
          </h1>
          <p className="py-10">
            Welcome to Summer Zone Creative School, the ultimate destination for
            unleashing your child's creativity and nurturing their artistic
            talents!
          </p>

          <BTN>Ready Start</BTN>
        </div>
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
