import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chefsection = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  console.log(chefData);

  return (
    <div className="my-container">
      {/* title and paragraph section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-sacramento text-accent text-4xl">out team</h1>

        <div className="h-[2px] px-2 w-[80px]  bg-accent"></div>
        <div className="h-[2px] px-2 w-[50px] mt-1  bg-accent"></div>

        <h1 className="text-3xl md:text-6xl  text-primary font-bold mt-4 w-2/3  ">
          Introducing our finest and highly acclaimed chefs.
        </h1>
        <p className="text-xl font-semibold text-neutral-500 mt-3 lg:mt-10 mb-10 leading-7 w-3/4 lg:w-2/3">
          Our esteemed team comprises renowned chefs who have gained significant
          recognition for their exceptional culinary skills. These highly
          regarded individuals bring unparalleled expertise, creativity, and a
          deep passion for gastronomy to the table.
        </p>
      </div>

      {/* chef card section */}
      <div className="grid md:grid-cols-2 md:gap-6 md:max-w-6xl lg:grid-cols-3 gap-y-10">
        {chefData[0]?.chefs?.map((chef) => (
          <div
            key={chef?.id}
            className="text-center mx-auto border border-accent p-4  w-[325px]"
          >
            <div>
              <img
                className="w-full object-cover"
                src={chef?.chef_picture}
                alt=""
              />

              <div className="flex items-center justify-center relative my-4   lg:bottom-[60px] lg:left-[90px]">
                <span
                  type="button"
                  data-te-ripple-color="light"
                  className="mx-1 h-8 w-8 rounded-full flex items-center justify-center bg-accent uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1A1C1B] transition duration-150 ease-in-out hover:bg-primary  "
                >
                  {/* <!-- Google --> */}
                  <AiFillLike className="text-xl text-white" />
                </span>
                <span className="text-white text-lg fold-bold py-1 px-3 bg-primary ">{chef.likes}</span>
              </div>
            </div>
            <h2 className=" text-4xl text-primary font-bold ">
              {chef.chef_name}
            </h2>
            <p className="text-xl mt-4 font-semibold text-neutral-500">
              Experience: {chef.years_of_experience}
            </p>
            <p className="text-xl font-semibold text-neutral-500">
              {" "}
              Number of Recipies: 3
            </p>
            <Link to={`${chef?.id}`}>
              <button href="#_" className="relative inline-block text-lg group mt-6">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
                  <span className="relative text-xl font-bold ">
                    View Recipes
                  </span>
                </span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefsection;
