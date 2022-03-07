import { useState, useEffect, useContext } from 'react'

// material
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Button,
	IconButton,
	TextField,
	Divider,
	Step,
	Stepper,
	StepLabel,
	Grid,
	DialogContent,
	DialogTitle,
	DialogActions,
	Typography,
	Stack,
	Icon,
} from '@mui/material'

// utils
import { DialogAnimate } from '../../../components/animate'
import CartItems from './CartItems'
import CartShipping from './CartShipping'
import { AuthContext } from '../../../contexts/AuthContext'

export default function CartModal({ openCartModal, setOpenCartModal }) {
	const theme = useTheme()
	const {
		user,
		updateFavorites,
		favorites,
		removeFromFavorites,
		updateCart,
		cart,
	} = useContext(AuthContext)

	const [myCart, setMyCart] = useState([
		{
			id: 'ef',
			name: 'name1',
			merchantId: 'Merchant1',
			price: '11',
			fulfillmentType: 'Custom Shipping',
			createdAt: '01.01.2021',
			orderStatus: 'Ready',
			productArray: [
				{
					id: 11,
					img: '/static/home/product_img_2.jpg',
					productName: 'Merchant1product',
					productPrice: 12,
					productQty: 1,
					productTotal: 12,
				},
				{
					id: 12,
					img: '/static/home/product_img_2.jpg',

					productName: 'Merchant1product2',
					productPrice: 34,
					productQty: 2,
					productTotal: 68,
				},
			],
		},

		{
			id: 'ab',
			name: 'name2',
			merchantId: 'Merchant2',
			price: '2',
			fulfillmentType: 'Custom Shipping',
			createdAt: '01.01.2021',
			orderStatus: 'Ready',
			productArray: [
				{
					id: 11,
					img: '/static/home/product_img_2.jpg',
					productName: 'Merchant2product',
					productPrice: 12,
					productQty: 1,
					productTotal: 12,
				},
				{
					id: 12,
					img: '/static/home/product_img_2.jpg',

					productName: 'Merchant2product2',
					productPrice: 34,
					productQty: 2,
					productTotal: 68,
				},
			],
		},
	])
	const [subtotal, setSubtotal] = useState(5)
	const [step, setStep] = useState(0)

	const [buyerAdress, setBuyerAdress] = useState('')
	const [buyerZip, setBuyerZip] = useState('')
	const [buyerCity, setBuyerCity] = useState('')
	const [buyerEmail, setBuyerEmail] = useState('')

	const steps = ['Items', 'Shipping', 'Payment']

	const TAX_RATE = 0.25

	/* eslint prefer-arrow-callback: 0 */

	// const subtotalEquate = () => {
	//   const subtotalCount = myCart.productArray.reduce(function (prev, cur) {
	//     return prev + cur.productTotal;
	//   }, 0);

	//   setSubtotal(subtotalCount);
	// };

	const taxesSum = TAX_RATE * subtotal
	const totalSum = taxesSum + subtotal

	// useEffect(() => {
	//   subtotalEquate();
	// });

	const renderStepContent = (step) => {
		switch (step) {
			case 0:
				return (
					<CartItems
						cart={cart}
						myCart={myCart}
						subtotal={subtotal}
						TAX_RATE={TAX_RATE}
						totalSum={totalSum}
						step={step}
						setStep={setStep}
						openCartModal={openCartModal}
						setOpenCartModal={setOpenCartModal}
					/>
				)

			case 1:
				return (
					<CartShipping
						myCart={myCart}
						buyerAdress={buyerAdress}
						setBuyerAdress={setBuyerAdress}
						buyerZip={buyerZip}
						setBuyerZip={setBuyerZip}
						buyerCity={buyerCity}
						setBuyerCity={setBuyerCity}
						buyerEmail={buyerEmail}
						setBuyerEmail={setBuyerEmail}
						step={step}
						setStep={setStep}
					/>
				)
			default:
				return <h1>No Checkout</h1>
		}
	}

	return (
		<DialogAnimate
			open={openCartModal}
			onClose={() => setOpenCartModal(!openCartModal)}
			fullWidth
			maxWidth='lg'
		>
			<DialogTitle>
				<Typography variant='inherit'>Your Shopping Cart</Typography>
				<Box
					sx={{
						width: '100%',
						marginTop: theme.spacing(2),
						mb: theme.spacing(2),
					}}
				>
					<Stepper activeStep={step} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</Box>
			</DialogTitle>

			{renderStepContent(step)}
		</DialogAnimate>
	)
}

// <Grid container sx={{ m: theme.spacing(1) }}>
//           {myCart.productArray.map((option) => (
//             <Grid item xs={12} md={4} key={option.id} sx={{ mb: theme.spacing(1) }}>
//               <Grid container>
//                 <Grid item xs={6}>
//                   <Stack direction="column">
//                     <Box sx={{ pt: '100%', position: 'relative' }}>
//                       <ProductImgStyle src={option.img} />{' '}
//                       <IconButton
//                         color="error"
//                         size="small"
//                         onClick={() => console.log('yo')}
//                         style={{
//                           position: 'absolute',
//                           left: 0,
//                           bottom: 0
//                         }}
//                       >
//                         <RemoveCircleIcon />
//                       </IconButton>{' '}
//                     </Box>
//                   </Stack>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Stack direction="column" justifyContent="space-between" sx={{ ml: theme.spacing(2) }}>
//                     <Typography variant="subtitle1">{option.productName}</Typography>
//                     <Typography variant="body2">Merchant, City</Typography>
//                     <br />
//                     <Typography variant="body2"> x {option.productQty}</Typography>
//                     <Typography variant="body2">{option.productPrice} NOK</Typography>
//                   </Stack>
//                 </Grid>
//               </Grid>
//             </Grid>
//           ))}
//           <Divider variant="middle" sx={{ mt: theme.spacing(1), mb: theme.spacing(1), width: '90%' }} />
//           <Grid item xs={12}>
//             <Stack direction="column" justifyContent="space-between">
//               <Stack direction="row" justifyContent="space-between">
//                 <Typography variant="body2">Subtotal</Typography>
//                 <Typography variant="body2">{fCurrency(subtotal)}</Typography>
//               </Stack>
//               <Stack direction="row" justifyContent="space-between">
//                 <Typography variant="body2">VAT</Typography>
//                 <Typography variant="body2">{TAX_RATE * 100}%</Typography>
//               </Stack>
//               <Stack direction="row" justifyContent="space-between">
//                 <Typography variant="subtitle2">Total</Typography>
//                 <Typography variant="subtitle2">{fCurrency(totalSum)}</Typography>
//               </Stack>
//             </Stack>
//           </Grid>
//         </Grid>

//         <br />

// <DialogActions>
// <Button onClick={() => setStep(step - 1)} type="button" variant="outlined" color="inherit">
//   Go Back
// </Button>
// <Box sx={{ flexGrow: 1 }} />
// <Button
//   type="button"
//   variant="contained"
//   size="large"
//   onClick={() => setStep(step + 1)}
//   sx={{
//     backgroundColor: theme.palette.success.light,

//     padding: theme.spacing(1)
//   }}
// >
//   Choose Shipping
// </Button>
// </DialogActions>
