import Header from "../components/Header";
import { useListMovies } from "../hooks/useListMovies";
import MovieList from "../components/MovieList";

const Root = () => {
const {data: movies, isSuccess} = useListMovies();
  return(
    <>
    <h1 className="text-3xl font-bold mb-6">OUR MOVIES</h1>
      {isSuccess && (
        <>
        <MovieList title="" movies={movies.movies} />
        <MovieList title="Drama" movies={movies.movies.filter((movie: any) => movie.genres.includes("Drama")) } />
        <MovieList title="Family" movies={movies.movies.filter((movie: any) => movie.genres.includes("Family")) } />
        <MovieList title="Adventure" movies={movies.movies.filter((movie: any) => movie.genres.includes("Adventure")) } />
        <MovieList title="Thriller" movies={movies.movies.filter((movie: any) => movie.genres.includes("Thriller")) } />
        <MovieList title="Sci-Fi" movies={movies.movies.filter((movie: any) => movie.genres.includes("Sci-Fi")) } />
        <MovieList title="Animation" movies={movies.movies.filter((movie: any) => movie.genres.includes("Animation")) } />
      </>)}
    </>
  );
}

export default Root;
