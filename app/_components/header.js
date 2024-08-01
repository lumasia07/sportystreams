import { Kodchasan } from "next/font/google";
import Image from "next/image";

const kodchasan = Kodchasan({ weight: ["400"], subsets: ["latin"] });

const ColoredText = ({ children, colors }) => (
  <>
    {children.split("").map((char, index) => (
      <span key={index} className={colors[index] ? `text-[${colors[index]}]` : "text-white"}>
        {char}
      </span>
    ))}
  </>
);

export default function Header() {
  return (
    <main className="bg-[#061231] p-4 flex items-center">
      <div className={`${kodchasan.className} w-1/3 md:pl-8 md:m-10`}>
        <h1 className="text-5xl md:text-6xl font-bold">
          <ColoredText colors={["#FF2828", null, null, "#FF2828", null, "#FF2828", null, null, "#FF2828"]}>
            {"It's in the game"}
          </ColoredText>
        </h1>
        <div className="mt-5">
          <h2 className="text-sm md:text-4xl font-bold">
            <ColoredText colors={[null, "#B0183D", null, null, "#B0183D", null, "#B0183D"]}>
              {"Enjoy every royale in full HD"}
            </ColoredText>
          </h2>
        </div> 
      </div>
      <div className="ml-4 md:ml-52">
        <Image 
          src="/saka.webp" 
          alt="Saka" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>
    </main>
  );
}
