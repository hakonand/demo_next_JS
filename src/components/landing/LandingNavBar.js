// next
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// material
import { styled } from '@mui/material/styles'
import {
	Box,
	Button,
	AppBar,
	Toolbar,
	Container,
	Typography,
} from '@mui/material'
// hooks
import useOffSetTop from '../../hooks/useOffSetTop'
// components
import Logo from '../Logo'
import Label from '../Label'
import { MHidden } from '../@material-extend'
//
import MenuDesktop from '../../layouts/main/MenuDesktop'
import MenuMobile from '../../layouts/main/MenuMobile'
import navConfig from '../../layouts/main/MenuConfig'

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 88

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	height: APP_BAR_MOBILE,
	transition: theme.transitions.create(['height', 'background-color'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.shorter,
	}),
	[theme.breakpoints.up('md')]: {
		height: APP_BAR_DESKTOP,
	},
}))

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
	left: 0,
	right: 0,
	bottom: 0,
	height: 24,
	zIndex: -1,
	margin: 'auto',
	borderRadius: '50%',
	position: 'absolute',
	width: `calc(100% - 48px)`,
	boxShadow: theme.customShadows.z8,
}))

// ----------------------------------------------------------------------

export default function LandingNavBar({ openDialog, setOpenDialog }) {
	const isOffset = useOffSetTop(100)
	const { pathname } = useRouter()
	const isHome = pathname === '/'

	return (
		<AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
			<ToolbarStyle
				disableGutters
				sx={{
					...(isOffset && {
						bgcolor: 'background.default',
						height: { md: APP_BAR_DESKTOP - 16 },
					}),
				}}
			>
				<Container
					maxWidth='lg'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<NextLink href='/'>
						<Typography color='primary' variant='subtitle1'>
							markd - til forside{' '}
						</Typography>
					</NextLink>

					<Box sx={{ flexGrow: 1 }} />

					<Button
						variant='contained'
						onClick={() => setOpenDialog(!openDialog)}
					>
						Kom i gang
					</Button>
				</Container>
			</ToolbarStyle>

			{isOffset && <ToolbarShadowStyle />}
		</AppBar>
	)
}
