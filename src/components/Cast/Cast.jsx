import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      const { cast } = await fetchMovieCast(movieId);
      setCast(cast);
      setIsLoading(false);
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
      {isLoading && <Loader />}
      {!cast && <h2>This movie is not found</h2>}
      {cast.length !== 0 && <CastHeader>Cast</CastHeader>}
      {cast.length !== 0 && (
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
