import { useState, useContext } from 'react'

// material
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Image from 'next/image'

import {
	Container,
	Typography,
	Grid,
	Divider,
	CardActionArea,
	Box,
	IconButton,
	Chip,
	Stack,
	Skeleton,
	Tooltip,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'

// hooks
import firebase from 'src/firebase/firebase'
// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
import { AuthContext } from 'src/contexts/AuthContext'

// ----------------------------------------------------------------------

const myLoader = ({ src, width, quality }) => {
	return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function PageForMenJacket({ data, slug }) {
	const theme = useTheme()
	const [products, setProducts] = useState([])

	const { user, updateFavorites, userInfo, favorites, removeFromFavorites } =
		useContext(AuthContext)

	const router = useRouter()

	const [sortBy, setSortBy] = useState('Newest Addition')
	const [isLoading, setIsLoading] = useState(false)

	const onClickSortChip = (value) => {
		setSortBy(value)
	}

	const sortByNew = (value) => {
		setSortBy(value)

		data.sort(function (a, b) {
			return a.dateCreated - b.dateCreated
		})
		console.log(data)
	}

	const sortByHighPrice = (value) => {
		setSortBy(value)

		data.sort(function (a, b) {
			return a.price - b.price
		})
		console.log(data)
	}

	const sortByLowPrice = (value) => {
		setSortBy(value)

		data.sort(function (a, b) {
			return b.price - a.price
		})
		console.log(data)
	}

	const myLoader = ({ src, width, quality }) => {
		return `/static/home/airplane.jpg${quality || 75}`
	}

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

	const pageTitle = (value) => {
		switch (value) {
			case 'jackets':
				return (
					<Stack
						justifyContent='center'
						alignItems='center'
						direction='column'
						spacing={1}
						mt={4}
					>
						<Typography variant='h2' component='h1'>
							Jackets
						</Typography>
						<Divider width='10%' color={theme.palette.grey[400]} />
						<Divider width='5%' color={theme.palette.grey[400]} />
					</Stack>
				)
				break
			case 'hoodies':
				return (
					<Stack
						justifyContent='center'
						alignItems='center'
						direction='column'
						spacing={1}
						mt={4}
					>
						<Typography variant='h2' component='h1'>
							Hoodies
						</Typography>
						<Divider width='10%' color={theme.palette.grey[400]} />
						<Divider width='5%' color={theme.palette.grey[400]} />
					</Stack>
				)
				break
			case 'suits':
				return (
					<Stack
						justifyContent='center'
						alignItems='center'
						direction='column'
						spacing={1}
						mt={4}
					>
						<Typography variant='h2' component='h1'>
							Suits
						</Typography>
						<Divider width='10%' color={theme.palette.grey[400]} />
						<Divider width='5%' color={theme.palette.grey[400]} />
					</Stack>
				)
				break
			default:
				return <div />

				break
		}
	}

	const headTitle = (value) => {
		switch (value) {
			case 'jackets':
				return 'Jackets'
				break
			case 'hoodies':
				return 'Hoodies'
				break
			case 'suits':
				return 'Suits'
				break
			default:
				return ''

				break
		}
	}

	return (
		<MainLayout>
			<Page title={headTitle(slug) + ' - For Men - markd'}>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							{pageTitle(slug)}
						</Grid>
						<Grid item xs={12} sx={{ margin: theme.spacing(3) }}>
							<Grid
								container
								spacing={2}
								sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }}
							>
								<Grid item xs={12} md={2}>
									<Typography variant='h5'>Sort by</Typography>
								</Grid>

								<Grid item xs={6} md={2}>
									<Chip
										label='Newest Addition'
										icon={<AddOutlinedIcon />}
										color={sortBy === 'Newest Addition' ? 'primary' : 'default'}
										onClick={() => sortByNew('Newest Addition')}
									/>
								</Grid>
								<Grid item xs={6} md={2}>
									<Chip
										label='Highest Price'
										icon={<ArrowUpwardOutlinedIcon />}
										color={sortBy === 'Highest Price' ? 'primary' : 'default'}
										onClick={() => sortByHighPrice('Highest Price')}
									/>
								</Grid>
								<Grid item xs={6} md={2}>
									<Chip
										label='Lowest Price'
										icon={<ArrowDownwardOutlinedIcon />}
										color={sortBy === 'Lowest Price' ? 'primary' : 'default'}
										onClick={() => sortByLowPrice('Lowest Price')}
									/>
								</Grid>
							</Grid>
						</Grid>
						{router.isFallback
							? SkeletonLoad
							: data.map((option, index) => (
									<Grid item xs={6} sm={4} key={index}>
										<div>
											<div>
												<CardActionArea
													onClick={() => router.push(`/p/${option.id}`)}
												>
													<Box sx={{ position: 'relative', display: 'block' }}>
														<Image
															src={option.image}
															alt={option.name}
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
														sx={{ mt: theme.spacing(1) }}
													>
														<Typography variant='subtitle1'>
															{option.name}
														</Typography>
														<Typography variant='body2'>
															{option.owner}
														</Typography>
													</Stack>
												</CardActionArea>
												<Stack direction='row' justifyContent='space-between'>
													<Typography
														variant='body2'
														sx={{ mt: theme.spacing(1.5) }}
													>
														{option.price} NOK
													</Typography>

													{!user ? (
														<Tooltip title='Log in to save favorites'>
															<IconButton>
																<FavoriteBorderOutlinedIcon />
															</IconButton>
														</Tooltip>
													) : favorites.includes(option.id) ? (
														<IconButton
															onClick={() => removeFromFavorites(option.id)}
															color='error'
														>
															<FavoriteIcon color='error' />
														</IconButton>
													) : (
														<IconButton
															onClick={() => updateFavorites(option.id)}
														>
															<FavoriteBorderOutlinedIcon />
														</IconButton>
													)}
												</Stack>
											</div>
										</div>
									</Grid>
							  ))}
					</Grid>
				</Container>
			</Page>
		</MainLayout>
	)
}

export async function getStaticPaths() {
	const paths = [
		{ params: { slug: 'jackets' } },
		{ params: { slug: 'hoodies' } },
		{ params: { slug: 'suits' } },
	]

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const data = []

	const querySnapshot = await firebase
		.firestore()
		.collection('products')
		.where(
			'query_filters',
			'array-contains',
			`for_men-${params.slug.toLowerCase()}`
		)
		.limit(199)
		.get()
	querySnapshot.forEach((doc) => {
		let postDoc = doc.data()
		const addDocDetails = Object.assign(postDoc, { id: doc.id })
		data.push(addDocDetails)
	})

	const slug = params.slug

	// By returning { props: { data } }, the Blog component
	// will receive `data` as a prop at build time
	return {
		props: {
			data,
			slug,
		},
	}
}
