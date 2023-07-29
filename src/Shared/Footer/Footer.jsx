import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import logowhite from "../../assets/logowhite.svg";

const Footer = () => {
  return (
    <>
      <div className=" bg-dark1 ">
        <div className=" container p-4 grid  gap-6 md:gap-32 sm:grid-cols-2 md:grid-cols-4 mx-auto  py-12 sm:py-24 ">
          <div className="  text-white ">
            <img className="pb-8" src={logowhite} alt="logowhite" />

            <p>
              Welcome to Summer Zone Creative School, the ultimate destination
              for unleashing your child's creativity and nurturing their
              artistic talents!
            </p>
          </div>

          <div className=" bg-darkgold   text-white">
            <h4 className="font-bold text-xl mb-4">Company Info</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Teachers Us</p>
            <p>Contact Us Us</p>
          </div>

          <div className=" bg-gold  text-white ">
            <h4 className="font-bold text-xl mb-4"> Contact US</h4>

            <p>Uttara, Dhaka, Bangladesh</p>
            <p>+88 123456789</p>
            <p>summerzone@gmail.com</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          <div className="   text-white">
            <h4 className="font-bold text-xl">Follow US</h4>

            <p className="py-4 ">Join us on social media</p>
            <div className="flex  gap-4 mx-auto">
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange">
        <div className=" mx-auto text-center py-4 text-white">
          <p> Copyright © Summer Zone Creative School. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
