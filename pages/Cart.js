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
								Cart
							</Typography>
							<Divider width='10%' color={theme.palette.grey[400]} />
							<Divider width='5%' color={theme.palette.grey[400]} />
						</Stack>
					</Grid>

					<Button onClick={() => console.log(cart)}>log out</Button>
				</Grid>
			</Page>
		</MainLayout>
	)
}

// () => console.log(userInfo)
