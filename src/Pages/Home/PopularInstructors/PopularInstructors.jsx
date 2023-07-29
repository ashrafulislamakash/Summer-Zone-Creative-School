import React, { useEffect, useState } from "react";
import TextContainer from "../../../components/TextContainer";
import InstructorCard from "../../../components/instructorsCard/instructorsCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summerzone-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="container mx-auto  py-12 lg:py-24">
      <TextContainer
        title={"Meet Our Popular Instructors"}
        dis={
          "Summer Zone Creative School, the ultimate destination for unleashing your child's creativity and nurturing their artistic  talents!"
        }
      ></TextContainer>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mt-6 lg:mt-12 ">
        {instructors.map((instructorItem) => (
          <InstructorCard
            key={instructorItem._id}
            instructorItem={instructorItem}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
