import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title}/>
      <div className="movie_info">
        <h2>
          <Link to={`/movie/${id}`}>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 150)}...` : summary}</p>
        <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;