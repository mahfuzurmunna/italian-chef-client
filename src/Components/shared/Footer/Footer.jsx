import React from 'react';
import logo from "../../../assets/logo-2.png";
import img1 from "../../../assets/img-1.png"
import img2 from "../../../assets/img-2.png";
import img3 from "../../../assets/img-3.png";
import img4 from "../../../assets/img-4.png";
import img5 from "../../../assets/img-5.png";
import img6 from "../../../assets/img-6.png";
import { FaBeer } from "react-icons/fa";


const Footer = () => {

  const scrollToHeader = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="z">
      <div className="bg-bg-nav min-h-[262px] py-20 ">
        <div className="grid lg:grid-cols-3 text-white text-center w-3/5 mx-auto gap-8 ">
          <div className="  flex flex-col items-center px-5">
            <img src={logo} alt="" className=" lg:w-[200px]" />
            <p className="text-accent text-lg  font-bold leading-6 mt-6">
              Experience the true essence of Neapolitan pizzas cooked in a
              wood-fired oven, crafted with utmost reverence for tradition.
              Indulge in our delectable, handcrafted pasta, including a must-try
              truffle-infused variety.
              <br /> <br />
              And to conclude your meal on a sweet note, savor our delightful
              Italian Gelato.
            </p>
          </div>

          <div>
            <h2 className="text-white text-3xl font-bold">
              {" "}
              We are on Instagram
            </h2>
            <div className="h-[2px] px-2 w-[80px] mt-4 bg-accent mx-auto"></div>
            <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent mx-auto mb-4"></div>
            <div className="grid grid-cols-3 w-5/6 gap-2 mx-auto justify-center">
              <span>
                <img src={img1} alt="" />
              </span>
              <span>
                <img src={img2} alt="" />
              </span>
              <span>
                <img src={img3} alt="" />
              </span>
              <span>
                <img src={img4} alt="" />
              </span>
              <span>
                <img src={img5} alt="" />
              </span>
              <span>
                <img src={img6} alt="" />
              </span>
            </div>
          </div>
          <div className=" text-center">
            <h2 className="text-white text-3xl font-bold">Get in Touch</h2>
            <div className="h-[2px] px-2 w-[80px] mt-4 bg-accent mx-auto"></div>
            <div className="h-[2px] px-2 w-[50px] mt-1 bg-accent mx-auto mb-8"></div>

            <p className="text-accent font-bold text-xl">
              Stay Tuned with Our Updates!
            </p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-8 py-3 mt-4 text-center bg-white text-xl"
            />
            <button
              className="text-accent text-2xl border-b-2 border-accent block  mt-4 mx-auto hover:text-white hover:border-white 
           "
            >
              Subscribe
            </button>
          </div>
        </div>
        <button
          className=" text-white text-xl border-b text-center mx-auto"
          onClick={scrollToHeader}
        >
          Back to top
        </button>
      </div>
    </div>
  );
};

export default Footer;