'use client';
import { useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';
import Image from 'next/image';

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "SportyStreams has revolutionized how I watch sports. The quality is unmatched!"
  },
  {
    name: "Sarah Lee",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    comment: "Great variety of sports and excellent streaming quality. Highly recommended!"
  },
  {
    name: "Mike Brown",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "Never miss a game now. The live scores feature is a game-changer!"
  },
  // Add more testimonials if desired
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-4 sm:p-6 shadow-lg m-2 sm:m-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 relative mr-3 sm:mr-4 flex-shrink-0">
          <Image 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{testimonial.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white italic text-sm sm:text-base">{testimonial.comment}</p>
    </div>
  );
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(testimonials[index], {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    config: { duration: 3000 },
  });

  const nextTestimonial = useCallback(() => {
    setIndex(state => (state + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  return (
    <div className="bg-[#061231] pt-5 pb-10">
      <div className="flex items-center w-full">
        <div className="border-t-4 rounded-lg w-2/5 ml-4 md:ml-24" />
        <div className="mx-3 flex-grow text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          Testimonials
        </div>
        <div className="border-t-4 rounded-lg w-2/5 mr-4 md:mr-24" />
      </div>
      <div className="flex justify-center mt-4 sm:mt-8 h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden relative">
        {transitions((style, item) => (
          <animated.div style={style} className="absolute w-full flex justify-center">
            <TestimonialCard testimonial={item} />
          </animated.div>
        ))}
      </div>
    </div>
  );
}