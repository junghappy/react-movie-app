import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await(
      await fetch(`https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description_intro}</p>
      <a href={movie.url} target="_blank">영화 상세보기</a>
    </div>
  );
}

export default Detail;