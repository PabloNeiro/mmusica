import { Breadcrumbs, Grid, Typography, Link } from '@mui/material';
import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Cabecera() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const dinamicURL = router.asPath;
  useEffect(() => {
    dinamicURL.split('/')[2] === 'vento'
      ? setFirstName('Vento')
      : dinamicURL.split('/')[2] === 'percusion'
      ? setFirstName('Percusión')
      : dinamicURL.split('/')[2] === 'corda'
      ? setFirstName('Corda')
      : dinamicURL.split('/')[2] === 'libros'
      ? setFirstName('Libros')
      : dinamicURL.split('/')[2] === 'complementos'
      ? setFirstName('Complementos')
      : setFirstName('Accesorios');
  }, [dinamicURL]);

  useEffect(() => {
    dinamicURL.split('/')[3] === 'gaita'
      ? setSecondName('Gaita')
      : dinamicURL.split('/')[3] === 'punteiro'
      ? setSecondName('Punteiros')
      : dinamicURL.split('/')[3] === 'palletas'
      ? setSecondName('Palletas e pallóns')
      : dinamicURL.split('/')[3] === 'frautas'
      ? setSecondName('Pito pastoril e frautas')
      : dinamicURL.split('/')[3] === 'tambores'
      ? setSecondName('Tambores e bombos')
      : dinamicURL.split('/')[3] === 'pandeiretas'
      ? setSecondName('Pandeiretas, pandeiras e pandeiros')
      : dinamicURL.split('/')[3] === 'baquetas'
      ? setSecondName('Baquetas e mazas')
      : dinamicURL.split('/')[3] === 'ukelele'
      ? setSecondName('Ukeleles')
      : dinamicURL.split('/')[3] === 'gaita-percusion'
      ? setSecondName('Gaita e percusión')
      : dinamicURL.split('/')[3] === 'infantil'
      ? setSecondName('Infantís')
      : dinamicURL.split('/')[3] === 'vestidos'
      ? setSecondName('Vestidos e farrapos para gaita')
      : dinamicURL.split('/')[3] === 'fundas-gaita'
      ? setSecondName('Fundas e estoxos para gaita')
      : dinamicURL.split('/')[3] === 'fundas-tambor'
      ? setSecondName('Fundas e estoxos para tambor')
      : dinamicURL.split('/')[3] === 'fundas pandeireta'
      ? setSecondName('Fundas para pandeireta')
      : setSecondName('Atrís');
  }, [dinamicURL]);
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      sx={{ cursor: 'pointer' }}
      onClick={() => router.push('/productos')}
    >
      TENDA
    </Link>,
    dinamicURL.split('/')[2] !== undefined && (
      <Link
        underline='hover'
        key='2'
        color='inherit'
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          router.push(`/productos/${dinamicURL.split('/')[2]}`);
        }}
      >
        {firstName}
      </Link>
    ),
    dinamicURL.split('/')[3] !== undefined && (
      <Typography key='3' color='text.primary'>
        {secondName}
      </Typography>
    ),
  ];
  return (
    <Grid item xs={12} sx={{ display: 'inline-block', direction: 'column' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
        {breadcrumbs}
      </Breadcrumbs>
    </Grid>
  );
}

export const HeaderContainer = styled.div`
  margin-bottom: 3px;
  display: inline;
`;

const CategoryText = styled.h1`
  font-size: 30px;
`;

const CategoryText2 = styled.h1`
  font-size: 20px;
`;

const CategoryText3 = styled.h1`
  font-size: 10px;
`;
