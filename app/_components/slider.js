"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ plans }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {plans.map((plan, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">{plan.title}</h1>
              <div className="mt-1 border-2 rounded-full px-2">
                <h1 className="font-bold">{plan.quality}</h1>
              </div>
            </div>
            <div><h1 className="font-bold text-3xl mt-2">KES {plan.price}</h1></div>
            <div className="mt-3 flex gap-2">
              {plan.features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  {featureIndex > 0 && <div className="mt-5"><h1 className="text-4xl font-bold">+</h1></div>}
                  <div className="mt-3">
                    {feature}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;