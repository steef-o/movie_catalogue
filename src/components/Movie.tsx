import React from "react";

interface Props {
  movie: any
}

const Movie = ({movie}:Props) => {
  return (
    <div>
      <img src={movie.posterUrl} className={"w-10/12"} />
      <p className={"mt-6"}>{movie.title}</p>
    </div>
  );
};

export default Movie;
