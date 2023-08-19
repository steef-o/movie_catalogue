import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import Popcorn from "../assets/img/popcorn.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={"bg-amber-300"}>
      <div className={"max-w-[1200px] flex mx-auto py-4"}>
        <img
          src={Popcorn}
          className={"max-h-12 hover:cursor-pointer"}
          alt={"logo"}
          onClick={() => navigate("/")}
        />
        <h2
          className={"font-bold mt-4 ml-6 text-xl hover:cursor-pointer"}
          onClick={() => navigate("/")}
        >
          MOVIE CATALOGUE
        </h2>
        <MagnifyingGlass
          size={"32"}
          className={"ml-auto mt-2 hover:cursor-pointer"}
          onClick={() => navigate("/search")}
        />
      </div>
    </div>
  );
};

export default Header;
