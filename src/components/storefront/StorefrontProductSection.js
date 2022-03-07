import React, { useState, useEffect, useCallback } from 'react'

// material
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Image from 'next/image'

import {
	Typography,
	Stack,
	CardActionArea,
	Divider,
	Grid,
	Box,
	IconButton,
} from '@mui/material'

import { useTheme, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

export default function StorefrontCategories({ products, header }) {
	const theme = useTheme()

	return (
		<Grid
			container
			spacing={2}
			mt={5}
			sx={{
				[theme.breakpoints.down('md')]: {
					px: theme.spacing(1),
				},
			}}
		>
			<Grid item xs={12} mb={5}>
				<Stack justifyContent='center' alignItems='center' spacing={1}>
					<Typography variant='h3'>{header}</Typography>
					<Divider variant='middle' width='10%' />
				</Stack>
			</Grid>
			{products.map((option, index) => (
				<Grid item xs={6} sm={3} key={index}>
					<div>
						<div>
							<CardActionArea>
								<Box sx={{ position: 'relative', display: 'block' }}>
									<Image
										src={option.image}
										alt={option.title}
										layout='responsive'
										quality='100'
										height='100vw'
										width='100vw'
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
						</div>
					</div>
				</Grid>
			))}
		</Grid>
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
