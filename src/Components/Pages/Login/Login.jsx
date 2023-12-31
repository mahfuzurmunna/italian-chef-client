import React, { useContext, useRef, useState } from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGithubAlt,
  FaGoogle,
} from "react-icons/fa";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../../../firebase.config";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const location = useLocation();
 
  const from = location.state?.from.pathname || "/";
  console.log(location);

  let navigate = useNavigate();

  const { loginUser, googleLogin, githubLogin, setUser } =
    useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError("");

    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setUser(createdUser);
          return navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
         return navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
         return navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl text-center -mt-24 underline font-bold text-accent">
        {" "}
        This is login page
      </h2>

      <section className="h-screen">
        <div className="h-5/6">
          {/* <!-- Left column container with background--> */}
          <div className="my-container g-6 flex h-full flex-wrap items-center justify-center lg:justify-between  border-solid">
            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 mx-auto">
              <form onSubmit={handleLogin}>
                {/* <!--Sign in section--> */}
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <div className="mx-auto">
                    <p className="mb-2 text-2xl font-bold">Login With</p>

                    {/* <!-- Google --> */}
                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-12 w-12 rounded-full flex items-center justify-center bg-accent uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1A1C1B] transition duration-150 ease-in-out hover:bg-primary "
                      >
                        {/* <!-- Google --> */}
                        <FaGoogle className="text-xl" />
                      </button>

                      {/* <!-- github --> */}
                      <button
                        type="button"
                        onClick={handleGithubLogin}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-12 w-12 rounded-full bg-accent flex items-center justify-center uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1A1C1B] transition duration-150 ease-in-out hover:bg-primary ]"
                      >
                        {/* <!-- github --> */}

                        <FaGithubAlt className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="mb-4 mt-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary after:mt-0.5 after:flex-1 after:border-t after:border-primary ">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-primary">
                    Or
                  </p>
                </div>

                {/* <!-- Email input --> */}
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <label className="block text-gray-700 text-base font-bold mb-2">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    ref={emailRef}
                    className="w-full border border-accent p-3 outline-none placeholder:text-base placeholder:font-medium font-bold text-xl text-primary"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <label className="block text-gray-700 text-base font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full border border-accent p-3 outline-none placeholder:text-base placeholder:font-medium font-bold text-xl text-primary"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none  border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label className="inline-block font-semibold pl-[0.15rem] hover:cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  {/* <!--Forgot password link--> */}
                  <p>
                    <small className="font-bold">
                      Forget Passowrd?{" "}
                      <button
                        className="text-base underline text-black"
                        onClick={handleResetPassword}
                      >
                        Reset Password
                      </button>
                    </small>
                  </p>
                </div>

                <p className="text-xl font-medium text-red-600"> {error}</p>

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <button
                    href="#_"
                    className="relative inline-block text-lg group mt-6"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
                      <span className="relative text-xl font-bold ">Login</span>
                    </span>
                  </button>

                  {/* <!-- Register link --> */}
                  <p className="mb-0 mt-2 pt-1 text-md font-semibold">
                    Don't have an account?
                    <Link to="/register" className="ml-2">
                      <a
                        href="#!"
                        className="text-lg font-bold underline hover:text-accent transition hover:font-bold"
                      >
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
