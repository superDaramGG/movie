import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// import { Link } from "react-router-dom";

function Movie({ title, year, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      {/* <Link
        to={{
          pathname: "./movie-detail",
          state: { year, title, summary, poster, genres },
        }}
      > */}
      <img src={poster} alt={title} title={title} />
      <div className="movieData">
        <h3 className="movieTitle">{title}</h3>
        <h5 className="movieYear">{year}</h5>
        <h5 className="movieRating">{rating}점</h5>
        <ul className="movieGenres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movieGenre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movieSummay">{summary.slice(0, 180)}</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
