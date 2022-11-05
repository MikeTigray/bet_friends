import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <div className="bg-black h-screen flex flex-col justify-between">
        <Navigation />
        <div className="">
          <h1 className="text-transparent text-start self-end inline-block bg-clip-text bg-gradient-to-r from-blue-600 ml-[10rem] indigo-700 to-red-500 text-[7rem] text-center font-montaga mt-[10rem] leading-[100px]">
            BET
            <br /> <span className="ml-[5rem]">FRIENDS</span>
          </h1>
        </div>
        <button
          type="button"
          className="text-red-500 self-center p-[1rem] text-center rotate-90 hover:translate-y-[-3px] bg-transparent hover:shadow-bright mb-[1rem]"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
