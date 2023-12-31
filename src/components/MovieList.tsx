import MovieItem from "./MovieItem";
import { Movie } from "../hooks/useListMovies";

interface Props {
  title: string;
  movies: Movie[];
}

const MAX_ELEMENTS_TO_SHOW = 5;

const MovieList = ({ title, movies }: Props) => (
  <>
    <h2 className={"text-2xl mt-20 mb-4 font-bold px-10 md:px-0"}>{title}</h2>
    <div className={"flex flex-col md:flex-row px-10 md:px-0"}>
      {movies.slice(0, MAX_ELEMENTS_TO_SHOW).map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  </>
);

export default MovieList;
