import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// material
import {
	Container,
	Typography,
	Box,
	Grid,
	CardActionArea,
	Stack,
	IconButton,
	Button,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Image from 'next/image'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

// hooks
// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
import firebase from 'src/firebase/firebase'

// ----------------------------------------------------------------------

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

export default function PageViewPost({ data }) {
	const theme = useTheme()
	const router = useRouter()

	return (
		<MainLayout>
			<Head>
				<meta property='og:title' content={data.title} key={data.title} />
				<meta name='description' content={data.descr} key='description' />
				<meta name='og:description' content={data.descr} key={data.descr} />
				<meta name='og:image' content={data.image} />
			</Head>
			{data ? (
				<Page title={`${data.title} - ${data.author} - markd`}>
					<Container>
						<Grid
							container
							spacing={2}
							pt={1}
							justifyContent='center'
							alignItems='center'
						>
							<Grid item xs={12} sm={6}>
								<Stack
									sx={{
										display: 'block',
										margin: 'auto',
									}}
								>
									<Image
										src={data.image}
										alt={data.title}
										layout='responsive'
										priority='true'
										quality='100'
										height='1080'
										width='1080'
									/>
								</Stack>
							</Grid>

							<Grid
								item
								xs={12}
								sm={10}
								md={8}
								mt={4}
								justifyContent='center'
								alignItems='center'
							>
								<Typography variant='h2' component='h1' paragraph>
									{data.title}
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								sm={10}
								md={8}
								justifyContent='center'
								alignItems='center'
							>
								<Typography variant='body1'>{data.descr}</Typography>
							</Grid>
						</Grid>

						{data.productLines.map((item, index) => (
							<Grid container spacing={2} mt={2} key={index}>
								<Grid item xs={12} key={index}>
									<Typography variant='body1'>
										{item.productLineDescr}
									</Typography>
								</Grid>
								{item.productLines.map((item, index) => (
									<Grid item xs={6} sm={4} md={3} key={index}>
										<div>
											<div>
												<CardActionArea>
													<Box sx={{ position: 'relative', display: 'block' }}>
														<Image
															src={item.image}
															alt={item.title}
															layout='responsive'
															quality='100'
															height='100vw'
															width='100vw'
														/>
													</Box>

													<Stack
														direction={{ xs: 'column', md: 'row' }}
														justifyContent='space-between'
														sx={{ mb: theme.spacing(1), mt: theme.spacing(1) }}
													>
														<Typography variant='subtitle1'>
															{item.name}
														</Typography>
														<Typography variant='body2'>
															{item.owner_name} {item.place}
														</Typography>
													</Stack>
												</CardActionArea>
												<Stack
													direction='row'
													justifyContent='space-between'
													sx={{ mb: theme.spacing(1), mt: theme.spacing(1) }}
												>
													<Typography variant='body2'>
														{item.price} NOK
													</Typography>
													<IconButton sx={{ mr: theme.spacing(1) }}>
														<FavoriteBorderOutlinedIcon />
													</IconButton>
												</Stack>
											</div>
										</div>
									</Grid>
								))}
							</Grid>
						))}
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
							>
								<Typography variant='h5' color={theme.palette.common.white}>
									Check out more from StoreName
								</Typography>

								<Button
									variant='contained'
									color='primary'
									size='large'
									startIcon={<ChevronRightIcon />}
									onClick={() =>
										router.push('/dashboard/storefront/clarkesbodø')
									}
								>
									Go to StoreName
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
		.collection('posts')
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
		.collection('posts')
		.doc(params.slug)
		.get()
		.then((doc) => {
			data = doc.data()
			console.log(doc.data())
		})

	// By returning { props: { data } }, the Blog component
	// will receive `data` as a prop at build time
	return {
		props: {
			data,
		},
	}
}
