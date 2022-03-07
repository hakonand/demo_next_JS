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

import {
	varFadeInUp,
	MotionInView,
	varFadeInDown,
	varFadeInLeft,
} from '../animate'

export default function NotMappedSubCatExerpt({ productsArray, name }) {
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
		<Grid
			container
			spacing={2}
			mt={2}
			justifyContent='center'
			alignItems='center'
		>
			<Grid item xs={12}>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent={{ xs: 'center' }}
					alignItems='center'
				>
					<Typography variant='h4' sx={{ margin: theme.spacing(2) }}>
						{name}
					</Typography>
				</Stack>
				<MotionInView variants={varFadeInLeft} sx={{ mb: theme.spacing(3) }}>
					<Stack
						direction='column'
						spacing={1}
						alignItems='center'
						justifyContent='center'
					>
						<Divider width='10%' color={theme.palette.grey[600]} />
					</Stack>
				</MotionInView>
			</Grid>
			<NotMappedViewProductsList products={productsArray} />
		</Grid>
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
