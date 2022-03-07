import { useState, useEffect } from 'react'

import { Icon } from '@iconify/react'

import trash2Fill from '@iconify/icons-eva/trash-2-fill'
import PersonIcon from '@mui/icons-material/Person'
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// material
import { useTheme, styled } from '@mui/material/styles'
import {
	Box,
	Button,
	Switch,
	Tooltip,
	TextField,
	IconButton,
	DialogContent,
	DialogTitle,
	DialogActions,
	FormControlLabel,
	Menu,
	MenuItem,
	ListItemAvatar,
	ListSubheader,
	List,
	Divider,
	ListItem,
	ListItemText,
	DialogContentText,
	Chip,
	Typography,
	Collapse,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

// utils
import { DialogAnimate } from '../animate'

//

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function OrderModal({
	modalName,
	modalPrice,
	modalFulfillmentType,
	modalDate,
	modalId,
	modalStatus,
	handleDelete,
	openOrderModal,
	setModalStatus,
	modalProductArray,
	setOpenOrderModal,
	orders,
	setOrders,
}) {
	const theme = useTheme()

	const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const [verifyModalId, setVerifyModalId] = useState('')

	const [customerInfoCollapse, setCustomerInfoCollapse] = useState(false)

	const [disableButton, setDisableButton] = useState(true)

	const [subtotal, setSubtotal] = useState(5)

	const [openOptions, setOpenOptions] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)
	const [openLittleMenu, setOpenLittleMenu] = useState(false)

	const TAX_RATE = 0.25

	const ccyFormat = (num) => `${num.toFixed(2)}`

	/* eslint prefer-arrow-callback: 0 */

	const subtotalEquate = () => {
		const subtotalCount = modalProductArray.reduce(function (prev, cur) {
			return prev + cur.productTotal
		}, 0)

		setSubtotal(subtotalCount)
	}

	const taxesSum = TAX_RATE * subtotal
	const totalSum = taxesSum + subtotal

	useEffect(() => {
		verifyID()
		subtotalEquate()
	}, [verifyModalId])

	const handleDeletePlus = () => {
		setOpenDeleteModal(!openDeleteModal)
		setOpenOrderModal(!openOrderModal)
		handleDelete()
	}

	const verifyID = () => {
		if (modalId === verifyModalId) {
			console.log('yeeet')
			setDisableButton(false)
		} else setDisableButton(true)
	}

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget)
		setOpenLittleMenu(true)
		console.log(anchorEl)
	}

	const handleCloseMenu = () => {
		setAnchorEl()
		setOpenLittleMenu(false)
	}

	const consoleStatus = () => {
		console.log('Changed Status')
	}

	const changeOrderField = (newParam, newValue) => {
		const myIndex = orders.findIndex((x) => x.id === modalId)
		console.log(myIndex)
		if (myIndex >= 0) {
			const newArray = [...orders]
			newArray[myIndex][newParam] = newValue
			setOrders(newArray)

			switch (newParam) {
				case 'orderStatus':
					return setModalStatus(newValue)
				default:
					console.log('Re-check what change is made to orders')
			}
		} else console.log('no index')
	}

	return (
		<div>
			<DialogContent sx={{ pb: 0, overflowY: 'unset' }}>
				<DialogTitle>
					Order Id: {modalId}
					<div>
						<IconButton
							onClick={handleOpenMenu}
							id='simple-menu1'
							style={{
								position: 'absolute',
								right: theme.spacing(1),
								top: theme.spacing(5),
							}}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id='simple-menu'
							open={openLittleMenu}
							keepMounted
							anchorEl={anchorEl}
							onClose={handleCloseMenu}
						>
							<MenuItem
								onClick={() => changeOrderField('orderStatus', 'Follow Up')}
							>
								Mark as Follow Up
							</MenuItem>
						</Menu>
					</div>
				</DialogTitle>

				<List>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							{{
								Ready: (
									<Chip
										label={modalStatus}
										icon={<BeenhereOutlinedIcon />}
										clickable
										color='primary'
									/>
								),
								Unattended: (
									<Chip
										label={modalStatus}
										icon={<ErrorOutlineOutlinedIcon />}
										clickable
										color='error'
									/>
								),
								'Follow Up': (
									<Chip
										label={modalStatus}
										icon={<ErrorOutlineOutlinedIcon />}
										clickable
										color='info'
									/>
								),
							}[modalStatus] || (
								<Chip
									label={modalStatus}
									icon={<ErrorOutlineOutlinedIcon />}
									clickable
									color='grey'
								/>
							)}
						</ListItemAvatar>
						<ListItemAvatar>
							{{
								Shipping: (
									<Chip
										label='Shipping'
										icon={<ErrorOutlineOutlinedIcon />}
										clickable
										variant='outlined'
										color='info'
									/>
								),
								'Click & Collect': (
									<Chip
										label='Click & collect'
										variant='outlined'
										icon={<ErrorOutlineOutlinedIcon />}
										clickable
										color='warning'
									/>
								),
								'Custom Shipping': (
									<Chip
										label='Custom Shipping'
										variant='outlined'
										icon={<ErrorOutlineOutlinedIcon />}
										clickable
										color='success'
									/>
								),
							}[modalFulfillmentType] || (
								<Chip
									label={modalFulfillmentType}
									variant='outlined'
									icon={<ErrorOutlineOutlinedIcon />}
									clickable
									color='success'
								/>
							)}
						</ListItemAvatar>
					</ListItem>
					<ListItem>
						<ListItemText>
							<DateRangeOutlinedIcon />
						</ListItemText>
						<ListItemText>{modalDate}</ListItemText>
					</ListItem>
					<ListItem
						divider
						alignItems='flex-start'
						onClick={() => setCustomerInfoCollapse(!customerInfoCollapse)}
					>
						<ListItemText>
							<PersonIcon />
						</ListItemText>
						<ListItemText primary={modalName} />
						{customerInfoCollapse ? <ExpandMoreIcon /> : <ExpandMoreIcon />}
					</ListItem>

					<Collapse in={customerInfoCollapse} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItem>
								<ListItemText primary='+47 90549661' />
							</ListItem>
							<ListItem>
								<ListItemText primary='Hellmyrbruddet 18b' />
							</ListItem>
							<ListItem divider>
								<ListItemText primary='8011' />

								<ListItemText primary='Bodø' />

								<ListItemText primary='Norge' />
							</ListItem>
						</List>
					</Collapse>
				</List>

				<TableContainer>
					<Table aria-label='Products'>
						<TableHead>
							<TableRow>
								<TableCell>Product</TableCell>
								<TableCell align='right'>Qty.</TableCell>
								<TableCell align='right'>Type</TableCell>
								<TableCell align='right'>Sum</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{modalProductArray.map((product) => (
								<TableRow key={product.productName}>
									<TableCell>{product.productName}</TableCell>
									<TableCell align='right'>{product.productQty}</TableCell>
									<TableCell align='right'>{product.productPrice}</TableCell>
									<TableCell align='right'>{product.productTotal}</TableCell>
								</TableRow>
							))}

							<TableRow>
								<TableCell rowSpan={3} />
								<TableCell colSpan={2}>Subtotal</TableCell>
								<TableCell align='right'>{subtotal}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Tax</TableCell>
								<TableCell align='right'>{TAX_RATE * 100}%</TableCell>
								<TableCell align='right'>{taxesSum}</TableCell>
							</TableRow>
							<TableRow variant='head'>
								<TableCell colSpan={2}>Total</TableCell>
								<TableCell align='right'>{totalSum}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</DialogContent>

			<DialogActions>
				<Tooltip title='Delete Order'>
					<IconButton onClick={() => setOpenDeleteModal(!openDeleteModal)}>
						<Icon icon={trash2Fill} width={20} height={20} />
					</IconButton>
				</Tooltip>
				<Box sx={{ flexGrow: 1 }} />
				<Button
					type='button'
					variant='outlined'
					color='inherit'
					onClick={() => setOpenOrderModal(!openOrderModal)}
				>
					Go Back
				</Button>
				{modalStatus === 'Ready' ? (
					<Button variant='contained' color='primary' disabled>
						Ready
					</Button>
				) : (
					<Tooltip title='Mark as Ready & Notify Customer'>
						<Button
							onClick={() => changeOrderField('orderStatus', 'Ready')}
							variant='contained'
							color='primary'
						>
							Mark as Ready
						</Button>
					</Tooltip>
				)}
			</DialogActions>

			<DialogAnimate
				open={openDeleteModal}
				onClose={() => setOpenDeleteModal(!openDeleteModal)}
			>
				<DialogTitle>Confirm Deleting</DialogTitle>
				<DialogTitle>Order Id :{modalId}</DialogTitle>

				<DialogContent sx={{ pb: 0, overflowY: 'unset' }}>
					<Typography>Write the Order Id below and click "Delete"</Typography>
					<TextField
						fullWidth
						variant='outlined'
						margin='normal'
						required
						value={verifyModalId}
						name='Order Id'
						label='Order Id'
						id='verifyModalId'
						onChange={(e) => setVerifyModalId(e.target.value)}
					/>
				</DialogContent>

				<DialogActions>
					<Button
						variant='outlined'
						onClick={() => setOpenDeleteModal(!openDeleteModal)}
					>
						Go Back
					</Button>

					<Box sx={{ flexGrow: 1 }} />
					<Button
						type='button'
						variant='contained'
						disabled={disableButton}
						color='error'
						onClick={handleDeletePlus}
					>
						DELETE ORDER
					</Button>
				</DialogActions>
			</DialogAnimate>
		</div>
	)
}
