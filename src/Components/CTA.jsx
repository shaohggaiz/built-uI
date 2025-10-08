import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="bg-black-gradient-2 py-10 px-12 rounded-2xl flex flex-col md:flex-row  justify-between items-center ">
        <div className="">
          <h2 className="text-[40px] md:text-[50px] font-semibold text-white leading-[70px] md:leading-[80px]">
            Let's try our service now!
          </h2>
          <p className="max-w-[470px] leading-7 mt-5 text-gray-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default CTA;
