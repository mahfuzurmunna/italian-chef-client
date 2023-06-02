import React from "react";
import Herosection from "./Herosection";
import "./Home.css";
import foodimg from "../../../assets/pasta-1.png";
import pizzaimg from "../../../assets/pizza-1.png";
import Chefsection from "./Chefsection";
import Events from "./Events";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div className="home ">
        <Herosection />
      </div>

      <div className="bg-bg-navbar bg-cover bg-no-repeat h-[450px] lg:h-[710px]"></div>

      {/* welcome section */}
      <div className="my-container flex flex-col md:flex-row gap-28">
        <div className="max-w-xl ">
          <p className="font-sacramento text-accent text-4xl ">
            welcome to vecchino
          </p>
          <div className="h-[2px] px-2 w-[80px] mt-4 bg-accent"></div>
          <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent"></div>
          <h1 className="text-4xl md:text-6xl text-primary font-bold mt-4 ">
            We are a modern Italian restaurant in the center of the city.
          </h1>
          <p className="text-xl font-semibold text-neutral-500 mt-5 mb-10 leading-7">
            We would like to take this opportunity to welcome you to our
            restaurant. We guarantee you the freshest food, delivered daily to
            our dock, prepared to your liking. We can prepare a specific meal by
            request. All our locations are providing a wonderful open-air venue
            to enjoy the meal all year round, we offer both indoor and alfresco
            dining and our focus is on serving.
          </p>
          <img src={foodimg} alt="" />
        </div>
        <div className="w-full  flex justify-between flex-col">
          <img src={pizzaimg} className="w-full hidden lg:block" alt="" />
          <h2 className="text-primary text-3xl font-bold   lg:mt-12 ">
            Contacts
          </h2>
          <div>
            <div className="h-[2px] px-2 w-[80px]  bg-accent"></div>
            <div className="h-[2px] px-2 w-[50px] mt-1 mb-6 bg-accent"></div>
          </div>
          <div className="w-full bg-primary p-6 ">
            <p className="text-accent text-2xl ">
              8500, Lorem Street, Chicago, <br /> IL, 55030 <br />{" "}
              sales@yoursite.com <br /> (123) 456-78-90
            </p>
          </div>
        </div>
      </div>

      {/* chef section */}
      <Chefsection></Chefsection>

      {/* event section */}

      <Events></Events>
    </div>
  );
};

export default Home;
