import {
	Divider,
	Card,
	Container,
	Typography,
	Grid,
	Button,
	CardActionArea,
	CardContent,
	Stack,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import NextLink from 'next/link'

import NotMappedViewProductsList from './NotMappedViewProductsList'
import MHidden from '../@material-extend/MHidden'

import { varFadeInUp, MotionInView, varFadeInDown } from '../animate'

export default function NotMappedSubCatExerpt({ subcat }) {
	const theme = useTheme()

	function createGradient(color1, color2) {
		return `linear-gradient(to left, ${color1}, ${color2})`
	}

	function createGradientRight(color1, color2) {
		return `linear-gradient(to right, ${color1}, ${color2})`
	}

	const primaryGradient = createGradient(
		theme.palette.primary.lighter,
		theme.palette.primary.main
	)

	// const secondGradient = createGradient(subcat.color1, subcat.color2);

	return (
		<div>
			<div>
				<MotionInView variants={varFadeInUp} sx={{ mb: theme.spacing(3) }}>
					<Grid
						container
						spacing={3}
						sx={{
							mt: theme.spacing(3),
							pl: theme.spacing(3),
						}}
					>
						<Grid
							item
							xs={12}
							sx={{
								background: createGradientRight(subcat.color1, subcat.color2),
							}}
						>
							<Stack
								direction={{ xs: 'column', sm: 'row' }}
								justifyContent={{ xs: 'center', sm: 'flex-start' }}
								alignItems='center'
							>
								<Stack direction='column'>
									<Typography variant='h2' sx={{ margin: theme.spacing(2) }}>
										{subcat.id}
									</Typography>
									<Typography
										variant='body1'
										sx={{ mb: theme.spacing(2), ml: theme.spacing(2) }}
									>
										{subcat.description}
									</Typography>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</MotionInView>

				<NotMappedViewProductsList products={subcat.productsArray} />
				<Container
					component='main'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: theme.spacing(3),
					}}
				>
					<Grid item xs={12} sm={10} md={8}>
						<Card
							sx={{
								margin: theme.spacing(3),
								backgroundColor: subcat.color1,
							}}
						>
							<CardActionArea>
								<CardContent
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Typography variant='h5'>Explore more {subcat.id}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Container>
			</div>
		</div>
	)
}

// <MotionInView variants={varFadeInUp} sx={{ mb: theme.spacing(3) }}>
//   <Grid
//     container
//     spacing={1}
//     sx={{
//       [theme.breakpoints.down('sm')]: {
//         p: theme.spacing(1)
//       }
//     }}
//   >
//     <Grid item xs={6} sm={6} md={3}>
//       <SubCatButton subcatImg={subcat.exImages} subcatTitle="store1" />
//     </Grid>
//     <Grid item xs={6} sm={6} md={3}>
//       <SubCatButton subcatImg={subcat.exImages} subcatTitle="store2" />
//     </Grid>
//   </Grid>
// </MotionInView>
