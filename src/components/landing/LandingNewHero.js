import { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import arrowheadRightFill from '@iconify/icons-eva/arrowhead-right-fill'

// material
import { styled, useTheme } from '@mui/material/styles'
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material'
// routes
//

import { varWrapEnter, varFadeInUp, varFadeIn } from '../animate'

import LandingDialog from './LandingDialog'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
	position: 'relative',
	backgroundColor: theme.palette.grey[300],
	height: '80%',

	[theme.breakpoints.up('md')]: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		position: 'fixed',
		alignItems: 'center',
	},
}))

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
	({ theme }) => ({
		zIndex: 10,
		maxWidth: 520,
		margin: 'auto',
		textAlign: 'center',
		position: 'relative',
		paddingTop: theme.spacing(15),
		paddingBottom: theme.spacing(10),
		[theme.breakpoints.up('md')]: {
			margin: 'unset',
			textAlign: 'left',
		},
	})
)

const HeroOverlayStyle = styled(motion.img)({
	zIndex: 8,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
})

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
	top: 0,
	right: 0,
	bottom: 0,
	zIndex: 8,
	width: '100%',
	position: 'absolute',
	[theme.breakpoints.up('lg')]: {
		right: '5%',
		width: 'auto',
		height: '100%',
	},
}))

// ----------------------------------------------------------------------

export default function LandingHero({ openDialog, setOpenDialog }) {
	const theme = useTheme()

	return (
		<>
			<RootStyle initial='initial' animate='animate' variants={varWrapEnter}>
				<HeroImgStyle
					alt='hero'
					src='/static/home/finalhero-min.png'
					variants={varFadeInUp}
				/>
				<HeroOverlayStyle
					alt='overlay'
					src='/static/overlay.svg'
					variants={varFadeIn}
				/>

				<Container maxWidth='lg'>
					<ContentStyle>
						<Typography component='span' variant='hero1' color='primary'>
							markd
						</Typography>

						<Typography variant='h2' sx={{ color: 'common.white' }}>
							Den digitale delen av din bedrift - gjort enkelt
						</Typography>

						<Typography
							variant='subtitle1'
							sx={{ pt: theme.spacing(2), color: 'common.white' }}
						>
							Styrk din butikks tilstedeværelse på nett, fra dine sosiale medier
							til Google Søk, og bli en del av den beste måten å handle på, på
							nett.
						</Typography>

						<Button
							size='large'
							variant='contained'
							onClick={() => setOpenDialog(!openDialog)}
							startIcon={
								<Icon icon={arrowheadRightFill} width={20} height={20} />
							}
						>
							Kom i gang
						</Button>
					</ContentStyle>
				</Container>
			</RootStyle>
			<Box sx={{ height: { md: '100vh' } }} />
		</>
	)
}
