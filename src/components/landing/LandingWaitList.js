import { useState } from 'react'

// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Grid,
	Button,
	Container,
	Typography,
	TextField,
} from '@mui/material'
//
import { varFadeInUp, MotionInView, varFadeInRight } from '../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(10, 0),
	backgroundImage:
		theme.palette.mode === 'light'
			? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
					theme.palette.grey[300]
			  } 100%)`
			: 'none',
}))

const ContentStyle = styled('div')(({ theme }) => ({
	width: '100%',
	textAlign: 'start',
	marginBottom: theme.spacing(5),
	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
		marginBottom: 0,
	},
}))

// ----------------------------------------------------------------------

export default function LandingWaitList({
	registerName,
	registerEmail,
	registerCity,
	handleEmailChange,
	handleNameChange,
	handleCityChange,
	registerInterest,
	registerClick,
	setRegisterClick,
}) {
	const theme = useTheme()
	const isLight = theme.palette.mode === 'light'

	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Grid container spacing={2} justifyContent='center'>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<ContentStyle>
							<MotionInView variants={varFadeInUp}>
								<Typography
									variant='overline'
									sx={{ mb: theme.spacing(1), color: 'text.secondary' }}
								>
									Begynn å bruke markd
								</Typography>
							</MotionInView>

							<MotionInView variants={varFadeInUp}>
								<Typography variant='h2' sx={{ mb: theme.spacing(2) }}>
									Registrer interesse <br />
									for din bedrift
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
							<MotionInView variants={varFadeInRight}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<TextField
											label='Bedriftens Navn'
											variant='filled'
											autoComplete='name'
											disabled={registerClick}
											fullWidth
											value={registerName}
											onChange={(e) => handleNameChange(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											label='Epost'
											variant='filled'
											autoComplete='email'
											disabled={registerClick}
											fullWidth
											value={registerEmail}
											onChange={(e) => handleEmailChange(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											label='Sted / By'
											variant='filled'
											autoComplete='address-level2'
											disabled={registerClick}
											fullWidth
											value={registerCity}
											onChange={(e) => handleCityChange(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										{registerClick ? (
											<Button disabled>Takk! Interesse registrert </Button>
										) : (
											<Button
												size='large'
												color='primary'
												variant='contained'
												onClick={() =>
													registerInterest(
														registerEmail,
														registerName,
														registerCity,
														setRegisterClick
													)
												}
											>
												Registrer interesse
											</Button>
										)}
									</Grid>
								</Grid>
							</MotionInView>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
