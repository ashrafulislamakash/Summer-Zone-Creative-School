import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import BTN from "../../components/BTN";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="grid  place-items-center bg-white px-6   lg:px-8">
        <div className="text-center">
          <Player
            autoplay={true}
            loop={true}
            controls={true}
            src="https://assets2.lottiefiles.com/packages/lf20_02epxjye.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
          <h1 className="mt-4 text-3xl font-bold text-dark1  sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-dark1">
            Sorry, we could not find the page you are looking for.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <BTN> Go back home</BTN>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
