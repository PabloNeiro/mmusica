import styled from 'styled-components';

export const NavBarTypography = styled.h1<{
  flexGrow?: number;
  marginRight?: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #95785c;
  margin-right: 2em;
  flex-grow: ${(props) => props.flexGrow};
  margin-right: ${(props) => props.marginRight};
`;

export const ImgContainer = styled.img`
  &:hover {
    cursor: pointer;
  }
  width: 70px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const ImgContainerMobile = styled.img`
  &:hover {
    cursor: pointer;
  }
  width: 170vw;
`;

export const LinkContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  font-size: 17px;
`;

export const ListItemText = styled.h1<{
  color: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const ListItemsContainer = styled.div`
  margin-left: 1em;
  margin-top: -10px;
`;

export const ListContainer = styled.div`
  margin-left: 20px;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
`;
