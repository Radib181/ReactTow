import React from 'react';
import person1 from "../Phots/person-1.png";
import person2 from "../Phots/person-2.png";
import person3 from "../Phots/person-3.png";
import Frame from '../Phots/Frame.png';

function FeedbackSection() {
  const review = [
    { img: person1, review: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.", name: 'Hadid Khan', status: "UIUX Designer" },
    { img: person2, review: "It's both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment.", name: 'Wade Warren', status: "Web Designer" },
    { img: person3, review: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's exactly what our business has been lacking.", name: 'Jenny Wilson', status: "Trust Administrator" },
  ];

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto mt-20 mb-10 px-6 text-white'>
      {review.map((item, i) => (
        <div 
          key={i} 
          className='bg-[#27322F3D]/25 rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-gradient-to-t hover:from-[#1A212B] hover:to-[#2C3541] group relative overflow-hidden'
        >
        
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#ffffff0d] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl'></div>

         
          <div className='w-16 h-16 flex items-center justify-center mx-auto'>
            <img 
              className='rounded-full p-3 bg-gradient-to-r from-[#3D3F54] to-[#1E202A] transform transition-transform duration-500 group-hover:rotate-45' 
              src={Frame} 
              alt="Frame" 
            />
          </div>

         
          <div className='text-center'>
            <p className='text-base italic leading-relaxed text-gray-300 opacity-90 group-hover:text-gray-100 transition-all duration-500'>
              &quot;{item.review}&quot;
            </p>
          </div>

       
          <div className='flex items-center justify-center space-x-4'>
            <img 
              className='w-14 h-14 rounded-full border-4 border-gray-600 shadow-md transform transition-transform duration-500 group-hover:scale-110 group-hover:border-[#3D3F54]' 
              src={item.img} 
              alt={item.name} 
            />
            <div>
              <h5 className='text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-500'>
                {item.name}
              </h5>
              <p className='text-sm text-gray-400 group-hover:text-gray-300'>{item.status}</p>
            </div>
          </div>

         
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#3D3F54] opacity-10 rounded-full group-hover:animate-pulse"></div>
        </div>
      ))}
    </section>
  );
}

export default FeedbackSection;
