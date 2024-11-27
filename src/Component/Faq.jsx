// import { Accordion, AccordionItem } from '@nextui-org/react';
// import React from 'react';

// function Faq() {
//   const faq = [
//     {
//       q: "What credit score do I need to apply for a credit card?",
//       a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
//     },
//     {
//       q: "Can I apply for multiple credit cards at once?",
//       a: "Yes, you can apply for multiple credit cards, but doing so can temporarily lower your credit score due to multiple hard inquiries.",
//     },
//     {
//       q: "How can I increase my credit score?",
//       a: "Paying bills on time, reducing credit card balances, and avoiding unnecessary credit inquiries can help improve your credit score over time.",
//     },
//     {
//       q: "Is my credit card information secure?",
//       a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
//     },
//     {
//       q: "What are the annual fees for credit cards?",
//       a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
//     },
//     {
//       q: " Are there any annual fees associated with the credit card?",
//       a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
//     },
//   ];

//   return (
//     <section className="px-6 py-5 w-[1025px]   items-center mx-auto mt-20 shadow-2xl p-2  rounded-2xl max-w-7xl ">
//       <h2 className="font-bold text-center text-2xl lg:text-3xl leading-tight text-white mb-8 items-center mx-auto ">FAQs</h2>

//       <Accordion>
//         {faq.map(({ q, a }, i) => (
//           <AccordionItem key={i} title={q} aria-label={q}>
//             <p className="text-gray-600 text-sm mt-2 w-[890px]">{a}</p>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </section>
//   );
// }

// export default Faq;


import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';

function Faq() {
  const faq = [
    {
      q: "What credit score do I need to apply for a credit card?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: "Can I apply for multiple credit cards at once?",
      a: "Yes, you can apply for multiple credit cards, but doing so can temporarily lower your credit score due to multiple hard inquiries.",
    },
    {
      q: "How can I increase my credit score?",
      a: "Paying bills on time, reducing credit card balances, and avoiding unnecessary credit inquiries can help improve your credit score over time.",
    },
    {
      q: "Is my credit card information secure?",
      a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
    },
    {
      q: "What are the annual fees for credit cards?",
      a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
    },
    {
      q: "Are there any annual fees associated with the credit card?",
      a: "Annual fees vary by card type. Some cards have no annual fees, while premium cards can charge up to $500 or more annually.",
    },
  ];

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto mt-12 shadow-lg rounded-xl ">
      {/* Title */}
      <h2 className="font-bold text-center text-2xl md:text-3xl leading-tight text-white mb-8">
        FAQs
      </h2>

      {/* Accordion */}
      <Accordion>
        {faq.map(({ q, a }, i) => (
          <AccordionItem key={i} title={q} aria-label={q}>
            <p className="text-gray-600 text-sm mt-2">
              {a}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default Faq;
