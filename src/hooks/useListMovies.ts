import { useQuery } from "@tanstack/react-query";
import { z } from "zod";



const genreSchema = z.string()

const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  year: z.string(),
  runtime: z.string(),
  genres: z.array(z.string()),
  director: z.string(),
  actors: z.string(),
  plot: z.string(),
  posterUrl: z.string(),
})

const responseSchema = z.object({
  genres: z.array(genreSchema),
  movies: z.array(movieSchema),
})

export type Movie = z.infer<typeof movieSchema>

export const useListMovies = () => {
  return useQuery(["movies"], async () => {
    return  await fetch(
      "https://gist.githubusercontent.com/steef-o/fd4ded604b9e5fba5a654ff9db639b2a/raw/df640f60e1432b3b0b0f476e638f738643ef507e/movies",
    ).then((res) => res.json().then((data) => responseSchema.parse(data)))})}


const options = {method: 'GET', headers: {accept: 'application/json', "Authorization": "Bearer ACCESS_TOKEN"}};