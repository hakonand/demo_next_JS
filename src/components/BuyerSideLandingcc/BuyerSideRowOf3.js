import {
	Box,
	Button,
	Stack,
	Typography,
	Grid,
	CardActionArea,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import NextLink from 'next/link'
import Image from 'next/image'
import Link from 'next/link'

import { varFadeInUp, MotionInView, varFadeInDown } from '../animate'

export default function BuyerSideRowOf3({ highlightedCollection }) {
	const theme = useTheme()

	const ProductImgStyle = styled('img')({
		top: 0,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		position: 'absolute',
		borderRadius: 2,
	})
	return (
		<Grid item xs={12}>
			<Grid
				container
				spacing={{ xs: 2, sm: 3 }}
				sx={{
					p: theme.spacing(1),
				}}
			>
				{highlightedCollection.map((item, index) => (
					<Grid item xs={12} sm={4} key={index}>
						<Link href={`/post/${item.id}`}>
							<CardActionArea>
								<Box
									sx={{
										position: 'relative',
										display: 'block',
									}}
								>
									<Image
										src={item.image}
										loading='lazy'
										layout='responsive'
										height='100vw'
										width='100vw'
										alt={item.title}
										quality='100'
									/>
								</Box>
								<Stack
									direction='column'
									spacing={1}
									sx={{ mt: theme.spacing(2) }}
								>
									<Typography variant='subtitle1'>{item.title}</Typography>
									<Typography variant='body2'>
										{item.descr.substring(0, 150)} ...
									</Typography>
								</Stack>
							</CardActionArea>
						</Link>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}
