import React from 'react';
import { Button } from '@nextui-org/react';
import HerroPng from "../Phots/Herro.png";

function Herro() {
  return (
    <section className=" flex flex-col sm:flex-row justify-between items-center mt-10 lg:mt-20 xl:mt-12 relative">
      {/* Text Section */}
      <div className="text-center sm:text-left max-w-lg z-10 order-2 sm:order-1 mt-16 sm:mt-0 ml-10 space-y-9" >
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 ml-6 text-white ">
          Spend your Cardano   anywhere, anytime.
        </h1>
        <p className="text-gray-600 mb-6 ml-6">
          Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.
        </p>
        <Button variant="solid" radius="full" size="lg" color="primary" className="font-bold text-sm ml-6">
          Get Started
        </Button>
      </div>

      {/* Image Section */}
      <div className="relative sm:w-auto order-1 sm:order-2">
        <img
          src={HerroPng}
          alt="Hero"
          className="w-full h-auto   md:w-[550px] md:h-[500px]"
        />
      </div>
    </section>
  );
}



export default Herro;
