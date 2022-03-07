// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Grid,
	Card,
	Container,
	Typography,
	CardContent,
	LinearProgress,
	CardMedia,
	CardHeader,
	Stack,
	ButtonBase,
} from '@mui/material'
import heartFill from '@iconify/icons-eva/heart-fill'

import { Icon } from '@iconify/react'

//
import { varWrapEnter, varFadeInUp, varFadeIn, MotionInView } from '../animate'

// ----------------------------------------------------------------------

const images = [
	{
		url: '/static/home/coupon.jpg',
		title: 'Rabattkode',
		width: '100%',
	},
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}))

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
})

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}))

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}))

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(24, 0),
	backgroundColor: theme.palette.grey[900],
	marginBottom: theme.spacing(10),
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

// ----------------------------------------------------------------------

export default function LandingBonusProgram() {
	const theme = useTheme()

	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Grid container spacing={6} justifyContent='space-around'>
					<Grid item xs={12} md={4}>
						<ContentStyle>
							<MotionInView variants={varFadeInUp}>
								<Typography
									variant='h2'
									sx={{ mb: 2, color: theme.palette.common.white }}
								>
									Skap lojalitet med et <br />
									<Typography color='error' variant='inherit'>
										bonusprogram
									</Typography>
								</Typography>
							</MotionInView>

							<MotionInView variants={varFadeInUp}>
								<Typography
									sx={{
										mb: theme.spacing(2),
										color: 'common.white',
									}}
								>
									Gjør det en fordel å handle hos din butikk oftere. Belønn
									lojale kunder med en rabattkode etter et antall selvbestemt
									antall kjøp!
								</Typography>

								<Typography
									sx={{
										mb: theme.spacing(2),
										color: 'common.white',
									}}
									variant='body2'
								>
									Estimert 03.22 - under utvikling
								</Typography>
							</MotionInView>
						</ContentStyle>
					</Grid>

					<Grid item xs={12} md={5} dir='ltr'>
						<Card
							sx={{
								padding: theme.spacing(2),
								backgroundColor: theme.palette.grey[100],
							}}
							variant='outlined'
						>
							<CardHeader
								title='Bonusprogram for DinButikk'
								sx={{ my: theme.spacing(2) }}
							/>
							<CardContent>
								<CardMedia sx={{ alignItems: 'center' }}>
									<Icon
										icon={heartFill}
										width='100%'
										height={72}
										filter={shadowIcon(theme.palette.error.darker)}
										color={theme.palette.grey[800]}
									/>
								</CardMedia>
								<Stack direction='row' justifyContent='center'>
									<Stack width='80%'>
										<LinearProgress
											variant='determinate'
											value={80}
											sx={{ mt: theme.spacing(1), mr: theme.spacing(1) }}
											color='error'
										/>
									</Stack>
									<Stack>
										<Typography variant='body2' color='error'>
											4/5
										</Typography>
									</Stack>
								</Stack>
								<Stack
									direction='column'
									alignItems='center'
									sx={{ mt: theme.spacing(2) }}
								>
									<Typography variant='subtitle1'>
										Velg bonus ved 1 kjøp til{' '}
									</Typography>
								</Stack>

								<Grid
									container
									spacing={3}
									sx={{ mt: theme.spacing(2) }}
									justifyContent='center'
								>
									{images.map((image) => (
										<Grid item xs={12} key={image.title}>
											<ImageButton focusRipple sx={{ width: '100%' }}>
												<ImageSrc
													sx={{ backgroundImage: `url(${image.url})` }}
												/>
												<ImageBackdrop className='MuiImageBackdrop-root' />
												<Image>
													<Typography
														component='span'
														variant='subtitle1'
														color='inherit'
														sx={{
															position: 'relative',
															p: 4,
															pt: 2,
															pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
														}}
													>
														{image.title}
														<ImageMarked className='MuiImageMarked-root' />
													</Typography>
												</Image>
											</ImageButton>
										</Grid>
									))}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}

//
