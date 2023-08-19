import React from "react";
import { Movie } from "../hooks/useListMovies";

interface Props {
  movie: Movie;
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const SearchSuggestion = ({ movie, handleClick }: Props) => {


  return (
    <li
      className={"bg-yellow-200 py-2 px-6 m-4 rounded-full hover:scale-105 hover:transition hover:ease-in-out hover:cursor-pointer"}
      onClick={handleClick}
      key={movie.id}>{movie.title}</li>);
};

export default SearchSuggestion;
