import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useNavigation, useParams } from "react-router-dom";
import Chefsection from "../Home/Chefsection";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import toast, { Toaster } from "react-hot-toast";
import Loadingspinner from "../../Loadingspinner/Loadingspinner";
import LazyLoad from "react-lazy-load";


const Chefdetails = () => {
   const navigation = useNavigation();
   console.log(navigation.state);

   if (navigation.state === "loading") {
     return <Loadingspinner
     ></Loadingspinner>;
   }


  const { id } = useParams();

  const [chefDetails, setChefDetails] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch(`https://italian-chef-server-mahfuzurmunna.vercel.app/alldata/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.item));
  }, [id]);

  // console.log(chefDetails);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFavoriteClick = () => {
    toast.success("Recipe added to Favorites", {
      style: {
        border: "1px solid #1A1C1B",
        padding: "16px",
        color: "#1A1C1B",
        fontSize: "20px",
        fontWeight: "bold",
      },
      iconTheme: {
        primary: "#b7b090",
        secondary: "#FFFAEE",
      },
    });

    setChefDetails((prevChefDetails) => {
      const updatedRecipes = [...prevChefDetails.recipes];
      updatedRecipes[activeTab].isFavorited = true;
      return {
        ...prevChefDetails,
        recipes: updatedRecipes,
      };
    });
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center -mt-28 underline font-bold text-accent">
        Chef's Details
      </h2>
      <div className="bg-bg-food  bg-cover mt-16 h-[350px]">
        {/* chef details banner */}
        <div className="my-container-w-p flex flex-col text-center md:flex-row md:text-left items-center gap-8 justify-center p-8">
          {/* image here */}
          <div>
            <LazyLoad
              
              threshold={0.95}
              onContentVisible={() => {
                console.log("loaded!");
              }}
            >
              <img
                src={chefDetails.chef_picture}
                className="w-[150px] md:w-[200px] "
                alt=""
              />
            </LazyLoad>

            {/* like button and likes */}
            <div className="flex relative left-5 lg:left-10 mt-2">
              <span
                type="button"
                data-te-ripple-color="light"
                className="mx-1 h-8 w-8 rounded-full flex items-center justify-center bg-accent uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1A1C1B] transition duration-150 ease-in-out hover:bg-primary"
              >
                {/* <!-- Google --> */}
                <AiFillLike className="text-xl text-white" />
              </span>
              <span className="text-white text-lg fold-bold py-1 px-3 bg-primary">
                {chefDetails.likes}
              </span>
            </div>
          </div>

          {/* detail info */}
          <div className="w-1/2">
            <h2 className="text-4xl text-primary font-bold">
              {chefDetails.chef_name}
            </h2>
            <p className="text-xl mt-4 font-semibold hidden md:block text-neutral-500">
              {chefDetails.description}
            </p>
            <p className="text-xl lg:mt-4 font-bold text-primary underline">
              Experience: {chefDetails.years_of_experience}
            </p>
          </div>
        </div>
      </div>

      {/* recipe details */}
      <div className="my-container">
        <div className="flex justify-between ">
          <div>
            <h1 className="font-sacramento text-accent text-4xl mb-4">
              Chef Special
            </h1>

            <div className="h-[2px] px-2 w-[80px] bg-accent"></div>
            <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent"></div>

            <div>
              <h2 className="text-5xl text-primary font-bold my-8">
                Explore {chefDetails.chef_name} Recipes
              </h2>
              <div className="flex mt-4">
                {chefDetails.recipes &&
                  chefDetails.recipes.map((recipe, index) => (
                    <div
                      key={index}
                      className={`px-1 mx-2 py-2 cursor-pointer font-bold text-lg text-accent ${
                        activeTab === index
                          ? "border-b border-primary text-primary text-xl"
                          : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {recipe.recipe_name}
                    </div>
                  ))}
              </div>
              <div className="mt-4">
                {chefDetails.recipes && (
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {chefDetails.recipes[activeTab]?.recipe_name}
                    </h2>
                    <p className="text-xl font-semibold text-neutral-500 mt-5 mb-10 leading-7 w-2/3">
                      <span className="text-primary"> Cooking Method: </span>
                      {chefDetails.recipes[activeTab]?.cooking_method}
                    </p>
                    <p className="text-2xl text-primary font-bold mt-4 mb-2">
                      Ingredients:
                    </p>
                    <ul>
                      {chefDetails.recipes[activeTab]?.ingredients.map(
                        (ingredient, index) => (
                          <li
                            className="list-disc list-inside text-lg font-semibold text-neutral-500  uppercase"
                            key={index}
                          >
                            {ingredient}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="my-6">
                      <p className=" inline text-2xl underline mr-4 font-bold">
                        Rating:
                      </p>
                      <span className="text-2xl">
                        {chefDetails.recipes[activeTab]?.rating}
                      </span>
                    </div>

                    <button
                      onClick={handleFavoriteClick}
                      disabled={chefDetails.recipes[activeTab]?.isFavorited}
                      className="relative inline-block text-lg group mt-2"
                    >
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 bg-primary"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease"></span>
                        <span className="relative text-xl font-bold">
                          {chefDetails.recipes[activeTab]?.isFavorited
                            ? "Favorited"
                            : "Add to Favorites"}
                        </span>
                      </span>
                    </button>
                    <Toaster />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefdetails;
