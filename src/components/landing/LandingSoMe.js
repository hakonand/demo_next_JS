// material
import { styled, useTheme } from '@mui/material/styles'
import { Box, Grid, Container, Typography } from '@mui/material'
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(10, 0),
	backgroundColor: theme.palette.grey[900],
}))

const ContentStyle = styled('div')(({ theme }) => ({
	textAlign: 'start',
	position: 'relative',
	marginBottom: theme.spacing(5),
	[theme.breakpoints.up('md')]: {
		height: '100%',
		marginBottom: 0,
		textAlign: 'left',
		display: 'inline-flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
}))

// ----------------------------------------------------------------------

export default function LandingSoMe() {
	const theme = useTheme()
	return (
		<RootStyle>
			<Container maxWidth='lg' sx={{ position: 'relative' }}>
				<Box
					component='img'
					alt='image shape'
					src='/static/home/shape.svg'
					sx={{
						top: 0,
						right: 0,
						bottom: 0,
						my: 'auto',
						position: 'absolute',
						filter: 'grayscale(1) opacity(48%)',
						display: { xs: 'none', md: 'block' },
					}}
				/>

				<Grid
					container
					spacing={6}
					direction='row-reverse'
					justifyContent='space-between'
				>
					<Grid item xs={12} md={5}>
						<ContentStyle>
							<MotionInView variants={varFadeInUp}>
								<Typography variant='h2' sx={{ mb: 3, color: 'common.white' }}>
									Del konsistent &
									<Typography
										sx={{ color: theme.palette.success.main }}
										variant='inherit'
									>
										interessant
									</Typography>
									innhold
								</Typography>
							</MotionInView>

							<MotionInView variants={varFadeInUp}>
								<Typography sx={{ color: 'common.white' }} gutterBottom>
									Få forslag og inspirasjon for hva du kan dele tilpasset din
									bedrift, og skap relevant og interessant innhold. Enkelt del
									innholdet over flere kanaler via SoMe-studioet.
								</Typography>
							</MotionInView>
						</ContentStyle>
					</Grid>

					<Grid item xs={12} md={7} sx={{ position: 'relative' }}>
						<MotionInView threshold={0.5} variants={varFadeInUp}>
							<img alt='light mode' src='/static/home/final_lightmode.png' />
						</MotionInView>
						<MotionInView
							threshold={0.5}
							variants={varFadeInDown}
							sx={{ top: 0, left: 0, position: 'absolute', mb: 10, ml: 10 }}
						>
							<img alt='dark mode' src='/static/home/finaldarkmode.png' />
						</MotionInView>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
