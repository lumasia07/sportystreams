export default function Clickme() {
    return (
        <div className="flex justify-center my-3">
            <button className="flex items-center border-2 px-5 py-2 border-black">
                Click to watch
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
                        ></path>
                    </defs>
                    <use
                        fillRule="evenodd"
                        href="#weuiArrowOutlined0"
                        transform="rotate(-180 5.02 9.505)"
                    ></use>
                </svg>
            </button>
        </div>
    );
}
