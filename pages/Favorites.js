import { useState, useContext, useEffect } from 'react'

import {
	Container,
	Typography,
	Button,
	Grid,
	CardActionArea,
	Stack,
	Box,
	IconButton,
	Divider,
} from '@mui/material'
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useRouter } from 'next/router'

// components
import Page from 'src/components/Page'
import MainLayout from 'src/layouts/main'
import { AuthContext } from 'src/contexts/AuthContext'
import firebase from 'src/firebase/firebase'

// ----------------------------------------------------------------------

export default function Favorites() {
	const { user, favorites, removeFromFavorites, userInfo } =
		useContext(AuthContext)

	const theme = useTheme()

	const router = useRouter()

	const [products, setProducts] = useState([])

	useEffect(() => {
		const productArray = []

		if (user) {
			console.log(favorites)
			favorites.map((item, index) => {
				firebase
					.firestore()
					.collection('products')
					.doc(item.toString())
					.get()
					.then((doc) => {
						let postDoc = doc.data()
						const addDocDetails = Object.assign(postDoc, { id: doc.id })
						productArray.push(postDoc)
						console.log(addDocDetails)
					})
					.catch((error) => {
						console.log(item, error)
					})
			})
		}
		setProducts(productArray)

		console.log(products)
	}, [])

	const handleRemoveFromFavorites = (productId) => {
		removeFromFavorites(productId)
		let newArray = products.filter((v) => v.id != productId)
		setProducts(newArray)
	}

	return (
		<MainLayout>
			<Page title='Favorites | markd'>
				<Grid container spacing={1}>
					<Grid item xs={12} mb={5}>
						<Stack
							justifyContent='center'
							alignItems='center'
							direction='column'
							spacing={1}
							mt={4}
						>
							<Typography variant='h2' component='h1'>
								Favorites
							</Typography>
							<Divider width='10%' color={theme.palette.grey[400]} />
							<Divider width='5%' color={theme.palette.grey[400]} />
						</Stack>
					</Grid>
					{user === null ? (
						<Grid item xs={12}>
							<Stack
								justifyContent='center'
								alignItems='center'
								direction='column'
								spacing={1}
								mt={4}
							>
								<Typography variant='subtitle1'>
									you are not logged in
								</Typography>
							</Stack>
						</Grid>
					) : (
						products.map((option, index) => (
							<Grid item xs={6} sm={4} key={index}>
								<CardActionArea onClick={() => router.push(`/p/${option.id}`)}>
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
										<Typography variant='subtitle1'>{option.name}</Typography>
										<Typography variant='body2'>{option.owner}</Typography>
									</Stack>
								</CardActionArea>
								<Stack direction='row' justifyContent='space-between'>
									<Typography variant='body2' sx={{ mt: theme.spacing(1.5) }}>
										{option.price} NOK
									</Typography>
									{favorites.includes(option.id) ? (
										<IconButton
											onClick={() => handleRemoveFromFavorites(option.id)}
											color='error'
										>
											<FavoriteIcon color='error' />
										</IconButton>
									) : (
										<IconButton onClick={() => updateFavorites(option.id)}>
											<FavoriteBorderOutlinedIcon />
										</IconButton>
									)}
								</Stack>
							</Grid>
						))
					)}

					<Button onClick={() => console.log(userInfo)}>log out</Button>
				</Grid>
			</Page>
		</MainLayout>
	)
}

// () => console.log(userInfo)
