import { Kodchasan } from "next/font/google";

const kodchasan = Kodchasan({ weight: ["400"], subsets: ["latin"] });

export default function Header() {
  return (
    <main className="bg-[#061231] p-4">
      <div className={`${kodchasan.className} w-1/3 p-12`}>
        <h1 className="text-2xl md:text-6xl font-bold">
          <span className="text-[#FF2828]">I</span>
          <span className="text-white">t</span>
          <span className="text-white">'s </span>
          <span className="text-[#FF2828]">i</span>
          <span className="text-white">n </span>
          <span className="text-[#FF2828]">t</span>
          <span className="text-white">h</span>
          <span className="text-white">e </span>
          <span className="text-[#FF2828]">g</span>
          <span className="text-white">a</span>
          <span className="text-white">m</span>
          <span className="text-[#FF2828]">e</span>
        </h1>
      </div>
    </main>
  );
}
