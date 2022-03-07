import PropTypes from 'prop-types'
// material
import {
	Box,
	Card,
	Link,
	Typography,
	CardContent,
	CardActionArea,
	Stack,
	Container,
	IconButton,
	Button,
	Skeleton,
	Grid,
} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Icon } from '@iconify/react'
import Image from 'next/image'

import NextLink from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import plusCircleOutline from '@iconify/icons-eva/plus-circle-outline'

// routes
// ----------------------------------------------------------------------

export default function ViewProductList({ products, isLoading }) {
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

	const IconStyle = styled(Icon)(({ theme }) => ({
		width: '100%',
		height: '100%',
		marginTop: 1,
		flexShrink: 0,
		marginRight: theme.spacing(2),
		color: 'white',
	}))

	const theme = useTheme()
	return (
		<Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
			<Grid item xs={12} sm={6} md={3}>
				<div sx={{ margin: theme.spacing(2) }}>
					<NextLink href={'/dashboard/ProductWizard'} color='inherit'>
						<CardActionArea>
							<Box
								style={{
									backgroundColor: theme.palette.primary.main,
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<IconStyle icon={plusCircleOutline} />
							</Box>
							<Stack direction='column' sx={{ mt: theme.spacing(1) }}>
								<Typography variant='subtitle1'>
									{' '}
									Create new product{' '}
								</Typography>
								<Typography variant='body2' noWrap>
									Click here to get started
								</Typography>
							</Stack>
						</CardActionArea>
					</NextLink>
				</div>
			</Grid>
			{isLoading
				? SkeletonLoad
				: products.map((option, index) => (
						<Grid item xs={6} sm={3} key={index}>
							<NextLink href='#' color='inherit'>
								<CardActionArea>
									<Box sx={{ position: 'relative', display: 'block' }}>
										<Image
											src={option.image}
											alt={option.title}
											layout='responsive'
											quality='100'
											height='1080'
											width='1080'
											priority
										/>
									</Box>

									<Stack
										direction={{ xs: 'column', md: 'row' }}
										justifyContent='space-between'
										sx={{ mb: theme.spacing(1), mt: theme.spacing(1) }}
									>
										<Typography variant='subtitle1'>{option.name}</Typography>
										<Typography variant='body2'>
											{option.owner_name}, {option.place}
										</Typography>
									</Stack>
								</CardActionArea>
							</NextLink>

							<Stack
								direction='row'
								justifyContent='space-between'
								sx={{ mb: theme.spacing(1), mt: theme.spacing(1) }}
							>
								<Typography variant='body2'>{option.price} NOK</Typography>
								<IconButton sx={{ mr: theme.spacing(1) }}>
									<FavoriteBorderOutlinedIcon />
								</IconButton>
							</Stack>
						</Grid>
				  ))}
		</Grid>
	)
}
