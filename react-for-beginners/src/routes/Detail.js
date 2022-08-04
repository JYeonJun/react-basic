import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieInfo
          description={movie.description_full}
          downCount={movie.download_count}
          genre={movie.genres}
          coverImg={movie.medium_cover_image}
          title={movie.title_long}
        />
      )}
    </div>
  );
}

export default Detail;
