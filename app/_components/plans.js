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
                  <div className="flex gap-32">
                    <h1 className="text-2xl font-semibold">lite</h1>
                    <div className="mt-1 border-2 rounded-full px-2">
                        <h1 className="font-bold">720p</h1>
                    </div>
                  </div>
                  <div><h1 className="font-bold text-3xl mt-2">KES 299</h1></div>
                  <div className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><path fill="currentColor" d="M6.616 22q-.672 0-1.144-.472T5 20.385V3.615q0-.67.472-1.143Q5.944 2 6.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H6v13h10v-1.423h1v3.307q0 .672-.472 1.144T15.385 22zM6 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707zM6 4.5h10v-.885q0-.23-.192-.423T15.385 3h-8.77q-.23 0-.423.192T6 3.616zm0 0V3zm0 15V21z"></path></svg>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
                  <div className="flex gap-24">
                      <h1 className="text-2xl font-semibold">basic</h1>
                      <div className="mt-1 border-2 rounded-full px-2">
                        <h1 className="font-bold">1080p</h1>
                      </div>
                  </div>
                  <div><h1 className="font-bold text-3xl mt-2">KES 499</h1></div>
                  <div className="flex gap-2">
                    <div className="mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><path fill="currentColor" d="M6.616 22q-.672 0-1.144-.472T5 20.385V3.615q0-.67.472-1.143Q5.944 2 6.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H6v13h10v-1.423h1v3.307q0 .672-.472 1.144T15.385 22zM6 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707zM6 4.5h10v-.885q0-.23-.192-.423T15.385 3h-8.77q-.23 0-.423.192T6 3.616zm0 0V3zm0 15V21z"></path></svg>
                    </div>
                    <div className="mt-5"><h1 className="text-4xl font-bold">+</h1></div>
                    <div className="mt-3 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"></path></svg>
                    </div>
                  </div>  
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[250px] min-h-[200px]">
                  <div className="flex gap-24">
                      <h1 className="text-2xl font-semibold">premium</h1>
                      <div className="mt-1 border-2 rounded-full px-2">
                        <h1 className="font-bold">4K</h1>
                      </div>
                  </div>
                  <div><h1 className="font-bold text-3xl mt-2">KES 799</h1></div>
                  <div className="flex">
                    <div className="mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><path fill="currentColor" d="M6.616 22q-.672 0-1.144-.472T5 20.385V3.615q0-.67.472-1.143Q5.944 2 6.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H6v13h10v-1.423h1v3.307q0 .672-.472 1.144T15.385 22zM6 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707zM6 4.5h10v-.885q0-.23-.192-.423T15.385 3h-8.77q-.23 0-.423.192T6 3.616zm0 0V3zm0 15V21z"></path></svg>
                    </div>
                    <div className="mt-5"><h1 className="text-4xl font-bold">+</h1></div>
                    <div className="mt-3 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"></path></svg>
                    </div>
                    <div className="mt-5"><h1 className="text-4xl font-bold">+</h1></div>
                    <div className="mt-1.5 ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 20V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M8.5 2.5L12 6l3.5-3.5"></path></g></svg>
                    </div>
                  </div>  
                </div>
            </div>
        </div>
    );
}
