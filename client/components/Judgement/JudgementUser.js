import Image from "next/image";
import React from "react";

export default function JudgementUser(props) {
  return (
    <div className="flex flex-col items-center">
      {/* <Image src={require(props.img)} />  */}
      <h1>{props.name}</h1>
    </div>
  );
}
