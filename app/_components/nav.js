'use client';
import { useState } from "react";
import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({ subsets: ["latin"] });
const menu_options = ['Livestream', 'Plans', 'Livescores', 'FAQs'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 flex items-center justify-between bg-[#061231] text-white">
      <div className={`${radio.className} pl-2 md:pl-20`}>
        <h1 className="text-2xl md:text-3xl font-bold">SportyStreams</h1>
      </div>
      <div className="flex-grow hidden md:flex justify-center">
        <div className="border border-[#061231] rounded-md py-4 px-10 bg-[#071842] shadow-2xl">
          <ul className="flex space-x-12 list-none">
            {menu_options.map((option, index) => (
              <li key={index} className="hover:text-[#FF2828] cursor-pointer transition-colors duration-200">
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:flex space-x-6 mr-16">
        <button className="border-2 text-white px-6 py-2 rounded-full hover:bg-[#FF2828] transition-all duration-200">
          Account
        </button>
      </div>
      <div className="md:hidden bg-[#FF2828] p-2 text-3xl cursor-pointer rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#061231] shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {menu_options.map((option, index) => (
              <li key={index} className="hover:text-[#FF2828] cursor-pointer transition-colors duration-200">
                {option}
              </li>
            ))}
            <li>
              <button className="hover:text-[#FF2828]">My Account</button>
            </li>
            <li>
              <button className="border-2 rounded-full text-white px-6 py-2 hover:text-[#FF2828] w-full">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
