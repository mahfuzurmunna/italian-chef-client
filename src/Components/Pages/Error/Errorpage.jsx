import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-primary text-gray-900">
      <div className="my-container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-1/2 text-accent"

        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only text-accent">Error</span> {status || 404}
          </h2>
          <p className="text-2xl text-white font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
        </div>
        <Link to="/">
          <a href="#_" className="relative inline-block text-lg group mt-6">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
              <span className="relative text-xl font-bold ">
                Back to HomePage
              </span>
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Errorpage;
