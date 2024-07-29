'use client';
import { useState } from "react";
import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({ subsets: ["latin"] });
const menu_options = ['Livestream', 'Plans', 'Livescores', 'FAQs'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 flex items-center justify-between bg-[#061231] text-white">
      <div className={`${radio.className} p-2`}>
        <h1 className="text-2xl font-bold">SportyStreams</h1>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex space-x-6 list-none p-2">
          {menu_options.map((option, index) => (
            <li key={index} className="hover:text-blue-300 cursor-pointer">{option}</li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Account</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Login</button>
      </div>
      <div className="md:hidden p-2 text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#061231] shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {menu_options.map((option, index) => (
              <li key={index} className="hover:text-blue-300 cursor-pointer">{option}</li>
            ))}
            <li>
              <button className="w-full hover:text-blue-300 cursor-pointer">Account</button>
            </li>
            <li>
              <button className="hover:text-blue-300 cursor-pointer w-full">Login</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
