// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { Box, Grid, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'

//
import { varFadeInUp, MotionInView } from '../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(24, 0),
	backgroundColor: theme.palette.grey[900],
}))

const ContentStyle = styled('div')(({ theme }) => ({
	width: '100%',
	textAlign: 'flex-start',
	marginBottom: theme.spacing(10),
	[theme.breakpoints.up('md')]: {
		textAlign: 'start',
		marginBottom: 0,
	},
}))

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
	paddingRight: 2,
	paddingBottom: 1,
	maxWidth: 160,
	borderRadius: 8,
	backgroundColor: theme.palette.grey[800],
	[theme.breakpoints.up('sm')]: {
		maxWidth: 320,
		paddingRight: 4,
		borderRadius: 12,
	},
	'& img': {
		borderRadius: 8,
		[theme.breakpoints.up('sm')]: {
			borderRadius: 12,
		},
	},
}))

const COMMON = {
	scaleX: 0.86,
	skewY: 8,
	skewX: 0,
	scaleY: 1,
	translateX: 0,
	translateY: 0,
	opacity: 0,
}

const variantScreenLeft = {
	initial: COMMON,
	animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
}
const variantScreenCenter = {
	initial: COMMON,
	animate: { ...COMMON, opacity: 1 },
}
const variantScreenRight = {
	initial: COMMON,
	animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
}

// ----------------------------------------------------------------------

export default function LandingHugePackElementsNew() {
	const theme = useTheme()
	const isRTL = theme.direction === 'rtl'

	const screenLeftAnimate = variantScreenLeft
	const screenCenterAnimate = variantScreenCenter
	const screenRightAnimate = variantScreenRight

	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Grid container spacing={5} justifyContent='center'>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<ContentStyle>
							<MotionInView variants={varFadeInUp}>
								<Typography
									variant='h2'
									sx={{ mb: 2, color: theme.palette.common.white }}
								>
									Sett sammen <br />
									<Typography color='primary' variant='inherit'>
										bærekraftige
									</Typography>
									annonser
								</Typography>
							</MotionInView>

							<MotionInView variants={varFadeInUp}>
								<Typography
									sx={{
										mb: theme.spacing(2),
										color: 'common.white',
									}}
								>
									Vi tar oss av selve konfigureringen, og gjør justeringer
									underveis.
									<br /> Det eneste du trenger å gjøre er å velge type annonse
									og vurdere resultatene!
								</Typography>
							</MotionInView>
						</ContentStyle>
					</Grid>

					<Grid item xs={12} md={8} dir='ltr'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								position: 'relative',
								justifyContent: 'center',
							}}
						>
							{[...Array(3)].map((_, index) => (
								<ScreenStyle
									key={index}
									threshold={0.72}
									variants={{
										...(index === 0 && screenLeftAnimate),
										...(index === 1 && screenCenterAnimate),
										...(index === 2 && screenRightAnimate),
									}}
									transition={{ duration: 0.72, ease: 'easeOut' }}
									sx={{
										boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
											theme.palette.common.black,
											0.48
										)}`,
										...(index === 0 && {
											zIndex: 3,
											position: 'absolute',
										}),
										...(index === 1 && { zIndex: 2 }),
										...(index === 2 && {
											zIndex: 1,
											position: 'absolute',
											boxShadow: 'none',
										}),
									}}
								>
									<img
										alt={`screen ${index + 1}`}
										src={`/static/home/screen_dark_${index + 1}.png`}
									/>
								</ScreenStyle>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
