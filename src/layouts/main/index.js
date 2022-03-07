import { useState } from 'react'

import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
// next
import { useRouter } from 'next/router'
import { styled, useTheme } from '@mui/material/styles'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
// material
import { Box, Link, Container, Fab } from '@mui/material'
// components
import useCollapseDrawer from '../../hooks/useCollapseDrawer'
import { MHidden } from '../../components/@material-extend'
import CartModal from './CartModal/CartModal'

import MainSidebar from './MainSidebar'

// ----------------------------------------------------------------------

MainLayout.propTypes = {
	children: PropTypes.node,
}
const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden',
})

// [theme.breakpoints.up('lg')]: {
// 	paddingTop: APP_BAR_DESKTOP + 24,
// },
// 	paddingTop: APP_BAR_MOBILE + 24,

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92
const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'auto',
	minHeight: '100%',
	paddingLeft: theme.spacing(1),
	paddingRight: theme.spacing(1),
	paddingBottom: theme.spacing(10),
}))

export default function MainLayout({ children }) {
	const { pathname } = useRouter()
	const isHome = pathname === '/'

	const theme = useTheme()
	const [open, setOpen] = useState(false)

	const [openCartModal, setOpenCartModal] = useState(false)

	return (
		<RootStyle>
			<MainSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

			<MainStyle>{children}</MainStyle>

			<MHidden width='lgUp'>
				<Fab
					variant='extended'
					size='large'
					onClick={() => setOpen(!open)}
					sx={{
						backgroundColor: theme.palette.primary.lighter,
						margin: theme.spacing(1),
						bottom: theme.spacing(1),
						position: 'fixed',
						padding: theme.spacing(1),
					}}
				>
					<MenuOutlinedIcon sx={{ ml: theme.spacing(1) }} />
				</Fab>
			</MHidden>
		</RootStyle>
	)
}

// <MHidden width='lgDown'>
// 				<Fab
// 					onClick={() => setOpenCartModal(!openCartModal)}
// 					variant='extended'
// 					size='large'
// 					sx={{
// 						backgroundColor: theme.palette.success.light,
// 						margin: theme.spacing(3),
// 						bottom: theme.spacing(1),
// 						right: '37%',
// 						position: 'fixed',
// 						padding: theme.spacing(3),
// 					}}
// 				>
// 					<ShoppingCartOutlinedIcon sx={{ mr: theme.spacing(1) }} />
// 					Go to Purchase
// 				</Fab>
// 			</MHidden>

// 			<MHidden width='lgUp'>
// 				<Fab
// 					onClick={() => setOpenCartModal(!openCartModal)}
// 					variant='extended'
// 					size='large'
// 					sx={{
// 						backgroundColor: theme.palette.success.light,
// 						margin: theme.spacing(1),
// 						bottom: theme.spacing(1),
// 						right: theme.spacing(1),

// 						position: 'fixed',
// 						padding: theme.spacing(3),
// 					}}
// 				>
// 					<ShoppingCartOutlinedIcon sx={{ mr: theme.spacing(1) }} />
// 					Go to Purchase
// 				</Fab>
// 			</MHidden>

// 			<CartModal
// 				openCartModal={openCartModal}
// 				setOpenCartModal={setOpenCartModal}
// 			/>
