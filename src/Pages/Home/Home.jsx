import React from "react";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import Stats from "./Stats/Stats";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Newsletter from "./Newsletter/Newsletter";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="px-4 md:px-0">
      <Banner></Banner>
      <Stats></Stats>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>

      <Newsletter></Newsletter>

      <Review></Review>
    </div>
  );
};

export default Home;
