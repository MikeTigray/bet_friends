export default function Navigation() {
  return (
    <div className="border-b-2  border-secondary">
      <nav className="flex justify-between text-white px-[2rem] py-[.7rem]">
        <p className="text-black text-[40px] font-didot">B</p>
        <ul className="flex items-center gap-[.7rem]">
          <li className="">
            <button className="text-black">Sign In</button>
          </li>
          <div className="h-[1.7rem] border-r-2  border-black"></div>
          <li>
            <button className="text-black">Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
