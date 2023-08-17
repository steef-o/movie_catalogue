import Header from "../components/Header";
import { useListMovies } from "../hooks/useListMovies";
import MovieList from "../components/MovieList";

const Root = () => {
const {data: movies, isSuccess} = useListMovies();
  console.log(movies);
  return(
    <>
    <h1 className="text-3xl font-bold mb-6">OUR MOVIES</h1>
      {isSuccess && <MovieList title="" movies={movies.movies} />}
    </>
  );
}

export default Root;
