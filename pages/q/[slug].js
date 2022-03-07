import { useState, useEffect } from 'react'

// material
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
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
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'

// hooks
import firebase from 'src/firebase/firebase'
// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
// ----------------------------------------------------------------------

const myLoader = ({ src, width, quality }) => {
	return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function PageQuery() {
	const theme = useTheme()

	const [sortBy, setSortBy] = useState('Reccomended')
	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()
	const { slug } = router.query

	const onClickSortChip = (value) => {
		setSortBy(value)
		console.log(isLoadingProducts)
		console.log(slug)
	}

	const [products, setProducts] = useState([])
	const [ready, setReady] = useState(false)
	const [isLoadingProducts, setIsLoadingProducts] = useState(true)

	// hvis du bytter til slug i firebase query blir det undefined

	useEffect(() => {
		const getProducts = async () => {
			const productArray = []
			firebase
				.firestore()
				.collection('products')
				.where('query_filters', 'array-contains', slug)
				.limit(40)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						productArray.push(doc.data())
					})
					setIsLoadingProducts(false)
					console.log(slug)
					setProducts(productArray)
					console.log(productArray)
				})
		}

		if (slug) {
			getProducts()
		}
	}, [slug])

	return (
		<MainLayout>
			<Page title='markd'>
				<Container>
					<Grid container spacing={3}>
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
										label='Reccomended'
										icon={<WhatshotOutlinedIcon />}
										color={sortBy === 'Reccomended' ? 'primary' : 'default'}
										onClick={() => onClickSortChip('Reccomended')}
									/>
								</Grid>
								<Grid item xs={6} md={2}>
									<Chip
										label='Newest Addition'
										icon={<AddOutlinedIcon />}
										color={sortBy === 'Newest Addition' ? 'primary' : 'default'}
										onClick={() => onClickSortChip('Newest Addition')}
									/>
								</Grid>
								<Grid item xs={6} md={2}>
									<Chip
										label='Highest Price'
										icon={<ArrowDownwardOutlinedIcon />}
										color={sortBy === 'Highest Price' ? 'primary' : 'default'}
										onClick={() => onClickSortChip('Highest Price')}
									/>
								</Grid>
								<Grid item xs={6} md={2}>
									<Chip
										label='Lowest Price'
										icon={<ArrowUpwardOutlinedIcon />}
										color={sortBy === 'Lowest Price' ? 'primary' : 'default'}
										onClick={() => onClickSortChip('Lowest Price')}
									/>
								</Grid>
							</Grid>
						</Grid>

						{isLoadingProducts ? (
							<div />
						) : (
							products.map((option, index) => (
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
													<Typography variant='subtitle1'>
														{option.name}
													</Typography>
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
												<Typography variant='body2'>
													{option.price} NOK
												</Typography>
												<IconButton sx={{ mr: theme.spacing(1) }}>
													<FavoriteBorderOutlinedIcon />
												</IconButton>
											</Stack>
										</div>
									</div>
								</Grid>
							))
						)}
					</Grid>
				</Container>
			</Page>
		</MainLayout>
	)
}

// if (!router.isReady) {
// 	console.log('SLUG')

// 	let filter = router.query.slug
// 	console.log(slug)
// 	setReady(true)
// 	console.log(ready)
// 	console.log(filter)
// 	getProducts()
// } else {
// 	setIsLoadingProducts(true)
// }
