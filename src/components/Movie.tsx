import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: any
}

const Movie = ({movie}:Props) => {
  const navigate = useNavigate()
  return (
    <div className={"hover:cursor-pointer hover:transition hover:scale-105 hover:ease-in-out"}>
      <img src={movie.posterUrl} className={"w-10/12"} onClick={() => navigate(`/movie/${movie.id}`)}/>
      <p className={"mt-6"}>{movie.title}</p>
    </div>
  );
};

export default Movie;
