import React from 'react';
import { Button } from '@nextui-org/react';
import perfect from '../Phots/perfect-card (1).svg';

function PerfectCard() {
  return (
    <section className="py-16">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10 px-6 sm:px-12 lg:px-20">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={perfect}
            alt="Perfect Card"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 sm:w-1/2 text-center sm:text-left">
          <h2 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            Find the Perfect Card for You
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md mx-auto sm:mx-0">
            Unlocking the Power of Crypto, Both Virtually and Physically. 
            Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="solid"
              radius="full"
              size="lg"
              color="primary"
              className="font-bold text-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerfectCard;
