import React from "react";
import TextContainer from "../../../components/TextContainer";

import newsletter from "../../../assets/newsletter.svg";
import BTN from "../../../components/BTN";
const Newsletter = () => {
  return (
    <div className="bg-lightorange">
      <div className="container mx-auto grid md:grid-cols-2 items-center p-4 py-12 md:py-24 gap-18 ">
        <div>
          <TextContainer
            title={"Register Now Forget 20% Discount Every Courses"}
            dis={
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
            }
          ></TextContainer>

          <div className="mt-8 ">
            <BTN> Register Now</BTN>
          </div>
        </div>

        <img className="text-right" src={newsletter} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
