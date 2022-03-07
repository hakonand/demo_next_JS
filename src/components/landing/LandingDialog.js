// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Grid,
	Card,
	Container,
	Typography,
	useMediaQuery,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Button,
} from '@mui/material'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function LandingDialog({
	openDialog,
	setOpenDialog,
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

	return (
		<>
			<Dialog open={openDialog} onClose={() => setOpenDialog(!openDialog)}>
				<DialogTitle>Registrer interesse</DialogTitle>

				<DialogContent>
					<DialogContentText sx={{ mt: 2 }}>
						Det er ingen forpliktelser. <br /> Vi tar kontakt snarest for å få
						satt opp markd til din butikk.
					</DialogContentText>
				</DialogContent>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'relative',
						justifyContent: 'center',
					}}
				>
					<Grid container sx={{ padding: theme.spacing(2) }}>
						<Grid item xs={12} sx={{ mt: theme.spacing(3) }}>
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
						<Grid item xs={12} sx={{ mt: theme.spacing(3) }}>
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
						<Grid item xs={12} sx={{ mt: theme.spacing(3) }}>
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
						<Grid item xs={12} sx={{ mt: theme.spacing(3) }}>
							<Grid container justifyContent='space-between'>
								<Grid item xs={6}>
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
								<Grid item xs={4} md={2}>
									<Button
										color='error'
										variant='outlined'
										onClick={() => setOpenDialog(!openDialog)}
										size='large'
									>
										Tilbake
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Dialog>
		</>
	)
}
