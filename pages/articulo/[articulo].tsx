import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Button,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import Filters from '@components/Filters/Filters';
import { useScreenSize } from '@hooks/useScreenSize';
import NavBarDesktop from '@components/Navbar/NavBarDesktop';
import styled from 'styled-components';
import { Items } from 'types';
import { MARILITEMS } from '@const/marilItems';
import Cabecera from '@components/Filters/Cabecera';
import ButtonsBackAndForward from '@components/maril/ButtonsBackAndForward';

export default function InterestingSitesPage() {
  const router = useRouter();
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const dinamicURL = router.asPath;
  const [sameItems, setSameItems] = useState<Items[]>([]);
  const [articulo, setArticulo] = useState<Items[]>([]);

  useEffect(() => {
    const result = MARILITEMS.filter((item) => item.id === dinamicURL.split('/')[2]);
    setArticulo(result);

    const articulosIguales = MARILITEMS.filter(
      (item) => item.category === result[0].category && item.subCategory === result[0].subCategory
    );

    setSameItems(articulosIguales);
  }, [dinamicURL]);

  return !isDesktop && !isMobile && !isTablet ? (
    <Box sx={{ width: '100%', marginTop: '50vh' }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : isDesktop ? (
    <>
      <NavBarDesktop />
      <Grid sx={{ paddingLeft: '10vh', paddingRight: '10vh' }}>
        <Grid
          container
          spacing={4}
          style={{
            marginTop: '6em',
            textOverflow: 'clip',
            paddingBottom: '200px',
          }}
        >
          <Grid container item xs={3} style={{ display: 'flex' }}>
            <FiltersContainer>
              <Filters />
            </FiltersContainer>
          </Grid>
          <Grid container spacing={4} item xs={9}>
            <Button
              variant='outlined'
              sx={{ marginTop: 5, marginLeft: 4 }}
              onClick={() => router.push(`/productos/${articulo[0].category}/${articulo[0].subCategory}`)}
            >
              Volver
            </Button>
            {articulo.length !== 0 && (
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'stretch' }}>
                <Grid item xs={2}>
                  <ImageContainer src={articulo[0].image} />
                </Grid>
                <Grid item xs={10}>
                  <TitleTypography>{articulo[0].name}</TitleTypography>
                  <PriceTypography>{articulo[0].prize} €</PriceTypography>
                  <PriceTypography>Características</PriceTypography>
                  <PriceTypography>Descripción</PriceTypography>
                  <PriceTypography>blablabla...</PriceTypography>
                  <PriceTypography>
                    <Button sx={{ marginTop: 10 }} variant='outlined'>
                      Engadir ó carriño
                    </Button>
                  </PriceTypography>
                </Grid>
              </Grid>
            )}
            <ButtonsBackAndForward sameItems={sameItems} id={dinamicURL.split('/')[2]} articulo={articulo} />
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    <div></div>
  );
}

const IntroductionContainer = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FiltersContainer = styled.div`
  position: fixed;
  width: 20vw;
`;

const ImageContainer = styled.img`
  max-width: 20vw;
  min-width: 20vw;
  max-height: 60vh;
  min-height: 60vh;
`;

const TitleTypography = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000;
  margin-left: 15vw;
`;

const PriceTypography = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: #95785c;
  margin-left: 15vw;
`;
