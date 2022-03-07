import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// material
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	Stack,
	IconButton,
	Button,
} from '@mui/material'
import { useTheme, styled, alpha } from '@mui/material/styles'
import Image from 'next/image'

// hooks
// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
import firebase from 'src/firebase/firebase'

import ViewProductDetailsCarousel from 'src/components/view-product-details/ViewProductDetailsCarousel'
import ViewProductDetailsSummary from 'src/components/view-product-details/ViewProductDetailsSumary'

// ----------------------------------------------------------------------

export default function PageViewProduct({ data, slug }) {
	const theme = useTheme()
	const router = useRouter()

	const createGradientRight = (color1, color2) => {
		return `linear-gradient(to bottom, ${color1}, ${color2})`
	}
	const IconWrapperStyle = styled('div')(({ theme }) => ({
		margin: 'auto',
		display: 'flex',
		borderRadius: '50%',
		alignItems: 'center',
		width: theme.spacing(8),
		justifyContent: 'center',
		height: theme.spacing(8),
		marginBottom: theme.spacing(3),
		color: theme.palette.primary.main,
		backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
	}))
	const [value, setValue] = useState(1)

	return (
		<MainLayout>
			<Head>
				<meta property='og:title' content={data.name} key={data.name} />
				<meta name='description' content={data.description} key='description' />
				<meta
					name='og:description'
					content={data.description}
					key={data.description}
				/>
				<meta name='og:image' content={data.image} />
			</Head>
			{data ? (
				<Page title={`${data.name} - ${data.owner} - markd`}>
					<Container>
						<Grid container sx={{ mt: theme.spacing(5) }}>
							<Grid item xs={12} md={6} lg={7}>
								<ViewProductDetailsCarousel productImages={data.imageArray} />
							</Grid>
							<Grid item xs={12} md={6} lg={5}>
								<ViewProductDetailsSummary
									productName={data.name}
									productPrice={data.price}
									productSizes={data.sizes}
									ownerQueryName={data.owner_query_name}
									productColors={data.colors}
									productInventoryType={data.inventoryType}
									productStatus={data.status}
									productDescription={data.description}
									productAvaiable={data.avaiable}
									productOwner={data.owner}
									value={value}
									setValue={setValue}
									slug={slug}
								/>
							</Grid>
						</Grid>
					</Container>
					<Grid
						container
						spacing={3}
						mt={5}
						p={3}
						pb={5}
						direction='column'
						sx={{
							background: createGradientRight(
								theme.palette.common.black,
								theme.palette.grey[800]
							),
						}}
					>
						<Grid item xs={12} p={2}>
							<Stack
								direction='column'
								justifyContent='center'
								alignItems='center'
								spacing={3}
								sx={{ height: '100%', width: '100%' }}
								textAlign='center'
							>
								<Typography variant='h5' color={theme.palette.common.white}>
									Check out more from <br /> {data.owner}
								</Typography>

								<Button
									variant='contained'
									color='primary'
									size='large'
									endIcon={<ChevronRightIcon />}
									onClick={() =>
										router.push('/dashboard/storefront/clarkesbodø')
									}
								>
									Go to {data.owner}
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Page>
			) : (
				<div />
			)}
		</MainLayout>
	)
}

export async function getStaticPaths() {
	const paths = []

	const querySnapshot = await firebase
		.firestore()
		.collection('products')
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				paths.push({ params: { slug: doc.id } })
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
		.collection('products')
		.doc(params.slug)
		.get()
		.then((doc) => {
			data = doc.data()

			console.log(doc.data())
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
