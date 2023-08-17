import React from "react";
import Popcorn from "../assets/img/popcorn.svg";
import {MagnifyingGlass} from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className={"bg-amber-300"}>
      <div className={"max-w-[1200px] flex mx-auto py-4"}>
        <img src={Popcorn} className={"max-h-12"} alt={"logo"}/>
        <h2 className={"font-bold mt-3 ml-6 text-xl"}>MOVIE CATALOGUE</h2>
        <MagnifyingGlass size={"32"} className={"ml-auto mt-2"}/>
      </div>
    </div>
  );
};

export default Header;
