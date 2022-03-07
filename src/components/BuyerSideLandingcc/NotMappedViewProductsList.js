import PropTypes from 'prop-types'
// material
import { Skeleton, Grid } from '@mui/material'
import { Icon } from '@iconify/react'

import { styled, useTheme } from '@mui/material/styles'

// routes
import {
	varFadeInUp,
	MotionInView,
	varFadeInDown,
	varFadeInRight,
} from '../animate'

// ----------------------------------------------------------------------
import NotMappedProductCards from './NotMappedProductCards'

export default function NotMappedViewProductsList({ products, isLoading }) {
	const SkeletonLoad = (
		<>
			{[...Array(12)].map((item, index) => (
				<Grid item xs={12} sm={6} md={3} key={index}>
					<Skeleton
						variant='rectangular'
						width='100%'
						sx={{ paddingTop: '115%', borderRadius: 2 }}
					/>
				</Grid>
			))}
		</>
	)
	const theme = useTheme()

	return (
		<Grid
			container
			spacing={{ xs: 1, md: 3 }}
			sx={{
				pt: theme.spacing(2),
				p: theme.spacing(2),
				[theme.breakpoints.down('md')]: {
					p: theme.spacing(1),
				},
			}}
		>
			{isLoading
				? SkeletonLoad
				: products.map((product, index) => (
						<Grid key={index} item xs={6} sm={6} md={3}>
							<NotMappedProductCards product={product} />
						</Grid>
				  ))}
		</Grid>
	)
}
