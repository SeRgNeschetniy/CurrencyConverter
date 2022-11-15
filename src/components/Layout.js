import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavBar from './NavBar/NavBar';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <NavBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}
