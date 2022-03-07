import React, { useState } from 'react'

import { Grid, Card, CardHeader, CardContent, TextField } from '@mui/material'

import Autocomplete from '@mui/material/Autocomplete'

const GetCollections = ({
	selectedMcValue,
	setSelectedMcValue,
	selectedSubValue,
	setSelectedSubValue,
	selectedTypeValue,
	setSelectedTypeValue,
}) => {
	const [isLoading, setIsLoading] = useState(null)

	const mcOptions = ['clothing', 'interior']

	const interiorOptions = ['bedroom', 'kitchen']
	const bedroomOptions = ['bed', 'bed-linen']
	const kitchenOptions = ['soap']

	const clothingOptions = ['for_men', 'for_women']

	const manOptions = ['jackets', 'suit', 'hoodie']
	const womanOptions = ['dress', 'sweater', 'tops']

	const [subOptions, setSubOptions] = React.useState([
		'Select a Main Cathegory',
	])

	const [typeOptions, setTypeOptions] = React.useState([
		'Select a Subcathegory',
	])

	const [mcValue, setMcValue] = React.useState('')
	const [mcInputValue, setMcInputValue] = React.useState('')

	const [subValue, setSubValue] = React.useState('')
	const [subInputValue, setSubInputValue] = React.useState('')

	const [typeValue, setTypeValue] = React.useState('')
	const [typeInputValue, setTypeInputValue] = React.useState('')

	const onChangeMcValue = (event, newValue) => {
		if (newValue) {
			setMcValue(newValue)
			setSelectedMcValue(newValue.toLowerCase())
			if (newValue === 'clothing') {
				setSubOptions(clothingOptions)
			} else if (newValue === 'interior') {
				setSubOptions(interiorOptions)
			}
		}
	}

	const onChangeSubValue = (event, newValue) => {
		if (newValue) {
			setSubValue(newValue)
			setSelectedSubValue(newValue.toLowerCase())
		}
		if (newValue === 'for_men') {
			setTypeOptions(manOptions)
		} else if (newValue === 'for_women') {
			setTypeOptions(womanOptions)
		} else if (newValue === 'bedroom') {
			setTypeOptions(bedroomOptions)
		} else if (newValue === 'kitchen') {
			setTypeOptions(kitchenOptions)
		}
	}

	const onChangeTypeValue = (event, newValue) => {
		if (newValue) {
			setTypeValue(newValue)
			setSelectedTypeValue(newValue.toLowerCase())
		}
	}

	return (
		<Card>
			<CardHeader
				title='Select Categories'
				subheader='Select category, subcategory and type'
				titleTypographyProps={{ color: 'textPrimary' }}
			/>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Autocomplete
							value={mcValue}
							onChange={onChangeMcValue}
							inputValue={mcInputValue}
							onInputChange={(event, newInputValue) => {
								setMcInputValue(newInputValue)
							}}
							id='field1'
							options={mcOptions}
							style={{ width: 200 }}
							renderInput={(params) => (
								<TextField
									{...params}
									id='field1'
									autoComplete='new-password'
									label='Main Category'
									variant='outlined'
								/>
							)}
						/>
					</Grid>

					<Grid item xs={12}>
						<Autocomplete
							value={subValue}
							onChange={onChangeSubValue}
							inputValue={subInputValue}
							onInputChange={(event, newInputValue) => {
								setSubInputValue(newInputValue)
							}}
							getOptionDisabled={(option) =>
								option === 'Select a Main Cathegory'
							}
							id='field2'
							options={subOptions}
							style={{ width: 200 }}
							renderInput={(params) => (
								<TextField
									{...params}
									id='field2'
									autoComplete='new-password'
									label='Subcathegory'
									variant='outlined'
								/>
							)}
						/>
					</Grid>

					<Grid item xs={12}>
						<Autocomplete
							value={typeValue}
							onChange={onChangeTypeValue}
							inputValue={typeInputValue}
							onInputChange={(event, newInputValue) => {
								setTypeInputValue(newInputValue)
							}}
							getOptionDisabled={(option) => option === 'Select a Subcathegory'}
							id='field3'
							options={typeOptions}
							style={{ width: 200 }}
							renderInput={(params) => (
								<TextField
									{...params}
									id='field3'
									autoComplete='new-password'
									label='Product Type'
									variant='outlined'
								/>
							)}
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default GetCollections
