"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Slider = ({ plans }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index} style={{ width: '300px' }}>
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
      <div ref={prevRef} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div ref={nextRef} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
)};

export default Slider;