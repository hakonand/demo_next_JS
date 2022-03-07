// material
import { useTheme, styled } from '@mui/material/styles'
import { Typography, Button, Box, Card, CardContent } from '@mui/material'

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
	height: 400,
	textAlign: 'center',
	py: theme.spacing(1),
	backgroundColor: theme.palette.primary.lighter,
	[theme.breakpoints.up('md')]: {
		display: 'flex',
		textAlign: 'left',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	[theme.breakpoints.up('xl')]: { height: 320 },
}))

// ----------------------------------------------------------------------

export default function EcommerceWelcome() {
	const theme = useTheme()
	return (
		<RootStyle>
			<CardContent>
				<Typography
					gutterBottom
					variant='h4'
					sx={{ color: 'grey.800', marginTop: theme.spacing(3) }}
				>
					Welcome to CompanyName,
					<br /> DisplayName
				</Typography>

				<Typography
					variant='body2'
					sx={{
						color: 'grey.800',
						pb: { xs: 3, xl: 5 },
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. <br />
					<br />
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum
				</Typography>
			</CardContent>
		</RootStyle>
	)
}
