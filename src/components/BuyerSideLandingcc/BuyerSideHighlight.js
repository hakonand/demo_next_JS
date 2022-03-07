import {
	Box,
	Button,
	Stack,
	Typography,
	Grid,
	Skeleton,
	Container,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import NextLink from 'next/link'
import Image from 'next/image'

import NotMappedViewProductsList from './NotMappedViewProductsList'

const ProductImgStyle = styled('img')({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
})

export default function BuyerSideHighlight({ post, isLoading }) {
	const theme = useTheme()

	const SkeletonLoad = (
		<>
			<Grid container spacing={{ xs: 4, sm: 4 }}>
				<Grid item xs={12} sm={5}>
					<Skeleton
						variant='rectangular'
						width='100%'
						sx={{ paddingTop: '115%', borderRadius: 2 }}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Skeleton variant='h3' />

					<Skeleton variant='body1' />

					<Skeleton variant='h3' />
				</Grid>

				<Grid
					container
					spacing={{ xs: 1, md: 3 }}
					sx={{
						pt: theme.spacing(2),
						[theme.breakpoints.down('md')]: {
							p: theme.spacing(1),
						},
					}}
				>
					<Grid item xs={12}>
						<Skeleton variant='h3' />
					</Grid>
					<Grid item xs={6} sm={3}>
						<Skeleton
							variant='rectangular'
							width='100%'
							sx={{ paddingTop: '115%', borderRadius: 2 }}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Skeleton
							variant='rectangular'
							width='100%'
							sx={{ paddingTop: '115%', borderRadius: 2 }}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Skeleton
							variant='rectangular'
							width='100%'
							sx={{ paddingTop: '115%', borderRadius: 2 }}
						/>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Skeleton
							variant='rectangular'
							width='100%'
							sx={{ paddingTop: '115%', borderRadius: 2 }}
						/>
					</Grid>
				</Grid>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					direction='row'
					mt={3}
				>
					<Grid item xs={10} sm={8}>
						<Skeleton />
					</Grid>
				</Grid>
			</Grid>
		</>
	)
	return (
		<Grid item xs={12}>
			<Box sx={{ my: theme.spacing(5) }} />

			{isLoading
				? SkeletonLoad
				: post.map((item, index) => (
						<div key={index}>
							<Grid
								container
								spacing={{ xs: 3, sm: 5 }}
								sx={{
									[theme.breakpoints.down('md')]: {
										px: theme.spacing(1),
									},
								}}
							>
								<Grid item xs={12} sm={5}>
									<Box
										sx={{
											position: 'relative',
											mx: theme.spacing(1),
											display: 'block',
										}}
									>
										<Image
											src={item.image}
											loading='lazy'
											layout='responsive'
											height='100vw'
											width='100vw'
											alt={item.title}
											quality='100'
										/>
									</Box>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Stack
										direction='column'
										justifyContent='center'
										alignItems='center'
										spacing={3}
										sx={{
											height: '100%',
											[theme.breakpoints.up('sm')]: {
												mt: theme.spacing(2),
											},
										}}
									>
										<Stack width='90%'>
											<Typography variant='h3' color='black'>
												{item.title}
											</Typography>
										</Stack>
										<Stack width='90%'>
											<Typography variant='subtitle1' color='black'>
												by {item.owner}
											</Typography>
										</Stack>
										<Stack width='90%'>
											<Typography variant='body1'>{item.descr}</Typography>
										</Stack>
									</Stack>
								</Grid>

								<Grid item xs={12}>
									{item.productLines.map((item, index) => (
										<Grid container spacing={1} key={index}>
											<Typography
												variant='body1'
												sx={{
													ml: theme.spacing(2),
												}}
											>
												{item.productLineDescr}
											</Typography>
											<NotMappedViewProductsList products={item.productLines} />
										</Grid>
									))}
								</Grid>
								<Grid
									container
									justifyContent='center'
									alignItems='center'
									mt={3}
								>
									<Grid item xs={10} sm={8} color='black'>
										<Button
											fullWidth
											variant='contained'
											size='large'
											p={2}
											startIcon={<LocalMallIcon mr={2} />}
										>
											Check out {item.owner}
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</div>
				  ))}

			<Box sx={{ my: theme.spacing(5) }} />
		</Grid>
	)
}
