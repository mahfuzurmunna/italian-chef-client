import React from 'react';
import logo from "../../../assets/logo-2.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-bg-nav min-h-[262px] object-cover ">
        <div className="grid lg:grid-cols-3">
          <div className=" w-[1028px] m-auto">
            <img src={logo} alt="" className=" lg:w-[200px]" />
            <p>
              Experience the true essence of Neapolitan pizzas cooked in a
              wood-fired oven, crafted with utmost reverence for tradition.
              Indulge in our delectable, handcrafted pasta, including a must-try
              truffle-infused variety. Our extensive selection boasts over a
              hundred exceptional wines from renowned vineyards. And to conclude
              your meal on a sweet note, savor our delightful Italian Gelato.
            </p>
          </div>

          <div>
            <h2> We are on Instagram</h2>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;