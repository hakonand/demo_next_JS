import { useState, useContext, useEffect } from 'react'
import { Icon } from '@iconify/react'
import plusFill from '@iconify/icons-eva/plus-fill'
import minusFill from '@iconify/icons-eva/minus-fill'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useRouter } from 'next/router'
import roundAddShoppingCart from '@iconify/icons-ic/round-add-shopping-cart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

// material
import { useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Grid,
	Link,
	Button,
	Snackbar,
	Alert,
	Tooltip,
	Divider,
	FormControl,
	Typography,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material'
// routes
// utils
//
import { MIconButton } from '../@material-extend'

import { AuthContext } from 'src/contexts/AuthContext'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(3),
	[theme.breakpoints.up(1368)]: {
		padding: theme.spacing(5, 8),
	},
}))

//     <Label
//        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
//       color={productInventoryType === 'in_stock' ? 'success' : 'error'}
//       sx={{ textTransform: 'uppercase' }}
//     >
//       {sentenceCase(productInventoryType)}
//    </Label>
//    <Typography
//      variant="overline"
//      sx={{
//        mt: 2,
//        mb: 1,
//        display: 'block',
//         color: productStatus === 'sale' ? 'error.main' : 'info.main'
//      }}
//    >
//      {productStatus}
//    </Typography>

// ----------------------------------------------------------------------

export default function ViewProductDetailsSummary({
	productName,
	productPrice,
	productColors,
	productSizes,
	productInventoryType,
	productStatus,
	productAvaiable,
	productOwner,
	productDescription,
	ownerQueryName,
	value,
	setValue,
	productImage,
	data,
	slug,
	...other
}) {
	const theme = useTheme()

	const router = useRouter()

	const [showMore, setShowMore] = useState(true)

	const [qty, setQty] = useState(1)

	const [selectedSize, setSelectedSize] = useState('')

	const [openSnackBar, setOpenSnackBar] = useState(false)

	useEffect(() => {
		setSelectedSize(data.sizes[0])
	}, [])

	const {
		user,
		updateFavorites,
		favorites,
		removeFromFavorites,
		updateCart,
		userInfo,
	} = useContext(AuthContext)

	const handleAddCart = () => {
		updateCart(slug, qty, selectedSize, data)
		setOpenSnackBar(true)
	}

	const handleCloseSnackbar = () => {
		setOpenSnackBar(false)
	}

	const Incrementer = () => {
		// eslint-disable-next-line react/prop-types

		const incrementQuantity = () => {
			setQty(qty + 1)
			console.log(qty)
		}
		const decrementQuantity = () => {
			if (qty > 0) {
				setQty(qty - 1)
				console.log(qty)
			}
		}

		return (
			<Box
				sx={{
					py: 0.5,
					px: 0.75,
					border: 1,
					lineHeight: 0,
					borderRadius: 1,
					display: 'flex',
					alignItems: 'center',
					borderColor: 'grey.50032',
				}}
			>
				<MIconButton size='small' color='inherit' onClick={decrementQuantity}>
					<Icon icon={minusFill} width={16} height={16} />
				</MIconButton>
				<Typography
					variant='body2'
					component='span'
					sx={{
						width: 40,
						textAlign: 'center',
						display: 'inline-block',
					}}
				>
					{qty}
				</Typography>
				<MIconButton size='small' color='inherit' onClick={incrementQuantity}>
					<Icon icon={plusFill} width={16} height={16} />
				</MIconButton>
			</Box>
		)
	}

	return (
		<RootStyle {...other}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant='h5'>{data.name}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography paragraph variant='overline' color='text.secondary'>
						{data.owner}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant='subtitle1'>
						{data.price.toLocaleString('en-US', {
							style: 'currency',
							currency: 'NOK',
						})}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>Size</InputLabel>

						<Select
							value={selectedSize}
							label='size'
							onChange={(e) => setSelectedSize(e.target.value)}
							fullWidth
						>
							{data.sizes.map((size) => (
								<MenuItem key={size} value={size}>
									{size}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='subtitle1' sx={{ mt: 0.5 }}>
						Description
					</Typography>
				</Grid>
				<br />
				{showMore ? (
					<Grid item xs={12}>
						{data.description.substring(0, 100)} ...
						<Button
							type='text'
							color='secondary'
							onClick={() => setShowMore(!showMore)}
						>
							Read more
						</Button>
					</Grid>
				) : (
					<Grid item xs={12}>
						{data.description}
						<Button
							type='text'
							color='secondary'
							onClick={() => setShowMore(!showMore)}
						>
							Read less
						</Button>
					</Grid>
				)}

				<Grid
					item
					xs={12}
					sx={{
						mb: 3,
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant='subtitle1' sx={{ mt: 0.5 }}>
						Quantity
					</Typography>

					<Incrementer name='quantity' available={productAvaiable} />
				</Grid>

				<Grid item xs={12}>
					<Button
						fullWidth
						size='large'
						type='button'
						variant='contained'
						startIcon={<Icon icon={roundAddShoppingCart} />}
						onClick={handleAddCart}
						sx={{ my: theme.spacing(3) }}
					>
						Add to Cart
					</Button>
				</Grid>
				<Snackbar
					open={openSnackBar}
					autoHideDuration={5000}
					onClose={handleCloseSnackbar}
					anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
					severity='success'
				>
					<Alert
						onClose={handleCloseSnackbar}
						severity='success'
						sx={{ textColor: '#FFFFF', width: '100%' }}
						color='primary'
					>
						Added to cart
					</Alert>
				</Snackbar>
				<Grid item xs={12}>
					{user === null ? (
						<Button
							fullWidth
							size='large'
							type='button'
							variant='contained'
							disabled
							color='error'
							startIcon={<FavoriteBorderIcon />}
						>
							Log in to favorite
						</Button>
					) : favorites.includes(slug) ? (
						<Button
							fullWidth
							size='large'
							type='button'
							variant='outlined'
							color='error'
							startIcon={<FavoriteBorderIcon />}
							onClick={() => removeFromFavorites(slug, 1)}
						>
							Remove from favorites
						</Button>
					) : (
						<Button
							fullWidth
							size='large'
							type='button'
							variant='contained'
							color='error'
							startIcon={<FavoriteBorderIcon />}
							onClick={() => updateFavorites(slug)}
						>
							Add to Favorites
						</Button>
					)}
				</Grid>
			</Grid>
		</RootStyle>
	)
}

// <Divider sx={{ borderStyle: 'dashed' }} />

// 			<Box
// 				sx={{
// 					my: 3,
// 					display: 'flex',
// 					justifyContent: 'space-between',
// 				}}
// 			>
// 				<Typography variant='subtitle1' sx={{ mt: 0.5 }}>
// 					Color
// 				</Typography>
// 				<TextField
// 					select
// 					size='small'
// 					SelectProps={{ native: true }}
// 					FormHelperTextProps={{
// 						sx: {
// 							textAlign: 'right',
// 							margin: 0,
// 							mt: 1,
// 						},
// 					}}
// 				>
// 					{productColors.map((color) => (
// 						<option key={color} value={color}>
// 							{color}
// 						</option>
// 					))}
// 				</TextField>
// 			</Box>
