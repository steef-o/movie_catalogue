import React, { useMemo, useState } from "react";

import MovieList from "../components/MovieList";
import SearchSuggestion from "../components/SearchSuggestion";
import { useListMovies } from "../hooks/useListMovies";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data: movies } = useListMovies();

  const filteredList = useMemo(() => {
    if (!movies) return [];
    return movies.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const MAX_ELEMENTS_TO_SHOW = 4;

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSearch(e.currentTarget.textContent ?? "");
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 font-bold">SEARCH</h1>
      <input
        className={"border border-gray-400 rounded-md p-2 w-full mb-8 mt-4"}
        type={"search"}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <h2 className={"font-bold text-2xl text-center my-4"}>SUGGESTIONS</h2>
      <div className={"flex justify-center"}>
        <ul>
          {movies?.movies
            .slice(0, MAX_ELEMENTS_TO_SHOW)
            .map((movie) => (
              <SearchSuggestion movie={movie} handleClick={handleClick} key={movie.id} />
            ))}
        </ul>
        <ul>
          {movies?.movies
            .slice(MAX_ELEMENTS_TO_SHOW, MAX_ELEMENTS_TO_SHOW * 2)
            .map((movie) => (
              <SearchSuggestion movie={movie} handleClick={handleClick} key={movie.id} />
            ))}
        </ul>
        <ul>
          {movies?.movies
            .slice(MAX_ELEMENTS_TO_SHOW * 2, MAX_ELEMENTS_TO_SHOW * 3)
            .map((movie) => (
              <SearchSuggestion movie={movie} handleClick={handleClick} key={movie.id} />
            ))}
        </ul>
      </div>
      <MovieList title="SEARCH RESULTS" movies={filteredList} />
    </div>
  );
};

export default Search;
