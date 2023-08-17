import { useQuery } from "@tanstack/react-query";

export const useListMovies = () => {
  return useQuery(["movies"], async () => {
    return  await fetch(
      "https://gist.githubusercontent.com/steef-o/fd4ded604b9e5fba5a654ff9db639b2a/raw/0ab7d09418c3537394d5aba079b2509b779a5d00/movies",
    ).then((res) => res.json())})}
