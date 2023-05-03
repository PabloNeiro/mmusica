import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface ISidebarProps {
  categorie: any;
}

export default function Items(props: ISidebarProps) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  const { categorie } = props;

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} component='nav' disablePadding>
      <ListItemButton sx={{ marginLeft: 0, marginTop: 2 }} onClick={() => setOpenMenu(!openMenu)}>
        <CategoryText> · {categorie.name}</CategoryText>
        {categorie.subCategories.length > 0 && (
          <div>
            {openMenu ? <ExpandLess sx={{ color: '#95785c' }} /> : <ExpandMore sx={{ color: '#95785c' }} />}
          </div>
        )}
      </ListItemButton>
      {categorie.subCategories.length > 0 &&
        categorie.subCategories.map((item: any, index: number) => (
          <Grid marginLeft={2} key={index}>
            <Collapse in={openMenu} timeout='auto' unmountOnExit>
              <SubCategoryItemButton>
                <SubCategoryText onClick={() => router.push(`/productos/${item.category}/${item.url}`)}>
                  {item.name}
                </SubCategoryText>
              </SubCategoryItemButton>
            </Collapse>
          </Grid>
        ))}
    </List>
  );
}

const CategoryText = styled.h1`
  font-size: 20px;
  margin-top: 4px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #95785c;
`;

const SubCategoryText = styled.h1`
  font-size: 17px;
  margin-left: 20px;
  line-height: 15px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  margin-top: 2px;
  color: #95785c;
`;

const SubCategoryItemButton = styled.div`
  margin-left: 2px;
  cursor: pointer;
  padding: 2px;
  &:hover {
    background-color: #f1edea;
    padding: 2px;
  }
`;
