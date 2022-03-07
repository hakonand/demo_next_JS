// material
import {
	Typography,
	Grid,
	Box,
	Button,
	Divider,
	TextField,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Card,
	CardHeader,
	CardContent,
	DialogContent,
	DialogActions,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

import Image from 'next/image'

// hooks
// components

// ----------------------------------------------------------------------
const ProductImgStyle = styled('img')({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
})

export default function CartShipping({
	myCart,
	buyerAdress,
	setBuyerAdress,
	buyerZip,
	setBuyerZip,
	buyerCity,
	setBuyerCity,
	buyerEmail,
	setBuyerEmail,
	step,
	setStep,
}) {
	const theme = useTheme()

	return (
		<DialogContent sx={{ pb: 0, overflowY: 'unset', mt: theme.spacing(2) }}>
			<Grid container spacing={3} justifyContent='center'>
				<Grid item xs={12} sm={10}>
					<TextField
						label='Epost'
						autoComplete='email'
						fullWidth
						value={buyerEmail}
						onChange={(e) => setBuyerEmail(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={10}>
					<TextField
						fullWidth
						autoComplete='street-address'
						label='Adress'
						value={buyerAdress}
						onChange={(e) => setBuyerAdress(e.target.value)}
					/>
				</Grid>
				<Grid item xs={6} sm={5}>
					<TextField
						label='Postnummer'
						autoComplete='postal-code'
						fullWidth
						value={buyerZip}
						onChange={(e) => setBuyerZip(e.target.value)}
					/>
				</Grid>
				<Grid item xs={6} sm={5}>
					<TextField
						label='Sted'
						autoComplete='address-level2'
						fullWidth
						value={buyerCity}
						onChange={(e) => setBuyerCity(e.target.value)}
					/>
				</Grid>
				{myCart.map((cartItem) => (
					<Grid item xs={12} md={4}>
						<Card>
							<CardHeader title={`Shipping from ${cartItem.merchantId}`} />
							<CardContent>
								<FormControl component='fieldset' sx={{ mb: theme.spacing(1) }}>
									<FormLabel component='legend'>
										Select Shipping for these items
									</FormLabel>
									<RadioGroup
										aria-label={`Shipping from ${cartItem.merchantId}`}
										name={`Shipping from ${cartItem.merchantId}`}
									>
										<FormControlLabel
											value='Click&Collect'
											control={<Radio />}
											label='Click & Collect'
											aria-label='Click & Collect'
										/>
										<FormControlLabel
											value='Delivery'
											control={<Radio />}
											label='Delivery'
											aria-label='Delivery'
										/>
										<FormControlLabel
											value='Shipping'
											control={<Radio />}
											label='Shipping'
											aria-label='Shipping'
										/>
									</RadioGroup>
								</FormControl>
								<Divider
									variant='middle'
									sx={{
										mt: theme.spacing(1),
										mb: theme.spacing(1),
										width: '90%',
									}}
								/>

								<Grid container spacing={2} key={cartItem.id}>
									{cartItem.productArray.map((product) => (
										<Grid item xs={12} key={product.productName}>
											<Grid container spacing={2}>
												<Grid item xs={4} sm={3}>
													<Box sx={{ pt: '100%', position: 'relative' }}>
														<Image
															layout='fill'
															src={product.img}
															placeholder='blur'
															loading='lazy'
															blurDataURL={product.img}
														/>
													</Box>
												</Grid>
												<Grid item xs={6}>
													<Typography variant='subtitle2'>
														{product.productName}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									))}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			<DialogActions>
				<Button
					onClick={() => setStep(step - 1)}
					type='button'
					variant='outlined'
					color='inherit'
				>
					Go Back
				</Button>
				<Box sx={{ flexGrow: 1 }} />
				<Button
					type='button'
					variant='contained'
					size='large'
					onClick={() => setStep(step + 1)}
					sx={{
						backgroundColor: theme.palette.success.light,

						padding: theme.spacing(1),
					}}
				>
					Go to Payment
				</Button>
			</DialogActions>
		</DialogContent>
	)
}
