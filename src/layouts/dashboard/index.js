import PropTypes from 'prop-types'
import { useState } from 'react'
// material
import { styled, useTheme } from '@mui/material/styles'
import { Fab } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer'
//
import DashboardSidebar from './DashboardSidebar'
import { MHidden } from '../../components/@material-extend'

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden',
})

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'auto',
	minHeight: '100%',
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(2),
	[theme.breakpoints.up('lg')]: {
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(1),
	},
}))

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
	children: PropTypes.node,
}

export default function DashboardLayout({ children }) {
	const theme = useTheme()
	const { collapseClick } = useCollapseDrawer()
	const [open, setOpen] = useState(false)

	return (
		<RootStyle>
			<DashboardSidebar
				isOpenSidebar={open}
				onCloseSidebar={() => setOpen(false)}
			/>
			<MainStyle
				sx={{
					transition: theme.transitions.create('margin', {
						duration: theme.transitions.duration.complex,
					}),
					...(collapseClick && {
						ml: '102px',
					}),
				}}
			>
				{children}
			</MainStyle>

			<MHidden width='lgUp'>
				<Fab
					variant='extended'
					size='large'
					onClick={() => setOpen(!open)}
					sx={{
						backgroundColor: theme.palette.primary.lighter,
						margin: theme.spacing(3),
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
