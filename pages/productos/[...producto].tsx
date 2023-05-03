import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
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

export default function InterestingSitesPage() {
  const router = useRouter();
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  const dinamicURL = router.asPath;
  const [sites, setSites] = useState<Items[]>([]);
  const [sitesToShow, setSitesToShow] = useState<Items[]>([]);

  const handleButtonClick = (url: string) => {
    router.push('/productos/' + url);
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(1);
  }, []);

  useEffect(() => {
    if (dinamicURL.split('/')[3] !== undefined) {
      setSitesToShow(MARILITEMS.filter((item) => item.subCategory === dinamicURL.split('/')[3]));
    }
    if (dinamicURL.split('/')[3] === undefined && dinamicURL.split('/')[2] !== undefined) {
      setSitesToShow(MARILITEMS.filter((item) => item.category === dinamicURL.split('/')[2]));
    }
    if (dinamicURL.split('/')[2] === undefined) {
      setSitesToShow(MARILITEMS);
    }
  }, [dinamicURL]);

  return !isDesktop && !isMobile && !isTablet ? (
    <Box sx={{ width: '100%', marginTop: '50vh' }}>
      <LinearProgress />
      <LinearProgress />
    </Box>
  ) : isDesktop ? (
    <>
      <NavBarDesktop />
      <Grid sx={{ paddingLeft: '10vh', paddingRight: '10vh' }} key={key}>
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
            <Cabecera />
            {sitesToShow.length !== 0 &&
              sitesToShow.map((site, index) => (
                <Grid item xs={4} key={index} style={{ display: 'flex', alignItems: 'stretch' }}>
                  <Card onClick={() => router.push(`/articulo/${site.id}`)}>
                    <CardActionArea>
                      <CardMedia sx={{ minHeight: '30vh', maxHeight: '30vh', minWidth: '30vw' }}>
                        <ImageContainer src={site.image} />
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                          {site.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          <IntroductionContainer>{site.prize} €</IntroductionContainer>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
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
  display: flex;
  justify-content: center;
  min-height: 30vh;
  max-height: 30vh;
  min-width: 20vw;
`;
