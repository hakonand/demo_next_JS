import PropTypes from 'prop-types'
import { useRef } from 'react'

// material
import { useTheme } from '@mui/material/styles'
import { Box, Card, Container, Typography, Grid } from '@mui/material'
// utils
import Image from 'next/image'

//
import { varFadeIn, varFadeInUp, MotionInView } from '../animate'

// ----------------------------------------------------------------------

const MOCK_MEMBERS = [
	{
		id: '123121',
		name: 'Klikk & Hent',
		role: 'Kundene dine henter selv',
		avatar:
			'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/static%2Fover_counter.jpg?alt=media&token=c72db7bc-37d7-4f46-a73a-419b18676723',
		price: 'Gratis løsning',
	},
	{
		id: '123122',
		name: 'Forsendelse',
		role: 'Pakke sendes med Bring',
		avatar: '/static/home/airplane.jpg',
		price: 'Bestem prisen selv',
	},
	{
		id: '123123',
		name: 'Hjemlevering',
		role: 'Kjøres av våre sjåfører',
		avatar: '/static/home/door.jpg',
		price: 'Priser basert på sted',
	},
]

// ----------------------------------------------------------------------

MemberCard.propTypes = {
	member: PropTypes.shape({
		id: PropTypes.string,
		avatar: PropTypes.string,
		name: PropTypes.string,
		role: PropTypes.string,
		price: PropTypes.string,
	}),
}

const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`
}

function MemberCard({ member }) {
	const { name, role, avatar, price } = member
	return (
		<Card key={name} sx={{ mx: 1.5 }}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant='subtitle1' sx={{ mt: 2, mb: 0.5 }}>
						{name}
					</Typography>
					<Typography variant='body2' sx={{ mb: 2, color: 'text.secondary' }}>
						{role}
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ position: 'relative' }}>
					<Image
						loading='lazy'
						src={avatar}
						layout='responsive'
						height='50%'
						width='100%'
						loader={myLoader}
					/>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ mt: 2, mb: 1 }}>
						<Typography variant='body2' sx={{ mb: 2, color: 'text.secondary' }}>
							{price}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Card>
	)
}

export default function LandingShipping() {
	const carouselRef = useRef()
	const theme = useTheme()

	return (
		<Container
			maxWidth='lg'
			sx={{ pb: theme.spacing(3), textAlign: 'center', pt: theme.spacing(5) }}
		>
			<MotionInView variants={varFadeInUp}>
				<Typography variant='h2' sx={{ mb: theme.spacing(2) }}>
					Tilby de beste løsningene
				</Typography>
			</MotionInView>

			<MotionInView variants={varFadeInUp} sx={{ mb: theme.spacing(5) }}>
				<Typography
					sx={{
						mx: 'auto',
						maxWidth: 630,
						color: (theme) =>
							theme.palette.mode === 'light'
								? 'text.secondary'
								: 'common.white',
					}}
				>
					Fraktetiketter blir automatisk laget for hver ordre klar til å printes
					og limes på ordren.
				</Typography>
			</MotionInView>

			<Grid container spacing={2}>
				{MOCK_MEMBERS.map((member, index) => (
					<Grid item xs={12} md={4} key={index}>
						<MotionInView key={member.id} variants={varFadeIn}>
							<MemberCard member={member} />
						</MotionInView>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
