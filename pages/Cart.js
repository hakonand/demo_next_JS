import { useState, useContext, useEffect, useReducer } from 'react'

import {
	Container,
	Typography,
	Button,
	Grid,
	CardActionArea,
	Stack,
	Box,
	IconButton,
	Tooltip,
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
	const { user, logoutUser, favorites, removeFromFavorites, cart } =
		useContext(AuthContext)

	const theme = useTheme()

	const router = useRouter()

	const [products, setProducts] = useState([])

	useEffect(() => {
		console.log(cart)
	}, [])

	return (
		<MainLayout>
			<Page title='cart | markd'>
				<Grid container spacing={1} p={3}>
					<Grid item xs={12} mb={5}>
						<Stack
							justifyContent='center'
							alignItems='center'
							direction='column'
							spacing={1}
							mt={4}
						>
							<Typography variant='h2' component='h1'>
								Cart
							</Typography>
							<Divider width='10%' color={theme.palette.grey[400]} />
							<Divider width='5%' color={theme.palette.grey[400]} />
						</Stack>
					</Grid>

					<Grid container spacing={2}>
						{cart.map((item, index) => (
							<Grid container spacing={2} mt={5} key={item.ownerId}>
								<Grid item xs={12}>
									<Stack alignItems='center' justifyContent='center'>
										<Typography variant='h6'>
											Shop from {item.ownerName}
										</Typography>
									</Stack>
								</Grid>

								{item.products.map((option, index) => (
									<Grid item xs={6} sm={4} key={index}>
										<CardActionArea
											onClick={() => router.push(`/p/${option.id}`)}
										>
											<Box sx={{ position: 'relative', display: 'block' }}>
												<Image
													src={option.image}
													alt={option.name}
													layout='intrinsic'
													width={500}
													height={500}
													quality='100'
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
												<Typography variant='body2'>{option.owner}</Typography>
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
												<IconButton onClick={() => updateFavorites(option.id)}>
													<FavoriteBorderOutlinedIcon />
												</IconButton>
											)}
										</Stack>
									</Grid>
								))}
								<Grid item xs={12}>
									<Stack alignItems='center' justifyContent='center'>
										<Button
											variant='contained'
											color='success'
											size='large'
											onClick={() => console.log(cart)}
										>
											Check out from {item.ownerName}
										</Button>
									</Stack>
								</Grid>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Page>
		</MainLayout>
	)
}

// () => console.log(userInfo)
