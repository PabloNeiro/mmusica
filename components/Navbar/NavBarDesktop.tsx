import { AppBar, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ImgContainer, LinkContainer, LogoContainer, NavBarTypography } from './navBarStyles';

interface Props {
  landing?: boolean;
}

export default function NavBarDesktop({ landing }: Props) {
  const router = useRouter();
  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <AppBar position='fixed' color='default' component='div'>
      <Toolbar>
        <LogoContainer>
          <Link to='home' smooth onClick={() => handleButtonClick('/')}>
            <ImgContainer src='https://marilmusica.com/wp-content/uploads/2023/03/logo-posit.png'></ImgContainer>
          </Link>
        </LogoContainer>
        {/* <RoutesDropdown landing={landing} /> */}
        <NavBarTypography>
          <LinkContainer onClick={() => handleButtonClick('/productos')}>TENDA</LinkContainer>
        </NavBarTypography>
        <NavBarTypography>
          <LinkContainer onClick={() => handleButtonClick('/nos')}>NÓS</LinkContainer>
        </NavBarTypography>
        <NavBarTypography>
          <LinkContainer onClick={() => handleButtonClick('/contacto')}>CONTACTO</LinkContainer>
        </NavBarTypography>
        <NavBarTypography>
          <LinkContainer>GALEGO</LinkContainer>
        </NavBarTypography>
        <NavBarTypography>
          <LinkContainer> - - iconos - - </LinkContainer>
        </NavBarTypography>
      </Toolbar>
    </AppBar>
  );
}

const LogoHumanidadContainer = styled.img`
  height: 8vh;
  width: 4vw;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const CulturaContainer = styled.img`
  width: 7vw;
  margin-bottom: 2vh;
  margin-left: 3vw;
`;
