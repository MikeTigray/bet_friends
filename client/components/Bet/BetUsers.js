import React from "react";
import Image from "next/image";
export default function BetUsers(props) {
  return (
    <li className="flex flex-col">
      {/* <Image
        src={require(props.img)}
        alt="Picture of the author"
        width={50}
        height={50}
      /> */}
      <h1>{props.name}</h1>
    </li>
  );
}
