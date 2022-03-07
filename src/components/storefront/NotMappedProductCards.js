import PropTypes from 'prop-types'
import { paramCase } from 'change-case'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import NextLink from 'next/link'

// material
import {
	Box,
	Card,
	Stack,
	Typography,
	IconButton,
	CardActionArea,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import Image from 'next/image'

// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// utils
//

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
})

// ----------------------------------------------------------------------

export default function NotMappedProductCards({ product }) {
	const theme = useTheme()

	return (
		<div>
			<CardActionArea>
				<Box sx={{ position: 'relative', display: 'block' }}>
					<Image
						src={product.image}
						loading='lazy'
						layout='responsive'
						height='100vw'
						width='100vw'
						alt={product.name}
						quality='100'
					/>
				</Box>

				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent='space-between'
					sx={{ mt: theme.spacing(1) }}
				>
					<Typography variant='subtitle1'>{product.name}</Typography>
					<Typography variant='body2'>
						{product.owner} {product.place}
					</Typography>
				</Stack>
			</CardActionArea>
			<Stack
				direction='row'
				justifyContent='space-between'
				sx={{ mb: theme.spacing(1), mt: theme.spacing(1) }}
			>
				<Typography variant='body2' sx={{ mt: theme.spacing(1) }}>
					{product.price} NOK
				</Typography>
				<IconButton>
					<FavoriteBorderOutlinedIcon />
				</IconButton>
			</Stack>
		</div>
	)
}

//  <RootStyle component="span" {...other}>
// <IconStyle sx={{ bgcolor: 'black' }} />
// <IconStyle sx={{ bgcolor: 'green' }} />
// <IconStyle sx={{ bgcolor: 'lightgreen' }} />

// {colors.length > 3 && (
//  <Typography variant="subtitle2">+</Typography>
// )}
// </RootStyle>
