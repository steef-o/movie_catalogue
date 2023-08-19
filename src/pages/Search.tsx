import React, { useMemo, useState } from "react";
import { useListMovies } from "../hooks/useListMovies";
import MovieList from "../components/MovieList";

const Search = () => {
  const [search, setSearch] = useState("")
  const {data:movies} = useListMovies()


  const filteredList = useMemo(() => {
    if(!movies) return [];
    return movies.movies.filter((movie: any) => movie.title.toLowerCase().includes(search.toLowerCase()))
  }, [search])


  return (
    <div>
      <h1 className="text-3xl font-bold">SEARCH</h1>
      <input
        className={"border border-gray-400 rounded-md p-2 w-full mb-8 mt-4"}
        type={"search"}
        onChange={(e) => setSearch(e.target.value)}
        value={search}/>
      <MovieList title="Search results" movies={filteredList} />
    </div>
  );
};

export default Search;
