import React from 'react';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0.5em"
    height="1em"
    viewBox="0 0 12 24"
    className="ml-2"
  >
    <defs>
      <path
        id="weuiArrowOutlined0"
        fill="currentColor"
        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
      />
    </defs>
    <use
      fillRule="evenodd"
      href="#weuiArrowOutlined0"
      transform="rotate(-180 5.02 9.505)"
    />
  </svg>
);

const BackgroundVideo = () => (
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const WatchButton = () => (
  <button className="relative z-10 flex items-center border-2 px-5 py-2 border-white bg-black bg-opacity-50 text-white">
    Click to watch
    <ArrowIcon />
  </button>
);

export default function Clickme() {
  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <BackgroundVideo />
      <WatchButton />
    </div>
  );
}