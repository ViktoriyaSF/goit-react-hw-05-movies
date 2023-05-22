import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieCast, IMG_url } from 'service/api-movies';
import noFilm from '../img/noFilm.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { results } = await getMovieCast(movieId);
      console.log(results);
      setMovieCast(results);
    };

    getCast();
  }, [movieId]);
  console.log(movieCast);

  return (
    <>
      <div>Cast {movieId}</div>
      {movieCast.length === 0 ? (
        <div>This movie is not found</div>
      ) : (
        <ul>
          {movieCast.map(cast => {
            return (
              <li key={cast.cast_id}>
                <img
                  src={
                    cast.profile_path
                      ? IMG_url + '200w' + cast.profile_path
                      : noFilm
                  }
                  width="200"
                  height="450"
                  alt={cast.name}
                ></img>
                <p> {cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
