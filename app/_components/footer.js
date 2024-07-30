export default function Footer() {
    return (
        <footer className="bg-[#061231] text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl font-bold flex justify-center">SportyStreams</h1>
                    <p className="text-sm mt-2 ml-12">© 2024 SportyStreams. All rights reserved.</p>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" className="text-[#B01830]" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 126-29 244t-84 225t-132 196t-174 161t-208 118t-237 68v-716h239l45-296h-284V832q0-55 18-87t48-48t68-21t79-5h42q21 0 41 1V420q-56-10-114-15t-115-5q-93 0-165 28t-121 80t-75 125t-26 165v226H604v296h260v716q-125-19-237-67t-208-118t-173-161t-132-197t-84-224t-30-245q0-141 36-272t104-244t160-207t207-161T752 37t272-37"></path></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#primeTwitter0)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <svg width="24" height="24" fill="currentColor" className="text-[#B0183D]">
                            <path d="M4.98 3.5c0 1.38-1.112 2.5-2.48 2.5S0 4.88 0 3.5 1.112 1 2.5 1 4.98 2.12 4.98 3.5zM.29 8h4.42v16H.29V8zm7.87 0h4.17v2.15h.06c.58-1.1 2-2.25 4.12-2.25 4.41 0 5.23 2.9 5.23 6.67v7.43h-4.4v-6.61c0-1.57-.03-3.58-2.18-3.58-2.18 0-2.51 1.71-2.51 3.46v6.73H8.16V8z" />
                        </svg>
                    </a>
                </div>
                <div className="flex space-x-6">
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
}
