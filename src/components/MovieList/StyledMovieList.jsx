import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const List = styled.ul`
  margin: 20px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover,
  &:focus {
    transform: scale(1.025);
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: #1c0672;
    border-bottom: 2px solid #1c0672;
    transform: scale(1.025);
  }
`;
