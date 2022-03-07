import Slider from 'react-slick'
import { findIndex } from 'lodash'
import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'

// material
import { useTheme, styled } from '@mui/material/styles'
import { Box, Paper, Grid } from '@mui/material'
import { CarouselControlsPaging2 } from '../carousel/controls'
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
		<Image
			alt={title}
			src={image}
			width='100%'
			height='100%'
			layout='responsive'
			priority
			sx={{
				borderRadius: 0.5,
				cursor: 'pointer',
			}}
		/>
	)
}

// ----------------------------------------------------------------------

export default function BuyerSideWelcomeCarousel({ maincats, ...other }) {
	const theme = useTheme()
	const [selectedImage, setSelectedImage] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [nav1, setNav1] = useState(null)
	const [nav2, setNav2] = useState(null)
	const slider1 = useRef(null)
	const slider2 = useRef(null)

	const settings1 = {
		speed: 2000,
		autoplaySpeed: 8000,
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
					mb: theme.spacing(1),
				},
				justifyContent: 'center',
			},
		}),
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
						paddingTop: theme.spacing(2),
					},
				}}
			>
				<Grid item xs={12}>
					<Slider {...settings1} asNavFor={nav2} ref={slider1}>
						{maincats.map((item, index) => (
							<Paper
								elevation={3}
								onClick={() => console.log('Click')}
								sx={{
									backgroundColor: theme.palette.grey[800],
									boxShadow: theme.customShadows.z16,
									borderRadius: theme.shape.borderRadiusMd,
									position: 'relative',
									display: 'block',
									mb: theme.spacing(1),
								}}
								key={index}
							>
								<CarouselItem key={item} item={item} />
							</Paper>
						))}
					</Slider>
				</Grid>
			</Grid>
		</RootStyle>
	)
}
