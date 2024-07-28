import { Radio_Canada } from "next/font/google";

const radio = Radio_Canada({ subsets: ["latin"] });
const menu_options = ['Livestream', 'Plans', 'Livescores', 'FAQs'];

export default function Navbar() {
  return (
    <div className='p-5 flex items-center'>
      <div className={`${radio.className} p-2`}>
        <h1>SportyStreams</h1>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="flex space-x-4 list-none p-0">
          {menu_options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="mr-4 p-2 text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
      </div>
    </div>
  );
}
