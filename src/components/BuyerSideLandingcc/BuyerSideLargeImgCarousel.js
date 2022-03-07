import Slider from 'react-slick'

import { useState, useRef, useEffect } from 'react'
// material
import { useTheme, styled } from '@mui/material/styles'
import { Box, Typography, Grid } from '@mui/material'
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	'& .slick-slide': {
		float: theme.direction === 'rtl' ? 'right' : 'left',
		'&:focus': { outline: 'none' },
	},
}))

function CarouselItem({ item }) {
	const { image, title } = item

	return (
		<Box
			component='img'
			alt={title}
			src={image}
			sx={{ width: '100%', height: 540, objectFit: 'cover' }}
		/>
	)
}

// ----------------------------------------------------------------------

export default function BuyerSideLargeImgCarousel({ productImages, ...other }) {
	const theme = useTheme()
	const [selectedImage, setSelectedImage] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [nav1, setNav1] = useState(null)
	const [nav2, setNav2] = useState(null)
	const slider1 = useRef(null)
	const slider2 = useRef(null)

	const settings1 = {
		speed: 1100,
		autoplaySpeed: 7000,
		dots: false,
		autoplay: true,
		fade: true,
		arrows: false,
		slidesToShow: 1,
		draggable: false,
		slidesToScroll: 1,
		adaptiveHeight: true,

		beforeChange: (current, next) => setCurrentIndex(next),
	}

	useEffect(() => {
		setNav1(slider1.current)
		setNav2(slider2.current)
	}, [currentIndex])

	return (
		<RootStyle {...other}>
			<Grid
				container
				sx={{
					[theme.breakpoints.up('lg')]: {
						paddingTop: theme.spacing(8),
					},
				}}
			>
				<Grid item xs={12}>
					<Slider {...settings1} asNavFor={nav2} ref={slider1}>
						{productImages.map((item, index) => (
							<div sx={{ pt: '100%' }} key={index}>
								<CarouselItem
									key={item}
									item={item}
									sx={{
										top: 0,
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										position: 'absolute',
										mb: theme.spacing(1),
									}}
								/>
							</div>
						))}
					</Slider>
				</Grid>
			</Grid>
		</RootStyle>
	)
}

// <Box sx={{ cursor: 'zoom-in', paddingTop: '100%', position: 'relative' }}>
