import Image from "next/image";
import React from "react";

export default function JudgeNotification(props) {
  return (
    <li className="bg-[#010A39] h-[6rem] my-8 flex items-center text-white text-2xl rounded-3xl gap-8">
      <Image />
      <h1> YOU HAVE BEE CHOSEN TO JUDGE FOR {props.name} AND WELELA</h1>
    </li>
  );
}
