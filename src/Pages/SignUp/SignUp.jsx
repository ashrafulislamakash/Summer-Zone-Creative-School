import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import colorLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(
        data.name,
        data.photoUrl,
        data.gender,
        data.phoneNumber,
        data.address
      )
        .then(() => {
          console.log("User Profile Updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile create Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto  w-auto" src={colorLogo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Name
              </label>

              <input
                type="text"
                {...register("name")}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Email
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
              {errors.email && <p>Email is required.</p>}
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Password
              </label>

              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[\w!@#$%^&*()]{6,}$/,
                })}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
              {errors.password?.type === "required" && (
                <p>Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>Password should be at least 6 characters long.</p>
              )}
              {errors.password?.type === "pattern" && (
                <p>
                  Password should contain at least one capital letter and one
                  special character.
                </p>
              )}
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
              {errors.confirmPassword && <p>Confirm Password is required.</p>}
            </div>

            <div>
              <label>Photo URL</label>
              <input
                type="text"
                {...register("photoUrl")}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>

            {/* Optional Fields */}
            <div>
              <label>Gender</label>
              <input
                type="text"
                {...register("gender")}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="text"
                {...register("phoneNumber")}
                className=" mt- block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label>Address</label>
              <input
                type="text"
                {...register("address")}
                className=" mt-2 block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              className="flex mt-4 w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-orange hover:bg-dark1 "
            >
              Register
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have a Account?{" "}
            <Link to="/login">
              {" "}
              <span className="font-semibold leading-6 text-orange hover:text-dark2">
                Login
              </span>
            </Link>
          </p>
        </div>

        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default SignUp;
