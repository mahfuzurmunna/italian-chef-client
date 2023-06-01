import React from 'react';

const Events = () => {
  return (
    <div className="my-container gap-28">
      <div className="  flex flex-col items-center text-center">
        <p className="font-sacramento text-accent text-4xl ">our events</p>
        <div className="h-[2px] px-2 w-[80px] mt-4 bg-accent"></div>
        <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent"></div>
        <h1 className="text-5xl text-primary font-bold mt-4 ">
          Vecchio invites you to events
        </h1>
        <p className="text-xl font-semibold text-neutral-500 mt-5 mb-10 leading-7">
          We would like to take this opportunity to welcome you to our
          restaurant.
        </p>

        <div className="flex justify-center h-[150px]  my-10">
          <div className="bg-primary  w-[200px] p-6 ">
            <h1 className="text-2xl font-bold text-white">March 21,</h1>
            <p className="text-accent text-2xl font-bold">2024</p>
          </div>
          <div className="flex items-center gap-6 bg-[#F1EEE8]">
            <div className=" p-4 border-r border-accent">
              <h2 className="leading-2 text-md px-5  text-neutral-500 font-bold ">
                Braida Wine Dinner with <br /> Chef Scott Anderson of Elements
              </h2>
            </div>
            <div className="p-4 border-r border-accent hidden lg:block">
              Thursday <br /> 12 Pm - 3 Pm
            </div>
            <div className="p-10 hidden lg:block ">
              {" "}
              <h2 className="font-bold text-primary text-xl border-b border-primary w-full text-center  ">
                Details
              </h2>{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-center h-[150px]  my-10">
          <div className="bg-primary  w-[200px] p-6 ">
            <h1 className="text-2xl font-bold text-white">March 21,</h1>
            <p className="text-accent text-2xl font-bold">2024</p>
          </div>
          <div className="flex items-center gap-6 bg-[#F1EEE8]">
            <div className=" p-4 border-r border-accent">
              <h2 className="leading-2 text-md px-5  text-neutral-500 font-bold ">
                Braida Wine Dinner with <br /> Chef Scott Anderson of Elements
              </h2>
            </div>
            <div className="p-4 border-r border-accent hidden lg:block">
              Thursday <br /> 12 Pm - 3 Pm
            </div>
            <div className="p-10 hidden lg:block ">
              {" "}
              <h2 className="font-bold text-primary text-xl border-b border-primary w-full text-center  ">
                Details
              </h2>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;