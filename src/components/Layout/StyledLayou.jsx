import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 30px;
  height: 60px;
  text-align: center;
  box-shadow: 0px 4px 4px #d3d3d3;
  background: rgb(174, 238, 203);
  background: radial-gradient(
    circle,
    rgba(174, 238, 203, 0.7455357142857143) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  nav {
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: green;
    text-decoration: underline;
  }
`;
