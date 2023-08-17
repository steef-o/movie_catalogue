import React, { useEffect, useMemo } from "react";
import { useListMovies } from "../hooks/useListMovies";
import { useParams } from "react-router-dom";


const Details = () => {
  const { id } = useParams();
  const { data: movies, isSuccess } = useListMovies();

  const movie = useMemo(() => {
    if(!isSuccess || !movies) return;
    return movies.movies.find((movie: unknown) => movie.id == Number(id));

    },[movies,id, isSuccess]
  )

  console.log(movie);
  return (
    <>
      {movie && (
        <div className={""}>
        <img src={movie.posterUrl} className={"mx-auto w-4/12"} />
          <div className={"bg-gray flex"}>
            <p>{movie.title}</p>
            <p>{movie.runtime}</p>
            <p>{movie.year}</p>
            <p>{movie.plot}</p>
          </div>
      </div>
      )}
    </>
  );
};

export default Details;
