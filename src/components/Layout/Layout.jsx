import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledHeader, StyledNavLink } from './StyledLayou';
import { StyledLoader } from 'components/Loader/StyledLoader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<StyledLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
