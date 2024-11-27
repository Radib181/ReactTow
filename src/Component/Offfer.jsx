import React from "react";
import Icon from "../Phots/Icon.jpg";
import Dollericon from "../Phots/Dollericon.jpg";
import Icon3 from "../Phots/Icon3.jpg";

function Offfer() {

  const OfferList = [
    {
      title: "Cardano Debit-Cards",
      description: "Cardano, simplified. The debit card that makes crypto spending easy.",
      icon: Icon,
    },
    {
      title: "On & Off Ramp",
      description: "Fiat meets crypto, effortlessly buy, sell, and manage.",
      icon: Dollericon,
    },
    {
      title: "Solutions for business",
      description: "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
      icon: Icon3,
    },
  ];

  return (
    <section className="space-y-14 mt-20 mb-2">
      <div>
        <h2 className="items-center justify-center mx-auto text-center text-white  mb-8 text-4xl  ">What do we offer?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {OfferList.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-[#3D3F54] flex items-center justify-center max-h-12 max-w-12 rounded-2xl w-4/5 ml-12 ">
                <img className="h-6 w-6" src={item.icon} alt="icon" />
              </div>
              <div className="">
                <h4 className="font-bold text-lg text-secondary-50">{item.title}</h4>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offfer;
