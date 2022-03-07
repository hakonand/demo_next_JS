// material
import {
	Typography,
	Grid,
	Stack,
	Box,
	Button,
	DialogContent,
	Divider,
	ButtonGroup,
	DialogActions,
} from '@mui/material'
import Image from 'next/image'

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useTheme, styled } from '@mui/material/styles'

// hooks
// components

// ----------------------------------------------------------------------

export default function CartItems({
	myCart,
	subtotal,
	TAX_RATE,
	totalSum,
	step,
	setStep,
	openCartModal,
	setOpenCartModal,
	cart,
}) {
	const theme = useTheme()

	return (
		<DialogContent sx={{ pb: 0, overflowY: 'unset', mt: theme.spacing(2) }}>
			{myCart.map((cartItem) => (
				<Grid container spacing={2} key={cartItem.id}>
					<Grid item xs={12}>
						<Typography variant='subtitle1'>
							Items from {cartItem.merchantId}
						</Typography>
					</Grid>
					{cartItem.productArray.map((product) => (
						<Grid item xs={12} md={6} key={product.productName}>
							<Grid container spacing={2}>
								<Grid item xs={12} md={6}>
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
								<Grid item xs={12} md={6}>
									<Stack
										direction='column'
										justifyContent='space-evenly'
										alignItems='flex-start'
										spacing={2}
									>
										<Typography variant='subtitle1'>
											{product.productName}
										</Typography>
										<Typography variant='body2'>
											{product.productPrice} NOK
										</Typography>
									</Stack>
								</Grid>
							</Grid>
						</Grid>
					))}
					<Grid item xs={12} my={4}>
						<Stack justifyContent='center' alignItems='center'>
							<Button variant='contained' size='large'>
								Check out with merchant{' '}
							</Button>
						</Stack>
					</Grid>
					<Divider
						variant='middle'
						sx={{ mt: theme.spacing(1), mb: theme.spacing(1), width: '90%' }}
					/>
				</Grid>
			))}

			<Grid item xs={12}>
				<Stack direction='column' justifyContent='space-between'>
					<Stack
						direction='row'
						justifyContent='flex-end'
						sx={{ paddingRight: theme.spacing(2), pt: theme.spacing(1) }}
					>
						<Typography variant='body2' sx={{ mr: theme.spacing(2) }}>
							Subtotal
						</Typography>
						<Typography variant='body2'>1337</Typography>
					</Stack>
					<Stack
						direction='row'
						justifyContent='flex-end'
						sx={{ paddingRight: theme.spacing(2), pt: theme.spacing(1) }}
					>
						<Typography variant='body2 ' sx={{ mr: theme.spacing(2) }}>
							VAT
						</Typography>
						<Typography variant='body2'>{TAX_RATE * 100}%</Typography>
					</Stack>
					<Stack
						direction='row'
						justifyContent='flex-end'
						sx={{ paddingRight: theme.spacing(2), pt: theme.spacing(1) }}
					>
						<Typography variant='subtitle2' sx={{ mr: theme.spacing(2) }}>
							Total
						</Typography>
						<Typography variant='subtitle2'>13372</Typography>
					</Stack>
				</Stack>
			</Grid>

			<DialogActions>
				<Button
					onClick={() => setOpenCartModal(!openCartModal)}
					type='button'
					variant='outlined'
					color='inherit'
				>
					Close
				</Button>
				<Box sx={{ flexGrow: 1 }} />
				<Button
					type='button'
					variant='contained'
					size='large'
					onClick={() => setStep(1)}
					sx={{
						backgroundColor: theme.palette.success.light,

						padding: theme.spacing(1),
					}}
				>
					Choose Shipping
				</Button>
			</DialogActions>
		</DialogContent>
	)
}

// <Typography variant="body2">{fCurrency(subtotal)}</Typography>
// <Typography variant="subtitle2">{fCurrency(totalSum)}</Typography>

// {myCart.productArray.map((option) => (
//   <Grid item xs={12} md={4} key={option.id} sx={{ mb: theme.spacing(1) }}>
//     <Grid container>
//       <Grid item xs={6}>
//         <Stack direction="column">
//           <Box sx={{ pt: '100%', position: 'relative' }}>
//             <ProductImgStyle src={option.img} />{' '}
//             <IconButton
//               color="error"
//               size="small"
//               onClick={() => console.log('yo')}
//               style={{
//                 position: 'absolute',
//                 left: 0,
//                 bottom: 0
//               }}
//             >
//               <RemoveCircleIcon />
//             </IconButton>{' '}
//           </Box>
//         </Stack>
//       </Grid>
//       <Grid item xs={6}>
//         <Stack direction="column" justifyContent="space-between" sx={{ ml: theme.spacing(2) }}>
//           <Typography variant="subtitle1">{option.productName}</Typography>
//           <Typography variant="body2">Merchant, City</Typography>
//           <br />
//           <Typography variant="body2"> x {option.productQty}</Typography>
//           <Typography variant="body2">{option.productPrice} NOK</Typography>
//         </Stack>
//       </Grid>
//     </Grid>
//   </Grid>
// ))}
