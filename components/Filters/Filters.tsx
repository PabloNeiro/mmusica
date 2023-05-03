import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { useScreenSize } from '@hooks/useScreenSize';
import { ListItemButton, useTheme } from '@mui/material';
import { ListContainer, ListItemIcon, ListItemText } from './filtersStyles';
import { CATEGORIES } from '@const/marilItems';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import Items from './Items';
import { useRouter } from 'next/router';

export default function Filters() {
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setKey(1);
  }, []);

  const { isDesktop } = useScreenSize();
  const theme = useTheme();

  return (
    <List
      key={key}
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        height: 'fit-content',
        border: isDesktop ? `2px solid ${theme.palette.secondary.main}` : '',
      }}
    >
      <ListItemButton onClick={() => router.push('/productos')}>
        {isDesktop && (
          <ListItemIcon>
            <AppsRoundedIcon color='primary' />
          </ListItemIcon>
        )}
        <ListItemText fontWeight='700' fontSize='20px' lineHeight='24px' color={theme.palette.primary.main}>
          OS NOSOS PRODUTOS
        </ListItemText>
      </ListItemButton>
      <ListContainer>
        {CATEGORIES.map((categorie, index) => {
          return <Items categorie={categorie} />;
        })}
      </ListContainer>
    </List>
  );
}
