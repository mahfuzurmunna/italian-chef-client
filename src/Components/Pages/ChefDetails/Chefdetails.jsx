import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Chefsection from "../Home/Chefsection";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Chefdetails = () => {
  const { id } = useParams();

  const [chefDetails, setChefDetails] = useState({});
   const [activeTab, setActiveTab] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/alldata/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.item));
  }, [id]);

  console.log(chefDetails);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

      const handleFavoriteClick = () => {
        setIsFavorited(true);
      };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center -mt-28 underline font-bold text-accent">
        Chef's Details
      </h2>
      <div className="bg-bg-food  bg-cover mt-16 h-[300px]">
        {/* chef details banner */}
        <div className="my-container-w-p flex flex-col text-center md:flex-row md:text-left items-center gap-8 justify-center p-8">
          {/* image here */}
          <div>
            <img
              src={chefDetails.chef_picture}
              className="w-[100px] md:w-[200px] "
              alt=""
            />
            {/* like button and likes */}
            <div className="flex relative left-10 mt-2">
              <span
                type="button"
                data-te-ripple-color="light"
                className="mx-1 h-8 w-8 rounded-full flex items-center justify-center bg-accent uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#1A1C1B] transition duration-150 ease-in-out hover:bg-primary  "
              >
                {/* <!-- Google --> */}
                <AiFillLike className="text-xl text-white" />
              </span>
              <span className="text-white text-lg fold-bold py-1 px-3 bg-primary ">
                {chefDetails.likes}
              </span>
            </div>
          </div>

          {/* detail info */}
          <div className="w-1/2">
            <h2 className=" text-4xl text-primary font-bold ">
              {chefDetails.chef_name}
            </h2>
            <p className="text-xl mt-4 font-semibold text-neutral-500">
              {chefDetails.description}
            </p>
            <p className="text-xl mt-4 font-bold text-primary underline ">
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
              chef special
            </h1>

            <div className="h-[2px] px-2 w-[80px]   bg-accent"></div>
            <div className="h-[2px] px-2 w-[50px] mt-1  bg-accent"></div>

            <div>
              <div className="flex mt-4">
                {chefDetails.recipes &&
                  chefDetails.recipes.map((recipe, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 cursor-pointer ${
                        activeTab === index ? "bg-accent text-white" : ""
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
                    <h2 className="text-2xl font-bold mb-2">
                      {chefDetails.recipes[activeTab]?.recipe_name}
                    </h2>
                    <p>
                      Cooking Method:{" "}
                      {chefDetails.recipes[activeTab]?.cooking_method}
                    </p>
                    <p>Ingredients:</p>
                    <ul>
                      {chefDetails.recipes[activeTab]?.ingredients.map(
                        (ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        )
                      )}
                    </ul>
                    <p>Rating: {chefDetails.recipes[activeTab]?.rating}</p>
                    <button
                      className="bg-accent text-white py-2 px-4 mt-4"
                      onClick={handleFavoriteClick}
                      disabled={isFavorited}
                    >
                      {isFavorited ? "Favorited" : "Add to Favorites"}
                    </button>
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
