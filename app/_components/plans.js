import React from 'react';
import { Kodchasan } from "next/font/google";
import Slider from './slider'; // Import the Slider component

const kodchasan = Kodchasan({ weight: ["400"], subsets: ["latin"] });

const PlanCard = ({ title, quality, price, features }) => (
  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
    <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="mt-1 border-2 rounded-full px-2">
        <h1 className="font-bold">{quality}</h1>
      </div>
    </div>
    <div><h1 className="font-bold text-3xl mt-2">KES {price}</h1></div>
    <div className="mt-3 flex gap-2">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="mt-5" key={`plus-${index}`}><h1 className="text-4xl font-bold">+</h1></div>}
          <div className="mt-3" key={`feature-${index}`}>
            {feature}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24">
    <path fill="currentColor" d="M6.616 22q-.672 0-1.144-.472T5 20.385V3.615q0-.67.472-1.143Q5.944 2 6.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H6v13h10v-1.423h1v3.307q0 .672-.472 1.144T15.385 22zM6 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707zM6 4.5h10v-.885q0-.23-.192-.423T15.385 3h-8.77q-.23 0-.423.192T6 3.616zm0 0V3zm0 15V21z" />
  </svg>
);

const PCIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z" />
  </svg>
);

const TVIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
  </svg>
);

export default function Plans() {
  const plans = [
    { title: "lite", quality: "720p", price: "299", features: [<PhoneIcon key="phone" />] },
    { title: "basic", quality: "1080p", price: "499", features: [<PhoneIcon key="phone" />, <PCIcon key="pc" />] },
    { title: "premium", quality: "4K", price: "799", features: [<PhoneIcon key="phone" />, <PCIcon key="pc" />, <TVIcon key="tv" />] },
  ];

  return (
    <div className={`${kodchasan.className} bg-[#061231] pt-5 flex flex-col items-center`}>
      <div className="flex items-center w-full">
        <div className="border-t-4 rounded-lg w-2/5 ml-4 md:ml-24" />
        <div className="mx-3 flex-grow text-center text-2xl font-bold md:text-4xl mb-3 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          plans
        </div>
        <div className="border-t-4 rounded-lg w-2/5 mr-4 md:mr-24" />
      </div>
      <div className="my-12 w-full px-4 md:px-24">
        <Slider plans={plans} />
      </div>
    </div>
  );
}
