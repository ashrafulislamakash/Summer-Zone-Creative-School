import TextContainer from "../../../components/TextContainer";
import React, { useRef, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "../Home.css";
import "@smastrom/react-rating/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://summerzone-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div>
      <div className="container mx-auto text-center py-12 md:py-24">
        <TextContainer title={"What Our Students Say"}></TextContainer>

        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="m-12 mx-24 md:24 flex flex-col items-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />{" "}
                  <p className="my-4">{review.details}</p>
                  <p className="text-4xl text-gold">{review.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
