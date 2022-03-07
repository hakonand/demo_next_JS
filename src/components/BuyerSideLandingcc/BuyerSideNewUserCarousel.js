import Slider from 'react-slick';
import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import { CarouselControlsPaging2 } from '../carousel/controls';
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '& .slick-slide': {
    float: theme.direction === 'rtl' ? 'right' : 'left',
    '&:focus': { outline: 'none' }
  }
}));

// ----------------------------------------------------------------------

export default function BuyerSideNewUserCarousel({ productImages, ...other }) {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settings1 = {
    speed: 1200,
    autoplaySpeed: 7000,
    dots: true,
    autoplay: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselControlsPaging2({
      sx: {
        mt: theme.spacing(2),
        mb: theme.spacing(1),

        [theme.breakpoints.up('lg')]: {
          mt: theme.spacing(1),
          mb: theme.spacing(1)
        },
        justifyContent: 'flex-start'
      }
    }),
    beforeChange: (current, next) => setCurrentIndex(next)
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, [currentIndex]);

  return (
    <RootStyle {...other}>
      <Grid
        container
        sx={{
          [theme.breakpoints.up('lg')]: {
            paddingTop: theme.spacing(5)
          }
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" color={theme.palette.common.white}>
            {' '}
            Explore{' '}
          </Typography>

          <Slider {...settings1} asNavFor={nav2} ref={slider1}>
            {productImages.map((item, index) => (
              <Typography key={index} color="primary" variant="h1">
                {item.title}
              </Typography>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12} alignItems="flex-start">
          <Typography variant="h2" color={theme.palette.common.white}>
            From X local stores
          </Typography>
        </Grid>
      </Grid>
    </RootStyle>
  );
}

// <Box sx={{ cursor: 'zoom-in', paddingTop: '100%', position: 'relative' }}>
