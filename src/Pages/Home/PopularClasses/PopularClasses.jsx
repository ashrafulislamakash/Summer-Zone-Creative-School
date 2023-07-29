import React, { useEffect, useState } from "react";
import TextContainer from "../../../components/TextContainer";
import ClassesCard from "../../../components/ClassesCard/ClassesCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://summerzone-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className=" bg-dark4 py-24">
      <div className="container mx-auto">
        <TextContainer
          title={"Popular Classes"}
          dis={
            "Summer Zone Creative School, the ultimate destination for unleashing your child's creativity and nurturing their artistic talents!"
          }
        ></TextContainer>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-4 lg:mt-12 ">
          {classes.map((classitem) => (
            <ClassesCard key={classitem._id} classitem={classitem}>
              {" "}
            </ClassesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
