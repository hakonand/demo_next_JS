import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// material

import { useTheme } from '@mui/material/styles'

import {
	Grid,
	Typography,
	CardActionArea,
	Box,
	Stack,
	Button,
} from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

// components

import BuyerSideRowOf3 from 'src/components/BuyerSideLandingcc/BuyerSideRowOf3'
import firebase from 'src/firebase/firebase'

import Page from 'src/components/Page'

import BuyerSideHighlight from 'src/components/BuyerSideLandingcc/BuyerSideHighlight'
import BuyerSideHighlightRow from 'src/components/BuyerSideLandingcc/BuyerSideHighlightRow'
import StorefrontHeader from 'src/components/Storefront/StorefrontHeader'
import StorefrontCategories from 'src/components/Storefront/StorefrontCategories'
import StorefrontProductSection from 'src/components/Storefront/StorefrontProductSection'

import MainLayout from 'src/layouts/main'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Storefront({ data }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const theme = useTheme()

	const [posts, setPosts] = useState([])

	useEffect(() => {
		setIsLoading(true)
		firebase
			.firestore()
			.collection('merchants')
			.doc('clarkesbodø')
			.collection('posts')
			.limit(6)
			.get()
			.then((querySnapshot) => {
				const newArray = []
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					newArray.push(doc.data())
				})
				setPosts(newArray)
				setIsLoading(false)
			})
	}, [])

	const [hasMorePost, setHasMorePost] = useState(true)

	useEffect(() => {
		firebase
			.firestore()
			.collection('posts')
			.where('author', '==', 'StoreName')
			.orderBy('dateCreated', 'desc')
			.limit(40)
			.get()
			.then((querySnapshot) => {
				const newArray = [...posts]

				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					let postDoc = doc.data()
					const addDocDetails = Object.assign(postDoc, { id: doc.id })

					newArray.push(addDocDetails)
					console.log(addDocDetails)
				})
				setPosts(newArray)
			})

		console.log('POSTS', posts)
	}, [])

	const [subCategories, setSubCategories] = useState([])
	const [products, setProducts] = useState([])

	const [getProducts, setGetProducts] = useState(false)

	useEffect(() => {
		const subcategoriesInfo = []
		firebase
			.firestore()
			.collection('merchants')
			.doc('clarkesbodø')
			.collection('for_men')
			.limit(40)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					if (doc.data().product_amount > 0) {
						const subCatproductArray = []
						let document = doc.data()

						firebase
							.firestore()
							.collection('products')
							.where('query_filters', 'array-contains', document.slug)
							.limit(8)
							.get()
							.then((querySnapshot) => {
								querySnapshot.forEach((doc) => {
									subCatproductArray.push(doc.data())
								})
								console.log('inUseffect--', subCatproductArray)
							})
						subcategoriesInfo.push({ document, products: subCatproductArray })
					}
				})
				setSubCategories(subcategoriesInfo)
				setGetProducts(false)
			})

		console.log('SUBCATEGORIES', subCategories)
	}, [])

	useEffect(() => {
		const productArray = []
		firebase
			.firestore()
			.collection('merchants')
			.doc(data.query_name)
			.collection('products')
			.limit(8)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					productArray.push(doc.data())
				})
				setProducts(productArray)
			})

		console.log('------->', productArray)
	}, [])

	return (
		<MainLayout>
			<Page title={data.query_name + ' - markd'} sx={{ height: '100%' }}>
				<StorefrontHeader data={data} />
				<StorefrontCategories
					subcategory={subCategories}
					queryName={data.query_name}
				/>

				<StorefrontProductSection products={products} header='Nyheter' />

				{subCategories.map((item, index) => (
					<StorefrontProductSection
						products={item.products}
						key={item.document.slug}
						header={item.document.name}
					/>
				))}

				<Button onClick={() => console.log(posts)}>TEST</Button>

				<Grid
					container
					spacing={{ xs: 2, sm: 3 }}
					sx={{
						p: theme.spacing(1),
					}}
				>
					{posts.map((item, index) => (
						<Grid item xs={12} sm={4} key={item.id}>
							<Link href={`/post/${item.id}`}>
								<CardActionArea>
									<Box
										sx={{
											position: 'relative',
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
									<Stack
										direction='column'
										spacing={1}
										sx={{ mt: theme.spacing(2) }}
									>
										<Typography variant='subtitle1'>{item.title}</Typography>
										<Typography variant='body2'>
											{item.descr.substring(0, 150)} ...
										</Typography>
									</Stack>
								</CardActionArea>
							</Link>
						</Grid>
					))}
				</Grid>
			</Page>
		</MainLayout>
	)
}

export async function getStaticPaths() {
	const paths = []

	const querySnapshot = await firebase
		.firestore()
		.collection('merchants')
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				paths.push({ params: { slug: doc.id.toString() } })
			})
		})

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library

	let data = {}

	const res = await firebase
		.firestore()
		.collection('merchants')
		.doc(params.slug)
		.collection('info')
		.doc('general')
		.get()
		.then((doc) => {
			data = doc.data()
			console.log('DATA')
			console.log(data)
		})

	// By returning { props: { data } }, the Blog component
	// will receive `data` as a prop at build time
	return {
		props: {
			data,
		},
	}
}

// <InfiniteScroll
// next={getMorePosts}
// hasMore={hasMorePost}
// loader={<Typography variant='h6'>Loading more...</Typography>}
// endMessage={<Typography variant='h6'>No more posts</Typography>}
// dataLength={posts.length}
// style={{ overflow: 'hidden' }}
// >

// const getMorePosts = () => {
// 	const newArray = [...posts]
// 	console.log('aids')
// 	console.log(posts[posts.length - 1])
// 	firebase
// 		.firestore()
// 		.collection('merchants')
// 		.doc(data.query_name)
// 		.collection('posts')
// 		.orderBy('dateCreated', 'desc')
// 		.startAfter(posts[posts.length - 1])
// 		.limit(1)
// 		.get()
// 		.then((querySnapshot) => {
// 			console.log(querySnapshot.docs)
// 			if (querySnapshot.empty) {
// 				setHasMorePost(false)
// 			} else {
// 				querySnapshot.forEach((doc) => {
// 					// doc.data() is never undefined for query doc snapshots
// 					newArray.push(doc.data())
// 				})
// 				console.log(newArray.length)

// 				setPosts(newArray)
// 			}
// 		})
// 		.catch((error) => {
// 			console.log('Error getting document:', error)
// 		})
// }
