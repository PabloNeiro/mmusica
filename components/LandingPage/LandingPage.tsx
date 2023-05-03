import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useScreenSize } from '@hooks/useScreenSize';
import NavBarDesktop from '@components/Navbar/NavBarDesktop';
import LinearProgress from '@mui/material/LinearProgress';

export default function LandingPage() {
  const { isDesktop, isMobile, isTablet } = useScreenSize();

  return !isDesktop && !isMobile && !isTablet ? (
    <Box sx={{ width: '100%', marginTop: '50vh' }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : (
    <>
      {isDesktop ? (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <NavBarDesktop landing />
          <Box sx={{ marginTop: 50, marginLeft: 10 }}>
            <h1>Páxina de inicio</h1>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
