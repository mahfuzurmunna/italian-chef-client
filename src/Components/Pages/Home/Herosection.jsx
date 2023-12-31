import React from "react";
import bgimage from "../../../assets/hero-img.png";

const Herosection = () => {
  return (
    <div className="absolute top-[-112px] w-full mx-auto bg-cover   bg-bg-hero h-[500px] lg:h-[730px] bg-no-repeat  flex items-center lg:pl-[330px] ">
      <div className=" p-6 lg:p-0">
        <h1 className="font-black md:text-4xl text-4xl lg:text-7xl lg:w-[700px] text-white leading-12">
          Vecchio Evokes the Generosity, Humor & Simiplicity of Italy.
        </h1>
        <div className="h-[2px] px-2 w-[80px] mt-4 bg-accent"></div>
        <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent"></div>
        <p className="text-white font-sacramento font-medium mt-5 text-5xl">
          real test of italy
        </p>
        <div>
          <a href="#_" className="relative inline-block text-lg group mt-6">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
              <span className="relative text-xl font-bold ">Book a Table</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
