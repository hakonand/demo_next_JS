// material
import { useTheme, styled } from '@mui/material/styles'
import { Typography, Button, Card, CardContent } from '@mui/material'
import Link from 'next/link'

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
	height: 400,
	textAlign: 'center',
	[theme.breakpoints.up('md')]: {
		display: 'flex',
		textAlign: 'left',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	[theme.breakpoints.up('xl')]: { height: 320 },
}))

// ----------------------------------------------------------------------

export default function EcommerceAds() {
	const theme = useTheme()
	return (
		<RootStyle>
			<CardContent
				sx={{
					p: { md: 0 },
					pl: { md: 5 },
				}}
			>
				<Typography
					gutterBottom
					variant='h4'
					sx={{ marginTop: theme.spacing(3) }}
				>
					You have 0 running ads
				</Typography>

				<Typography
					variant='body2'
					sx={{
						pb: { xs: 3, xl: 5 },
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. <br />
				</Typography>
				<Button
					variant='contained'
					size='large'
					sx={{
						mb: theme.spacing(3),
					}}
				>
					Create Ad
				</Button>
			</CardContent>
		</RootStyle>
	)
}
