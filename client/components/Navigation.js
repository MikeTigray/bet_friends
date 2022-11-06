import Link from "next/link";

export default function Navigation() {
  return (
    <div className="border-b-2  border-secondary">
      <nav className="flex justify-between text-white px-[2rem] py-[.7rem]">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-indigo-600 to-blue-60 text-[40px] font-montaga">
          B
        </p>
        <ul className="flex items-center gap-[.7rem]">
          <li className="">
            <button className="text-white border-2 rounded-md shadow-signin py-[.3rem]  px-[1.8rem]">
              Sign-In
            </button>
          </li>
          <div className="h-[1.7rem] border-r-2  border-white"></div>
          <li>
            <button className="text-black rounded-md py-[.3rem]  px-[1.8rem] bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 ">
              Sign-Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
