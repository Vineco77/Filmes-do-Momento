"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.scss";
import MovieCard from "../MovieCard";
import { Movie } from "@/app/types/movie";
import ReactLoading from "react-loading";

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "22f348f34cb843c1b183b04015795019",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <ReactLoading type="spin" color="#6046ff" height={"5%"} width={"5%"} />
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
