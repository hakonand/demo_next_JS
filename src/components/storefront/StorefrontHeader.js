import React, { useState, useEffect, useCallback } from 'react'

import PropTypes from 'prop-types'
// material

import PedalBikeSharpIcon from '@mui/icons-material/PedalBikeSharp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import FlightIcon from '@mui/icons-material/Flight'
import ReplayIcon from '@mui/icons-material/Replay'

import NextLink from 'next/link'

import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Typography, Stack, Avatar, CardActionArea, Grid } from '@mui/material'

import { useTheme, styled } from '@mui/material/styles'

import SubCatButton from './SubCatButton'

// ----------------------------------------------------------------------

StorefrontHeader.propTypes = {
	myProfile: PropTypes.object,
	posts: PropTypes.array,
	authUser: PropTypes.object,
}

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

export default function StorefrontHeader({ data }) {
	const theme = useTheme()

	// hasmore = https://firebase.google.com/docs/firestore/query-data/query-cursors

	// replace this with a firebase fucntion then limit and or slice the data

	// const threePosts = posts.slice(0, 3);

	/* eslint prefer-arrow-callback: 0 */

	// useEffect(() => {});

	// i container grid først
	// height: 250,
	// padding: theme.spacing(3),
	// [theme.breakpoints.up('lg')]: {
	//   height: 175
	// }

	const [headerSocials, setHeaderSocials] = useState([
		{
			name: 'Instagram',
			link: 'https://www.instagram.com',
			image: '/static/home/instagramgradient.png',
			icon: <InstagramIcon />,
		},
		{
			name: 'Facebook',
			link: 'https://www.facebook.com',
			icon: <FacebookIcon />,
			image: '/static/home/facebookgradient.png',
		},
	])

	return (
		<div>
			<Grid
				container
				spacing={3}
				pt={3}
				justifyContent='center'
				px={3}
				m={0}
				sx={{
					background: createGradientRight(
						theme.palette.common.black,
						theme.palette.grey[800]
					),
				}}
			>
				<Grid item xs={12} alignItems='center' justifyContent='center'>
					<Stack direction='column' justifyContent='center' alignItems='center'>
						<Avatar sx={{ height: 75, width: 75 }} />
					</Stack>
				</Grid>
				<Grid item xs={12} alignItems='center'>
					<Stack direction='column' justifyContent='center' alignItems='center'>
						<Typography variant='h4' color='white'>
							{data.store_name}
						</Typography>
						<Typography variant='body1' color='white'>
							{data.place}
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<Grid
						container
						alignItems='center'
						justifyContent={{ xs: 'flex-start', sm: 'center' }}
						spacing={2}
					>
						<Grid item xs={12} sm={8}>
							<Grid
								container
								spacing={2}
								justifyContent={{ xs: 'center', sm: 'center' }}
								alignItems={{ xs: 'center', sm: 'center' }}
								sx={{
									[theme.breakpoints.up('xs')]: {
										justifyContent: 'center',
										alignItems: 'center',
									},
								}}
							>
								<Grid item xs={12} md={6}>
									<Stack direction='row' sx={{ px: theme.spacing(3) }}>
										<Typography variant='body1' color='white'>
											{data.descr}
										</Typography>
									</Stack>
								</Grid>

								<Grid item xs={8} md={4}>
									<Stack direction='column'>
										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Mandag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Tirsdag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Onsdag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Torsdag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Fredag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Lørdag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>

										<Stack
											direction='row'
											justifyContent='space-between'
											spacing={2}
										>
											<Typography variant='subtitle1' color='white'>
												Søndag
											</Typography>
											<Typography color='white' variant='body1'>
												10.00 - 16.00
											</Typography>
										</Stack>
									</Stack>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<Grid
						container
						spacing={2}
						alignItems='center'
						justifyContent='center'
						p={1}
						columns={{ xs: 12, sm: 10 }}
					>
						{headerSocials.map((item, index) => (
							<Grid item xs={6} sm={4} key={index}>
								<a href={item.link} target='_blank' rel='noreferrer'>
									<SubCatButton
										subcatTitle={item.name}
										subcatImg={item.image}
										subcatIcon={item.icon}
									/>
								</a>
							</Grid>
						))}
					</Grid>
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

// <Grid item xs={12} md={12}>
// <InfiniteScroll
//   next={onScroll}
//   hasMore={hasMore}
//   loader={SkeletonLoad}
//   dataLength={posts.length}
//   style={{ overflow: 'inherit' }}
// >
//   <Grid container spacing={3}>
//     {threePosts.map((post, index) => (
//       <StorefrontBlogPostCard key={post.id} post={post} index={index} />
//     ))}
//   </Grid>
// </InfiniteScroll>
// </Grid>

// <Grid item xs={6} sm={3}>
// <Stack
// 	direction='column'
// 	justifyContent='flex-start'
// 	alignItems='center'
// >
// 	<PedalBikeSharpIcon
// 		sx={{
// 			width: '25%',
// 			height: 'auto',
// 			color: theme.palette.common.white,
// 			[theme.breakpoints.up('md')]: {
// 				width: '10%',
// 			},
// 		}}
// 	/>
// 	<Typography
// 		variant='subtitle1'
// 		color={theme.palette.common.white}
// 		textAlign='center'
// 	>
// 		Hjemlevering lokalt
// 	</Typography>
// </Stack>
// </Grid>
