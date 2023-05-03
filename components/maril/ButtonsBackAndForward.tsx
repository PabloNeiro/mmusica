import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Items } from 'types';

export default function ButtonsBackAndForward(props: any) {
  const { sameItems, id, articulo } = props;
  const router = useRouter();

  const [nextItem, setNextItem] = useState<Items[]>([]);
  const [backItem, setBackItem] = useState<Items[]>([]);

  useEffect(() => {
    const next = sameItems?.filter((item: any) => Number(item.id) === Number(id) + 1);
    setNextItem(next);
    const back = sameItems?.filter((item: any) => Number(item.id) === Number(id) - 1);
    setBackItem(back);
  }, [id]);
  return (
    <Grid item xs={12}>
      <ButtonsContainer>
        {backItem.length !== 0 && (
          <Button
            variant='outlined'
            sx={{ marginRight: 5 }}
            onClick={() => router.push(`/articulo/${Number(id) - 1}`)}
          >
            Ver anterior: {backItem[0].name}
          </Button>
        )}
        {nextItem.length !== 0 && (
          <Button variant='outlined' onClick={() => router.push(`/articulo/${Number(id) + 1}`)}>
            Ver seguinte: {nextItem[0].name}
          </Button>
        )}
      </ButtonsContainer>
    </Grid>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  // justify-content: space-between;
`;
