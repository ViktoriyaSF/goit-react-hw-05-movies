import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieCast, IMG_url } from '../service/api-movies';
import avatar from '../img/avatar.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await fetchMovieCast(movieId);
      setCast(cast);
    };
    getCast();
  }, [movieId]);

  // console.log(cast);

  // useEffect(() => {
  //   const getCast = async () => {
  //     try {
  //       const { cast } = await fetchMovieCast(movieId);
  //       setCast(cast);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getCast();
  // }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      {cast.length === 0 ? (
        <p>This movie is not found</p>
      ) : (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                <img
                  src={
                    actor.profile_path
                      ? IMG_url + 'w200' + actor.profile_path
                      : avatar
                  }
                  width="200"
                  height="300"
                  alt={actor.name}
                ></img>
                <p> {actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
