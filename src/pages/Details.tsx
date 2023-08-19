import React, { useEffect, useMemo } from "react";
import { useListMovies } from "../hooks/useListMovies";
import { useParams } from "react-router-dom";
import DetailsField from "./DetailsField";


const Details = () => {
  const { id } = useParams();
  const { data: movies, isSuccess } = useListMovies();

  const movie = useMemo(() => {
    if(!isSuccess || !movies) return;
    return movies.movies.find((movie: any) => movie.id == Number(id));

    },[movies,id, isSuccess]
  )

  console.log(movie);
  return (
    <>
      {movie && (
        <div className={""}>
          <h1 className={"text-2xl font-bold mb-8"}>{movie.title}</h1>
        <img src={movie.posterUrl} className={"mx-auto w-4/12 mb-8"} />
          <div className={"bg-gray-100 min-h-[10rem] p-8"}>
            <DetailsField label="Title" content={movie.title} />
            <DetailsField label="Runtime" content={`${movie.runtime} min`} />
            <DetailsField label="Year" content={movie.year} />
            <DetailsField label="Plot" content={movie.plot} />
          </div>
      </div>
      )}
    </>
  );
};

export default Details;
