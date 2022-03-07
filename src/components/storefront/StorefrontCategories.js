import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// material

import {
	Typography,
	Stack,
	Avatar,
	Divider,
	Grid,
	CardActionArea,
} from '@mui/material'

import { useTheme, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

export default function StorefrontCategories({ subcategory, queryName }) {
	const theme = useTheme()

	return (
		<Grid
			container
			spacing={2}
			mt={4}
			alignItems='center'
			justifyContent='center'
		>
			<Grid item xs={12} mb={2}>
				<Stack justifyContent='center' alignItems='center' spacing={1}>
					<Typography variant='h3'>Kategorier</Typography>
					<Divider variant='middle' width='10%' />
				</Stack>
			</Grid>
			{subcategory.map((item, index) => (
				<Grid item xs={4} md={3} key={index}>
					<Link href={`/q/${item.document.slug}`}>
						<CardActionArea>
							<Stack justifyContent='center' alignItems='center' spacing={1}>
								<Avatar
									sx={{ width: 100, height: 100 }}
									src='https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Fjacket%2Fjacket1.webp?alt=media&token=404c754f-3ebc-4948-9425-e9938c04bf17'
								/>
								<Typography variant='subtitle1'>
									{item.document.name}
								</Typography>
							</Stack>
						</CardActionArea>
					</Link>
				</Grid>
			))}
		</Grid>
	)
}
