import React from "react";

const InstructorCard = ({ instructorItem }) => {
  const { _id, image, name, email, number_of_classes, classes_taken } =
    instructorItem;

  return (
    <div>
      <div className="overflow-hidden rounded-md bg-gray-200 lg:aspect-none  group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 ">
        <h3 className="text-2xl text-dark1">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{email}</p>

        <div>
          <p className="text-lg font-medium text-dark2">
            Classes taken: {number_of_classes}
          </p>
          <p className="text-sm font-medium text-gray-900">{classes_taken}</p>
        </div>
      </div>

      <button className=" mt-5 bg-dark1 text-white px-2 py-1 rounded-md hover:bg-orange">
        See Classes
      </button>
    </div>
  );
};

export default InstructorCard;
