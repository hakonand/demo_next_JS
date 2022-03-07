import {
	Stack,
	Typography,
	Grid,
	Button,
	CardActionArea,
	Box,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import { useRouter } from 'next/router'

import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp'

import FlightIcon from '@mui/icons-material/Flight'
import ReplayIcon from '@mui/icons-material/Replay'
import BuyerSideWelcomeCarousel from './BuyerSideWelcomeCarousel'
import { MHidden } from '../@material-extend'

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// background: createGradientRight('#A3C4F3 ', '#FCFCFC'),

export default function BuyerSideWelcome({ user, maincats }) {
	const theme = useTheme()
	const router = useRouter()
	const Welcome = (
		<Stack
			direction='column'
			justifyContent='space-evenly'
			alignItems='flex-start'
			spacing={2}
			sx={{
				[theme.breakpoints.up('md')]: {
					height: '80%',
				},
			}}
		>
			<Stack>
				<Typography variant='hero1' component='h1' color='primary'>
					markd
				</Typography>
			</Stack>

			<Stack spacing={2}>
				<Typography
					variant='h2'
					component='h1'
					color={theme.palette.common.white}
				>
					Norges digitale kjøpesenter
				</Typography>

				<Button
					variant='contained'
					color='success'
					size='large'
					fullWidth
					disabled
				>
					You are logged in
				</Button>
			</Stack>
		</Stack>
	)

	const NewUser = (
		<Stack
			direction='column'
			justifyContent='space-evenly'
			alignItems='flex-start'
			spacing={2}
			sx={{
				[theme.breakpoints.up('md')]: {
					height: '80%',
				},
			}}
		>
			<Stack>
				<Typography variant='hero1' component='h1' color='primary'>
					markd
				</Typography>
			</Stack>
			<Stack>
				<Typography
					variant='h2'
					component='h1'
					color={theme.palette.common.white}
				>
					Norges digitale kjøpesenter
				</Typography>
			</Stack>

			<Stack>
				<Typography variant='subtitle1' color={theme.palette.common.white}>
					Finn det du vil ha, fra et mangfold av butikker
				</Typography>
			</Stack>
			<Stack spacing={2}>
				<Typography
					variant='subtitle1'
					gutterBottom
					color={theme.palette.common.white}
				>
					Se hvilke produkter vi kan levere på døren din, og personaliser
					kjøpesenteret med dine interesser!
				</Typography>
				<Button
					variant='contained'
					size='large'
					width='50%'
					onClick={() => router.push('/Login')}
				>
					Log in
				</Button>
			</Stack>
		</Stack>
	)

	return (
		<div>
			<Grid
				container
				justifyContent='center'
				spacing={{ xs: 5, sm: 5 }}
				sx={{
					p: theme.spacing(2),
					pt: theme.spacing(5),
					mb: theme.spacing(2),
					background: createGradientRight(
						theme.palette.common.black,
						theme.palette.grey[800]
					),
					[theme.breakpoints.down('sm')]: {
						pt: theme.spacing(2),
					},
				}}
			>
				<Grid item xs={12} sm={5}>
					{user ? Welcome : NewUser}
				</Grid>

				<Grid item xs={12} sm={4}>
					<MHidden width='smDown'>
						<BuyerSideWelcomeCarousel maincats={maincats} />
					</MHidden>
				</Grid>

				<Grid
					container
					alignItems='center'
					justifyContent='center'
					spacing={2}
					sx={{
						p: theme.spacing(2),
						pt: theme.spacing(3),
						mb: theme.spacing(2),
						[theme.breakpoints.down('sm')]: {
							pt: theme.spacing(2),
						},
					}}
				>
					<Grid item xs={6} sm={3}>
						<Stack
							direction='column'
							justifyContent='flex-start'
							alignItems='center'
						>
							<FlightIcon
								sx={{
									width: '25%',
									height: 'auto',
									color: theme.palette.common.white,
									[theme.breakpoints.up('md')]: {
										width: '10%',
									},
								}}
							/>
							<Typography
								variant='subtitle1'
								color={theme.palette.common.white}
								textAlign='center'
							>
								Leverer til hele Norge
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Stack
							direction='column'
							justifyContent='flex-start'
							alignItems='center'
						>
							<PedalBikeSharpIcon
								sx={{
									width: '25%',
									height: 'auto',
									color: theme.palette.common.white,
									[theme.breakpoints.up('md')]: {
										width: '10%',
									},
								}}
							/>
							<Typography
								variant='subtitle1'
								color={theme.palette.common.white}
								textAlign='center'
							>
								Hjemlevering lokalt
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Stack
							direction='column'
							justifyContent='flex-start'
							alignItems='center'
						>
							<ReplayIcon
								sx={{
									width: '25%',
									height: 'auto',
									color: theme.palette.common.white,
									[theme.breakpoints.up('md')]: {
										width: '10%',
									},
								}}
							/>
							<Typography
								variant='subtitle1'
								color={theme.palette.common.white}
								textAlign='center'
							>
								14 dager åpent kjøp
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

// <Grid container>
// {subcats.map((subcat) => (
//   <Grid item xs={6} md={6} key={subcat.id}>
//     <SubCatButton subcatImg={subcat.exImages} subcatTitle={subcat.id} />
//   </Grid>
// ))}
// {subcats.map((subcat) => (
//   <Grid item xs={6} md={6} key={subcat.id}>
//     <SubCatButton subcatImg={subcat.exImages} subcatTitle={subcat.id} />
//   </Grid>
// ))}{' '}
// </Grid>
