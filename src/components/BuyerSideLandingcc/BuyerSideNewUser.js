import { useState } from 'react';

import {
  Box,
  Card,
  Typography,
  Grid,
  CardActionArea,
  Divider,
  Button,
  TextField,
  Stack,
  CardContent
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { MHidden } from '../@material-extend';

import { varFadeIn, MotionInView, varFadeInDown } from '../animate';
import BuyerSideLargeImgCarousel from './BuyerSideLargeImgCarousel';

import BuyerSideNewUserCarousel from './BuyerSideNewUserCarousel';
import BuyerSideSignUpDialog from './BuyerSideSignUpDialog';

const subcatImages = [
  { title: 'test', image: '/static/home/product_img_1.jpg' },
  { title: 'test', image: '/static/home/product_img_2.jpg' }
];

const subcatNames = [{ title: 'Clothes' }, { title: 'Interior' }];

export default function BuyerSideNewUser() {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        backgroundColor: theme.palette.grey[900],
        padding: theme.spacing(1),
        [theme.breakpoints.down('lg')]: {
          paddingLeft: theme.spacing(4)
        }
      }}
    >
      <Grid item xs={12} md={6}>
        <MotionInView variants={varFadeInDown}>
          <Grid
            container
            spacing={6}
            sx={{
              mb: theme.spacing(5),
              mt: theme.spacing(2),

              [theme.breakpoints.up('lg')]: {
                marginLeft: theme.spacing(3),
                mt: theme.spacing(2)
              }
            }}
          >
            <Grid item xs={12}>
              <BuyerSideNewUserCarousel productImages={subcatNames} />
            </Grid>

            <Grid item xs={10} md={6}>
              <Stack direction="column" justifyContent="space-evenly" alignItems="flex-start">
                <Typography variant="h5" color={theme.palette.common.white}>
                  Personalize your experience
                </Typography>

                <Button
                  onClick={handleOpenDialog}
                  fullWidth
                  variant="contained"
                  sx={{ marginTop: theme.spacing(3) }}
                  startIcon={<PersonIcon />}
                >
                  Register user
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MotionInView>
      </Grid>

      <Grid item xs={12} md={6}>
        <MHidden width="lgDown">
          <BuyerSideLargeImgCarousel productImages={subcatImages} />
        </MHidden>
      </Grid>

      <BuyerSideSignUpDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Grid>
  );
}
