import React from 'react';
import { Button } from '@nextui-org/react';
import DavidCard from "../Phots/DavidCard.png";

function David() {
  return (
    <section className="py-16 mt-28">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-6 sm:px-12 lg:px-20 gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="space-y-6 sm:w-1/2 text-center sm:text-left">
          <h2 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            Wern Debit Card
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto sm:mx-0">
            More than just a card, it's a bridge to a new financial experience.
            Embrace the simplicity and security of spending your Cardano with the Wern Card.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Button
              variant="solid"
              radius="full"
              size="lg"
              color="primary"
              className="font-bold text-sm"
            >
              Get Started
            </Button>
            <span className="text-[#772AB3] text-sm sm:text-base mt-3">
              Will be available soon
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={DavidCard}
            alt="David Card"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default David;
