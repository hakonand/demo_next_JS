import { useState } from 'react'

// layouts
import MainLayout from 'src/layouts/main'
// material
import { styled, useTheme } from '@mui/material/styles'
// components
import Page from 'src/components/Page'

import {
	LandingNewHero,
	LandingMinimal,
	LandingHugePackElements,
	LandingSoMe,
	LandingBonusProgram,
	LandingShipping,
	LandingWaitList,
	LandingDialog,
} from 'src/components/landing'

import firebase from 'src/firebase/firebase'
import LandingNavBar from 'src/components/landing/LandingNavBar'

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
	overflow: 'hidden',
	position: 'relative',
	backgroundColor: theme.palette.background.default,
}))

const registerInterest = (
	registerCity,
	registerName,
	registerEmail,
	setRegisterClick
) => {
	firebase
		.firestore()
		.collection('registerInterest')
		.add({
			name: registerName,
			email: registerEmail,
			city: registerCity,
		})
		.then((docRef) => {
			console.log('Document written with ID: ', docRef.id)
			setRegisterClick(true)
		})
		.catch((error) => {
			console.error('Error adding document: ', error)
		})
}

const RootStyle = styled(Page)({
	height: '100%',
})

// ----------------------------------------------------------------------

export default function BusinessInfo() {
	const [registerName, setRegisterName] = useState('')
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerCity, setRegisterCity] = useState('')
	const [registerClick, setRegisterClick] = useState(false)
	const [openDialog, setOpenDialog] = useState(false)

	const handleNameChange = (value) => {
		setRegisterName(value)
	}

	const handleEmailChange = (value) => {
		setRegisterEmail(value)
	}

	const handleCityChange = (value) => {
		setRegisterCity(value)
	}
	const theme = useTheme()

	return (
		<RootStyle
			title='Everything digital for your business | markd'
			id='move_top'
		>
			<LandingNavBar openDialog={openDialog} setOpenDialog={setOpenDialog} />
			<LandingNewHero
				handleEmailChange={handleEmailChange}
				handleNameChange={handleNameChange}
				handleCityChange={handleCityChange}
				registerEmail={registerEmail}
				registerCity={registerCity}
				registerName={registerName}
				registerInterest={registerInterest}
				registerClick={registerClick}
				setRegisterClick={setRegisterClick}
				openDialog={openDialog}
				setOpenDialog={setOpenDialog}
			/>
			<ContentStyle>
				<LandingMinimal />
				<LandingWaitList
					handleEmailChange={handleEmailChange}
					handleNameChange={handleNameChange}
					handleCityChange={handleCityChange}
					registerEmail={registerEmail}
					registerCity={registerCity}
					registerName={registerName}
					registerInterest={registerInterest}
					registerClick={registerClick}
					setRegisterClick={setRegisterClick}
				/>
				<LandingSoMe />
				<LandingHugePackElements />
				<LandingBonusProgram />
				<LandingShipping />
				<LandingWaitList
					handleEmailChange={handleEmailChange}
					handleNameChange={handleNameChange}
					handleCityChange={handleCityChange}
					registerEmail={registerEmail}
					registerCity={registerCity}
					registerName={registerName}
					registerInterest={registerInterest}
					registerClick={registerClick}
					setRegisterClick={setRegisterClick}
				/>
				<LandingDialog
					openDialog={openDialog}
					setOpenDialog={setOpenDialog}
					handleEmailChange={handleEmailChange}
					handleNameChange={handleNameChange}
					handleCityChange={handleCityChange}
					registerEmail={registerEmail}
					registerCity={registerCity}
					registerName={registerName}
					registerInterest={registerInterest}
					registerClick={registerClick}
					setRegisterClick={setRegisterClick}
				/>
			</ContentStyle>
		</RootStyle>
	)
}
