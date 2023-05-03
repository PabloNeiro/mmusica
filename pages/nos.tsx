import NavBarDesktop from '@components/Navbar/NavBarDesktop';
import { Box, CssBaseline } from '@mui/material';

export default function Nos() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBarDesktop landing />
      <Box sx={{ marginTop: 50, marginLeft: 10 }}>
        <h1>Páxina Nós</h1>
      </Box>
    </Box>
  );
}
