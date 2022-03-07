import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// SETUP COLORS
const GREY = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: '#919EAB',
	600: '#637381',
	700: '#454F5B',
	800: '#212B36',
	900: '#161C24',
	500_8: alpha('#919EAB', 0.08),
	500_12: alpha('#919EAB', 0.12),
	500_16: alpha('#919EAB', 0.16),
	500_24: alpha('#919EAB', 0.24),
	500_32: alpha('#919EAB', 0.32),
	500_48: alpha('#919EAB', 0.48),
	500_56: alpha('#919EAB', 0.56),
	500_80: alpha('#919EAB', 0.8),
}

const PRIMARY = {
	lighter: '#93BAf1',
	light: '#6FA3EC',
	main: '#5D97EA',
	dark: '#3880E5',
	darker: '#2675E3',
	contrastText: '#fff',
}
const SECONDARY = {
	lighter: '#81Aeef',
	light: '#141414',
	main: '#000000',
	dark: '#000000',
	darker: '#000000',
	contrastText: '#fff',
}
const INFO = {
	lighter: '#D0BCF0',
	light: '#C4ABED',
	main: '#ad8ae5',
	dark: '#9568DE',
	darker: '#7E47D7',
	contrastText: '#fff',
}
const SUCCESS = {
	lighter: '#7EB48E',
	light: '#72AC82',
	main: '#63A375',
	dark: '#5B9A6D',
	darker: '#538D64',
	contrastText: '#fff',
}
const WARNING = {
	lighter: '#F8A663',
	light: '#F6903C',
	main: '#F58529',
	dark: '#F47915',
	darker: '#EA6F0B',
	contrastText: '#fff',
}
const ERROR = {
	lighter: '#FF99A0',
	light: '#FF858D',
	main: '#FF707A',
	dark: '#ff4754',
	darker: '#ff1f2e',
	contrastText: '#fff',
}

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
}

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
}

const COMMON = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR },
	grey: GREY,
	gradients: GRADIENTS,
	divider: GREY[500_24],
	chart: CHART_COLORS,
	action: {
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
}

const palette = {
	light: {
		...COMMON,
		text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
		background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
		action: { active: GREY[600], ...COMMON.action },
	},
	dark: {
		...COMMON,
		text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
		background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
		action: { active: GREY[500], ...COMMON.action },
	},
}

export default palette
