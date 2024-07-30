import { Kodchasan } from "next/font/google";

const kodchasan = Kodchasan({ weight: ["400"], subsets: ["latin"] });

export default function Plans() {
    return (
        <div className={`${kodchasan.className} bg-[#061231] pt-5 flex flex-col items-center`}>
            <div className="flex items-center w-full">
                <div className="border-t-4 rounded-lg w-2/5 ml-4 md:ml-24"></div>
                <div className="mx-3 flex-grow text-center text-2xl font-bold md:text-4xl mb-3 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    plans
                </div>
                <div className="border-t-4 rounded-lg w-2/5 mr-4 md:mr-24"></div>
            </div>
            <div className="my-12 flex flex-col md:flex-row md:justify-center gap-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
                    lite
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
                    basic
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
                    premium
                </div>
            </div>
        </div>
    );
}
