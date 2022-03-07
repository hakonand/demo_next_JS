import SettingsIcon from '@mui/icons-material/Settings'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import AddIcon from '@mui/icons-material/Add'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
// routes
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

const MainSidebarConfig = [
	// GENERAL
	// ----------------------------------------------------------------------

	{
		subheader: 'Clothing',
		items: [
			{
				title: 'For Men',
				children: [
					{ title: 'Jackets', path: '/ForMen/jackets' },
					{ title: 'Suit', path: '/ForMen/suits' },
					{ title: 'Hoodie', path: '/ForMen/hoodies' },
				],
			},
		],
	},

	// inn her

	{
		subheader: 'For bedrifter',
		items: [
			{
				title: 'Lær mer & registrer',
				path: '/BusinessInfo',
				icon: <InfoOutlinedIcon />,
			},
		],
	},
]

export default MainSidebarConfig

// 	],
// },

// // MANAGEMENT
// // ----------------------------------------------------------------------
// {
// 	subheader: 'Clothing',
// 	items: [
// 		{
// 			title: 'For Men',
// 			path: PATH_BUYERSIDE.general.pageMainForMen,
// 			children: [
// 				{ title: 'Jackets', path: PATH_BUYERSIDE.general.pageForMenJacket },
// 				{ title: 'Suit', path: PATH_BUYERSIDE.general.pageForMenSuit },
// 				{ title: 'Hoodie', path: PATH_BUYERSIDE.general.pageForMenHoodie },
// 			],
// 		},
// 		{
// 			title: 'For Women',
// 			icon: <AddIcon />,
// 			path: PATH_BUYERSIDE.general.pageMainForWomen,
// 			children: [
// 				{ title: 'Dress', path: PATH_BUYERSIDE.general.pageForWomenDress },

// 				{
// 					title: 'Sweater',
// 					path: PATH_BUYERSIDE.general.pageForWomenSweater,
// 				},
// 				{ title: 'Tops', path: PATH_BUYERSIDE.general.pageForWomenTop },
// 			],
// 		},
// 	],
// },

// {
// 	subheader: 'Interior',
// 	items: [
// 		{
// 			title: 'Furniture',
// 			path: PATH_BUYERSIDE.general.pageMainCategory,
// 			icon: <AddIcon />,
// 			children: [
// 				{ title: 'Chairs', path: PATH_BUYERSIDE.general.pageFurnitureChairs },
// 				{ title: 'Sofa', path: PATH_BUYERSIDE.general.pageFurnitureSofa },
// 			],
// 		},
// 		{
// 			title: 'Accessories',
// 			icon: <AddIcon />,
// 			path: PATH_BUYERSIDE.general.pageThree,
// 			children: [
// 				{
// 					title: 'Pillows',
// 					path: PATH_BUYERSIDE.general.pageInteriorPillows,
// 				},
// 				{
// 					title: 'Blankets',
// 					path: PATH_BUYERSIDE.general.pageInteriorBlankets,
// 				},
// 			],
// 		},
// 	],
// },

// {
// 	subheader: 'Electronics',
// 	items: [
// 		{
// 			title: 'Phone',
// 			path: PATH_BUYERSIDE.general.pageMainCategory,
// 			icon: <AddIcon />,
// 			children: [
// 				{ title: 'Iphone', path: PATH_BUYERSIDE.general.pagePhonesIphone },
// 				{ title: 'Samsung', path: PATH_BUYERSIDE.general.pagePhonesSamsung },
// 			],
// 		},
// 		{
// 			title: 'Screen & TV',
// 			icon: <AddIcon />,
// 			path: PATH_BUYERSIDE.general.pageThree,
// 			children: [
// 				{ title: 'TV', path: PATH_BUYERSIDE.general.pageForWomenDress },

// 				{
// 					title: 'Monitors',
// 					path: PATH_BUYERSIDE.general.pageForWomenSweater,
// 				},
// 			],
// 		},
// 	],
// },

// {
// 	subheader: 'For bedrifter',
// 	items: [
// 		{
// 			title: 'Lær mer om plattformen',
// 			path: PATH_BUYERSIDE.general.pageMerchantLanding,
// 			icon: <AddLocationIcon />,
// 		},
// 	],
// },
