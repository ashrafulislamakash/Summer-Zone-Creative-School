import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassesCard = ({ classitem }) => {
  const {
    _id,
    className,
    classImage,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
  } = classitem;

  const { user } = useContext(AuthContext);

  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (classitem) => {
    console.log(classitem);

    if (user && user.email) {
      const cartItem = {
        classId: _id,
        name,
        classImage,
        price,
        email: user.email,
      };
      fetch("https://summerzone-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Class has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border   border-dark3 hover:border-orange  p-4 rounded ">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
        <img
          src={classImage}
          alt={classImage}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 ">
        <div className="my-4">
          <h3 className="text-xl text-dark1">{className}</h3>

          <h3 className="text-lg mt-2 text-dark2">{instructorName}</h3>
        </div>

        <div className="flex justify-between">
          <p className="text-xl   text-orange">
            {" "}
            <span className=" text-dark2"> Seats : </span>
            {availableSeats}
          </p>
          <p className="text-xl   text-orange">
            {" "}
            <span className=" text-dark2"> price : </span>${price}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(classitem)}
        className=" mt-5 bg-dark1 text-white w-full px-4 py-2 rounded-md hover:bg-orange"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ClassesCard;
