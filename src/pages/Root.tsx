import Header from "../components/Header";
import { useListMovies } from "../hooks/useListMovies";

const Root = () => {
const {data: movies} = useListMovies();
  console.log(movies);
  return(
    <h1 className="text-3xl font-bold">OUR MOVIES</h1>

  );
}

export default Root;
