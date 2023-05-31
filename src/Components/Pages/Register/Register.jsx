import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGithubAlt,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl text-center -mt-24  font-bold text-accent">
        {" "}
        This is Register page
      </h2>

      <section className="h-screen">
        <div className="h-5/6">
          {/* <!-- Left column container with background--> */}
          <div className="my-container g-6 flex h-full flex-wrap items-center justify-center lg:justify-between  border-solid">
            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 mx-auto">
              <form>
                {/* <!--Sign in section--> */}
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-2xl font-bold">Register With</p>

                  {/* <!-- Facebook --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full flex items-center justify-center bg-accent uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 "
                  >
                    {/* <!-- Facebook --> */}
                    <FaGoogle className="text-xl" />
                  </button>

                  {/* <!-- Twitter --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-accent flex items-center justify-center uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out]"
                  >
                    {/* <!-- Twitter --> */}

                    <FaGithubAlt className="text-xl" />
                  </button>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="mb-8 mt-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary after:mt-0.5 after:flex-1 after:border-t after:border-primary ">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-primary">
                    Or
                  </p>
                </div>
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block text-xl font-bold min-h-[auto] w-full  border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-primary placeholder:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-accent"
                    id="exampleFormControlInput2"
                    placeholder="Enter Your Name"
                  />
                  <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.6rem] leading-[2.15] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-accent peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-primary dark:peer-focus:text-primary "
                  >
                    Enter Your Name
                  </label>
                </div>

                {/* <!-- Email input --> */}
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block text-xl font-bold min-h-[auto] w-full  border px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-primary placeholder:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-accent"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                  <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.6rem] leading-[2.15] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-accent peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-primary dark:peer-focus:text-primary "
                  >
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full  border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-primary dark:placeholder:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  border-accent"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                  />
                  <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-primary transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-primary dark:peer-focus:text-primary "
                  >
                    Password
                  </label>
                </div>

                {/* photo URL */}
                <div className="relative mb-8" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full  border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-primary dark:placeholder:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  border-accent"
                    id="exampleFormControlInput22"
                    placeholder="Photo URL"
                  />
                  <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-primary transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-primary dark:peer-focus:text-primary "
                  >
                    Photo URL
                  </label>
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
                    <label
                      className="inline-block font-semibold pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>

                  {/* <!--Forgot password link--> */}
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <button
                    href="#_"
                    className="relative inline-block text-lg group mt-6"
                  >
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
                      <span className="relative text-xl font-bold ">
                        Register
                      </span>
                    </span>
                  </button>

                  {/* <!-- Register link --> */}
                  <p className="mb-0 mt-2 pt-1 text-md font-semibold">
                    Already have an account?
                    <Link to="/login" className="ml-2">
                      <a
                        href="#!"
                        className="text-lg font-bold underline hover:text-accent transition hover:font-bold"
                      >
                        Login
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

export default Register;
