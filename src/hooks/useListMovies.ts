import { useQuery } from "@tanstack/react-query";

export const useListMovies = () => {
  return useQuery(["movies"], async () => {
    return  await fetch(
      "https://gist.githubusercontent.com/steef-o/fd4ded604b9e5fba5a654ff9db639b2a/raw/df640f60e1432b3b0b0f476e638f738643ef507e/movies",
    ).then((res) => res.json())})}


const options = {method: 'GET', headers: {accept: 'application/json', "Authorization": "Bearer ACCESS_TOKEN"}};