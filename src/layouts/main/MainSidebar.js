import PropTypes from 'prop-types'
import { useEffect, useContext } from 'react'
import NextLink from 'next/link'

// material

import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { alpha, styled, useTheme } from '@mui/material/styles'
import {
	Box,
	Link,
	Stack,
	Avatar,
	Drawer,
	Tooltip,
	Typography,
	CardActionArea,
	ListItemButton,
	ListItemText,
} from '@mui/material'
// hooks

import useCollapseDrawer from '../../hooks/useCollapseDrawer'
import { AuthContext } from '../../contexts/AuthContext'

// components
import Logo from '../../components/Logo'
import Scrollbar from '../../components/Scrollbar'
import NavSection from '../../components/NavSection'
//
import { MHidden } from '../../components/@material-extend'
import MainSidebarConfig from './MainSidebarConfig'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280
const COLLAPSE_WIDTH = 102

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		transition: theme.transitions.create('width', {
			duration: theme.transitions.duration.complex,
		}),
	},
}))

// ----------------------------------------------------------------------

IconCollapse.propTypes = {
	onToggleCollapse: PropTypes.func,
	collapseClick: PropTypes.bool,
}

function IconCollapse({ onToggleCollapse, collapseClick }) {
	return (
		<Tooltip title='Mini Menu'>
			<CardActionArea
				onClick={onToggleCollapse}
				sx={{
					width: 18,
					height: 18,
					display: 'flex',
					cursor: 'pointer',
					borderRadius: '50%',
					alignItems: 'center',
					color: 'text.primary',
					justifyContent: 'center',
					border: 'solid 1px currentColor',
					...(collapseClick && {
						borderWidth: 2,
					}),
				}}
			>
				<Box
					sx={{
						width: 8,
						height: 8,
						borderRadius: '50%',
						bgcolor: 'currentColor',
						transition: (theme) => theme.transitions.create('all'),
						...(collapseClick && {
							width: 0,
							height: 0,
						}),
					}}
				/>
			</CardActionArea>
		</Tooltip>
	)
}

MainSidebar.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
}

// <MHidden width="lgDown">
//             {!isCollapse && <IconCollapse onToggleCollapse={onToggleCollapse} collapseClick={collapseClick} />}
//           </MHidden>

export default function MainSidebar({ isOpenSidebar, onCloseSidebar }) {
	const theme = useTheme()

	const { user, cart, userInfo } = useContext(AuthContext)

	const loggedInItems = [
		{
			subheader: '',
			items: [
				{
					title: 'Home',
					path: '/Home',
					icon: <HomeWorkOutlinedIcon />,
				},
				{
					title: `Cart (${cart.length}) `,
					path: '/Cart',
					icon: <ShoppingCartOutlinedIcon />,
				},

				{
					title: 'Favorites',
					path: '/Favorites',
					icon: <FavoriteBorderOutlined />,
				},
			],
		},
	]

	const loggedOutItems = [
		{
			subheader: '',
			items: [
				{
					title: 'Home',
					path: '/Home',
					icon: <HomeWorkOutlinedIcon />,
				},
				{
					title: `Cart (${cart.length}) `,
					path: '/Cart',
					icon: <ShoppingCartOutlinedIcon />,
				},
				{
					title: 'Log in',
					path: '/Login',
					icon: <LoginOutlinedIcon />,
				},
			],
		},
	]

	const {
		isCollapse,
		collapseClick,
		collapseHover,
		onToggleCollapse,
		onHoverEnter,
		onHoverLeave,
	} = useCollapseDrawer()

	useEffect(() => {
		if (isOpenSidebar) {
			onCloseSidebar()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const renderContent = (
		<Scrollbar
			sx={{
				height: '100%',
				'& .simplebar-content': {
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				},
			}}
		>
			<Stack
				spacing={3}
				sx={{
					px: 2.5,
					pt: 3,
					pb: 2,
					...(isCollapse && {
						alignItems: 'center',
					}),
				}}
			>
				<Stack direction='row' alignItems='center' justifyContent='center'>
					<Box sx={{ display: 'inline-flex' }}>
						<NextLink href='/'>
							<Typography color='primary' variant='h5'>
								markd
							</Typography>
						</NextLink>
					</Box>
				</Stack>
			</Stack>
			<NavSection
				navConfig={user ? loggedInItems : loggedOutItems}
				isShow={!isCollapse}
			/>

			<NavSection navConfig={MainSidebarConfig} isShow={!isCollapse} />
		</Scrollbar>
	)

	return (
		<RootStyle
			sx={{
				width: {
					lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH,
				},
				...(collapseClick && {
					position: 'absolute',
				}),
			}}
		>
			<MHidden width='lgUp'>
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{
						sx: { width: DRAWER_WIDTH },
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>

			<MHidden width='lgDown'>
				<Drawer
					open
					variant='persistent'
					onMouseEnter={onHoverEnter}
					onMouseLeave={onHoverLeave}
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: 'background.default',
							...(isCollapse && {
								width: COLLAPSE_WIDTH,
							}),
							...(collapseHover && {
								borderRight: 0,
								backdropFilter: 'blur(6px)',
								WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
								boxShadow: (theme) => theme.customShadows.z20,
								bgcolor: (theme) =>
									alpha(theme.palette.background.default, 0.88),
							}),
						},
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>
		</RootStyle>
	)
}

// {isCollapse ? (
//   <Avatar alt="Shopping Cart" sx={{ mx: 'auto', mb: 2, backgroundColor: theme.palette.common.white }}>
//     <ShoppingCartOutlinedIcon />
//   </Avatar>
// ) : (
//   <Link underline="none" to={PATH_DASHBOARD.general.pageMerchantAccount} component={RouterLink}>
//     <AccountStyle>
//       <Avatar alt="Shopping Cart" sx={{ backgroundColor: theme.palette.common.white }}>
//         <ShoppingCartOutlinedIcon sx={{ color: theme.palette.primary.main }} />
//       </Avatar>
//       <Box sx={{ ml: 2 }}>
//         <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>
//           Shopping Cart
//         </Typography>
//         <Typography variant="body2" sx={{ color: theme.palette.common.white }}>
//           Go to purchase
//         </Typography>
//       </Box>
//     </AccountStyle>
//   </Link>
// )}
