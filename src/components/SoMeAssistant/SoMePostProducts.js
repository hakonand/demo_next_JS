// material
import { useState } from 'react'

import {
	Typography,
	Grid,
	Stack,
	Box,
	TextField,
	CardActionArea,
	Button,
	DialogContent,
	IconButton,
	ButtonGroup,
	DialogActions,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

import { useTheme, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function SoMePostProducts({ step, setStep }) {
	const theme = useTheme()

	const [inputValue, setInputValue] = useState('')

	const handleProductInput = (value) => {
		setInputValue(value)
	}
	const [value, setValue] = useState([])
	const options = [
		{
			name: 'product1',
			id: 1,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product2',
			id: 2,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product3',
			id: 3,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product4',
			id: 4,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product5',
			id: 5,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product6',
			id: 6,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product7',
			id: 7,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product8',
			id: 8,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product9',
			id: 9,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product10',
			id: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product11',
			id: 11,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product12',
			id: 12,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
		{
			name: 'product13',
			id: 13,
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
	]

	return (
		<DialogContent>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant='h6'>Select Products for Title post</Typography>
				</Grid>
				<Grid item xs={12}>
					<Autocomplete
						fullWidth
						multiple
						filterSelectedOptions
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue)
						}}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue)
						}}
						id='Choose-product'
						options={options}
						getOptionLabel={(option) => (option.name ? option.name : '')}
						isOptionEqualToValue={(option, value) => option.id === value.id}
						renderInput={(params) => (
							<TextField {...params} label='Choose product' variant='filled' />
						)}
						renderOption={(params, option) => (
							<Stack direction='row' spacing={2} p={2} {...params}>
								<img
									alt={option.name}
									loading='lazy'
									height='64px'
									width='64px'
									src={option.image}
								/>
								<Typography variant='subtitle1'>{option.name}</Typography>
							</Stack>
						)}
					/>
				</Grid>

				<Grid item xs={12} mt={2}>
					<Stack direction='row' justifyContent='space-between'>
						<Button onClick={() => setStep(step - 1)}>Go back</Button>
						<Button variant='contained' onClick={() => setStep(step + 1)}>
							Next
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</DialogContent>
	)
}
