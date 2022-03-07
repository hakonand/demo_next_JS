// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// components
import SvgIconStyle from '../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = (name) => (
	<SvgIconStyle
		src={`/static/icons/navbar/${name}.svg`}
		sx={{ width: '100%', height: '100%' }}
	/>
)

const ICONS = {
	user: getIcon('ic_user'),
	ecommerce: getIcon('ic_ecommerce'),
	analytics: getIcon('ic_analytics'),
	dashboard: getIcon('ic_dashboard'),
}

const sidebarConfig = [
	// GENERAL
	// ----------------------------------------------------------------------
	{
		subheader: 'general',
		items: [
			{
				title: 'Dashboard',
				path: '/dashboard/Home',
				icon: ICONS.dashboard,
			},
			{
				title: 'Orderlist',
				path: '/dashboard/Orderlist',
				icon: ICONS.ecommerce,
			},
			{
				title: 'Digital Presence',
				path: '/dashboard/DigitalPresence',
				icon: ICONS.analytics,
			},
			{
				title: 'Storefront',
				path: '/dashboard/storefront/clarkesbodø',
				icon: ICONS.analytics,
			},
			{
				title: 'Products',
				path: '/dashboard/ViewProducts',
				icon: ICONS.analytics,
			},
		],
	},
]

export default sidebarConfig

// // MANAGEMENT
// 	// ----------------------------------------------------------------------
// 	{
// 		subheader: 'management',
// 		items: [
// 			{
// 				title: 'user',
// 				path: PATH_DASHBOARD.app.root,
// 				icon: ICONS.user,
// 				children: [
// 					{ title: 'Four', path: PATH_DASHBOARD.app.pageFour },
// 					{ title: 'Five', path: PATH_DASHBOARD.app.pageFive },
// 					{ title: 'Six', path: PATH_DASHBOARD.app.pageSix },
// 				],
// 			},
// 		],
// 	},
