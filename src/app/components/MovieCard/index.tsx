import { Movie } from "@/app/types/movie";
import StartRating from "../StarRating";
import "./index.scss";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-infos">
        <p className="movie-title">{movie.title}</p>

        {movie.vote_average > 0 && <StartRating rating={movie.vote_average} />}
        <div className="hidden-content">
          {movie.overview && (
            <p className="description">
              {movie.overview.length > 125
                ? `${movie.overview.substring(0, 125)}...`
                : movie.overview}
            </p>
          )}
          <button className="btn-default">Ver mais</button>
        </div>
      </div>
    </li>
  );
}
