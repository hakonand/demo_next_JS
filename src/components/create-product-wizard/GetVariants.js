import React, { useState } from 'react'

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	Paper,
	Divider,
	Button,
	IconButton,
	ListItemText,
	ListItemSecondaryAction,
	ListSubheader,
	ListItem,
	ListItemAvatar,
	List,
	Box,
	Container,
	TextField,
	Typography,
	CardActionArea,
	CardActions,
	Switch,
	InputAdornment,
} from '@mui/material'

const GetVariants = ({
	deleteSizeFromArray,
	productColors,
	colorInput,
	setColorInput,
	addNewColorToArray,
	deleteColorFromArray,
	sizeInput,
	setSizeInput,
	addNewSizeToArray,
	productSizes,
}) => {
	const [isLoading, setIsLoading] = useState('')
	return (
		<Card>
			<CardHeader
				title='Colors & Sizes'
				subheader='Add colors & sizes for the product'
				titleTypographyProps={{ color: 'textPrimary' }}
			/>
			<CardContent>
				<Grid container>
					<Grid item xs={12} md={12}>
						<TextField
							variant='outlined'
							value={colorInput}
							margin='normal'
							id='addColor'
							label='Write Color Name'
							name='productPrice'
							onChange={(e) => setColorInput(e.target.value)}
						/>
						<br />
						<Button
							variant='outlined'
							color='primary'
							disabled={!colorInput}
							onClick={addNewColorToArray}
						>
							Add Color
						</Button>
					</Grid>

					{productColors.length > 0 ? (
						<Grid item xs={12} md={12}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-start',
								}}
							>
								<List>
									<ListSubheader
										component='div'
										id='added-colors'
										color='primary'
									>
										Your added colors
									</ListSubheader>
									{productColors.map((productColor) => (
										<ListItem margin='normal' key={productColor}>
											<ListItemAvatar style={{ marginTop: 10 }}>
												<ArrowRightOutlinedIcon size='small' />
											</ListItemAvatar>
											<ListItemText primary={productColor} />
											<ListItemSecondaryAction>
												<IconButton
													edge='end'
													aria-label='delete'
													onClick={deleteColorFromArray}
												>
													<HighlightOffIcon color='error' />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									))}
								</List>
							</div>
						</Grid>
					) : (
						<div />
					)}
					<br />
				</Grid>
				<br />

				<Divider variant='middle' />
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						value={sizeInput}
						margin='normal'
						id='addSize'
						label='Write Size Name'
						name='productSize'
						onChange={(e) => setSizeInput(e.target.value)}
					/>
					<br />
					<Button
						variant='outlined'
						color='primary'
						disabled={!sizeInput}
						onClick={addNewSizeToArray}
					>
						Add Size
					</Button>
				</Grid>

				{productSizes.length > 0 ? (
					<Grid item xs={12} md={12}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-start',
							}}
						>
							<List>
								<ListSubheader
									component='div'
									id='added-colors'
									color='primary'
								>
									Your added sizes
								</ListSubheader>
								{productSizes.map((productSize) => (
									<ListItem margin='normal' key={productSize}>
										<ListItemAvatar style={{ marginTop: 10 }}>
											<ArrowRightOutlinedIcon size='small' />
										</ListItemAvatar>
										<ListItemText primary={productSize} />
										<ListItemSecondaryAction>
											<IconButton
												edge='end'
												aria-label='delete'
												onClick={deleteSizeFromArray}
											>
												<HighlightOffIcon color='error' />
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
								))}
							</List>
						</div>
					</Grid>
				) : (
					<div />
				)}
			</CardContent>
		</Card>
	)
}

export default GetVariants
