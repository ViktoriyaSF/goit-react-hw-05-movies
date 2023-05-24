import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 15px;
`;

export const CastHeader = styled.h2`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;

export const CastList = styled.ul`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CastListItem = styled.li`
  width: calc((100% - 3 * 20px) / 4);
  display: flex;
  flex-wrap: wrap;
  /* height: 200px; */
  word-wrap: break-word;

  img {
    height: 200px;
  }
`;

export const CastInfo = styled.div`
  margin-top: 8px;
  max-width: 220px;
`;

export const CastName = styled.h4`
  margin-bottom: 5px;
`;
