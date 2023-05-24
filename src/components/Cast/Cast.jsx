import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieCast, IMG_url } from '../../service/api-movies';
import avatar from '../../img/avatar.jpg';

import {
  CastHeader,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  Wrapper,
} from './StyledCast';

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
    <Wrapper>
      {cast.length !== 0 && <CastHeader>Cast</CastHeader>}
      {cast.length === 0 ? (
        <h2>This movie is not found</h2>
      ) : (
        <CastList>
          {cast.map(actor => {
            return (
              <CastListItem key={actor.cast_id}>
                <img
                  src={
                    actor.profile_path
                      ? IMG_url + 'w200' + actor.profile_path
                      : avatar
                  }
                  alt={actor.name}
                ></img>
                <CastInfo>
                  <CastName> {actor.name}</CastName>
                  <p>Character: {actor.character}</p>
                </CastInfo>
              </CastListItem>
            );
          })}
        </CastList>
      )}
    </Wrapper>
  );
};

export default Cast;
