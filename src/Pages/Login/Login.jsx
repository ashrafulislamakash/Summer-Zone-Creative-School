import React, { useContext, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import colorLogo from "../../assets/logo.svg";
import { useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto " src={colorLogo} alt="Summer Zone" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9  text-dark1">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-dark2"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gold hover:text-darkgold"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <LoadCanvasTemplate />
              </div>
              <div className="mt-2">
                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type Captcha"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-dark1 shadow-sm ring-1 ring-inset ring-gold placeholder:text-dark4 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={false}
                type="submit"
                className="flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-orange hover:bg-dark1 "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to={"/signup"}>
              <span
                className="font-semibold leading-6 text-gold
               text-orange hover:text-dark2"
              >
                Create an Account
              </span>
            </Link>
          </p>
        </div>

        <div className="gap-4  mx-auto  text-center mt-5">
          <p>or</p>
          <div className="border border-dark3"> </div>

          <SocialLogin></SocialLogin>
        </div>

        <div className="text-center mt-6">
          <p> admin: admin@admin.com</p>
          <p> pass: Summer&%123@</p>
        </div>
      </div>
    </>
  );
};

export default Login;
