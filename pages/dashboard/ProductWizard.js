import React, { useState, useContext, useEffect } from 'react'

import { useTheme, styled, alpha } from '@mui/material/styles'

import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	Paper,
	Button,
	Container,
	Typography,
} from '@mui/material'

import DashboardLayout from 'src/layouts/dashboard'

import UploadMultiFile from 'src/components/upload/UploadMultiFile'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs'
import Page from 'src/components/Page'

import firebase from 'src/firebase/firebase'

import UploadPostImage from 'src/components/SoMeAssistant/UploadPostImage'

import ProductInformation from 'src/components/create-product-wizard/ProductInformation'
import GetCollections from 'src/components/create-product-wizard/GetCollections'
import ProductShipping from 'src/components/create-product-wizard/ProductShipping'
import GetVariants from 'src/components/create-product-wizard/GetVariants'

const ProductWizard = () => {
	const theme = useTheme()
	const [isLoading, setIsLoading] = useState(false)

	// state for Productinformation.js

	const [productName, setProductName] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productDescription, setProductDescription] = useState('')

	const [productMainPicture, setProductMainPicture] = useState('')

	// state and fucntions for Uploading Images

	const [hasFile, setHasFile] = useState(0)
	const [files, setFiles] = useState([])

	// from https://www.develrockment.at/blog/react-multiple-image-upload-component-for-firebase-storage/
	// or https://github.com/Develrockment/React-Multiple-Image-Upload-Firebase/blob/main/src/imagesDropzone.js

	const [mainImage, setMainImage] = useState('')

	const [imageList, setImageList] = useState([])
	const [urlArray, setUrlArray] = useState([])

	const changeImageField = (index, parameter, value) => {
		const newArray = [...imageList]
		newArray[index][parameter] = value
		setImageList(newArray)
	}

	const handleDeleteImage = (index) => {
		files[index].storageRef
			.delete()
			.then(() => {
				const newArray = [...files]
				newArray.splice(index, 1)
				setFiles(newArray)
			})
			.catch((error) => {
				console.log('Error deleting file:', error)
			})
	}

	// state for Colors sizes and collections

	const [selectedTypeValue, setSelectedTypeValue] = React.useState('')
	const [selectedSubValue, setSelectedSubValue] = React.useState('')
	const [selectedMcValue, setSelectedMcValue] = React.useState('')

	const [colorInput, setColorInput] = useState()
	const [productColors, setProductColors] = useState([])

	const [sizeInput, setSizeInput] = useState()
	const [productSizes, setProductSizes] = useState([])

	const addNewColorToArray = () => {
		const newArray = [...productColors, colorInput]
		setProductColors(newArray)
		setColorInput('')
	}

	const deleteColorFromArray = (index) => {
		const newArray = [...productColors]
		newArray.splice(index, 1)
		setProductColors(newArray)
	}

	const addNewSizeToArray = () => {
		const newArray = [...productSizes, sizeInput]
		setProductSizes(newArray)
		setSizeInput('')
	}

	const deleteSizeFromArray = (index) => {
		const newArray = [...productSizes]
		newArray.splice(index, 1)
		setProductSizes(newArray)
	}

	// state for Shipping- Clickcollect - home Delivery'

	const [homeDeliveryDistance, setHomeDeliveryDistance] = useState()
	const [homeDeliveryPrice, setHomeDeliveryPrice] = useState()
	const [shippingPrice, setShippingPrice] = useState()

	const [freeShipping, setFreeShipping] = useState()
	const [freeHomeDelivery, setFreeHomeDelivery] = useState()

	const [shippingChecked, setShippingChecked] = useState(false)
	const [homeDeliveryChecked, setHomeDeliveryChecked] = useState(false)
	const [clickCollectChecked, setClickCollectChecked] = useState(true)

	// rest

	const consolelog = () => {
		console.log(imageList)
	}

	const getDate = () => {
		let newDate = new Date()

		let date_raw = newDate.getDate()
		let month_raw = newDate.getMonth() + 1
		let year = newDate.getFullYear()

		if (date_raw <= 10) {
			let date = '0' + date_raw.toString()
		} else {
			date = date_raw
		}
		if (month_raw <= 10) {
			let month = '0' + month_raw.toString()
		} else {
			month = month_raw
		}

		console.log(year.toString(), month, date)
		let returnedDate = year.toString() + month + date
		console.log('number' + Number(returnedDate))
		console.log('string' + returnedDate)

		return Number(returnedDate)
	}

	const handleComplete = () => {
		firebase
			.firestore()
			.collection('products')
			.doc()
			.set({
				name: productName,
				price: productPrice,
				description: productDescription,
				imageArray: urlArray,
				image: mainImage,
				subCategory: selectedSubValue,
				category: selectedMcValue,
				type: selectedTypeValue,
				colors: productColors,
				sizes: productSizes,
				owner: 'clarkes',
				place: 'bodø',
				owner_query_name: 'clarkesbodø',
				dateCreated: getDate(),
				query_filters: [
					'clarkesbodø',
					`clarkesbodø-${selectedSubValue}-${selectedTypeValue}`,
					`${selectedSubValue}-${selectedTypeValue}`,
				],
			})
			.then(() => {
				console.log('Document successfully written!')
			})
			.catch((error) => {
				console.error('Error writing document: ', error)
			})
	}

	/* eslint prefer-arrow-callback: 0 */

	useEffect(() => {
		imageList.forEach((file, index) => {
			if (file.status === 'CREATED') {
				changeImageField(index, 'status', 'UPLOADING')
				const uploadTask = file.storageRef.put(file.file)
				uploadTask.on(
					'state_changed',
					null,
					function error(err) {
						console.log('Error Image Upload:', err)
					},
					async function complete() {
						const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
						changeImageField(index, 'downloadURL', downloadURL)
						changeImageField(index, 'status', 'FINISH')
						const newArray = [...urlArray, downloadURL]
						setUrlArray(newArray)
						console.log(urlArray)
					}
				)
			}
		})
	})

	const DocStyle = styled('div')(({ theme }) => ({
		padding: theme.spacing(2.5),
		borderRadius: theme.shape.borderRadiusMd,
		backgroundColor:
			theme.palette.mode === 'light'
				? alpha(theme.palette.primary.main, 0.08)
				: theme.palette.primary.lighter,
	}))

	return (
		<DashboardLayout>
			<Page title='Create Product'>
				<Container component='main'>
					<HeaderBreadcrumbs
						heading='Create product'
						subheader='Fill in the required fields to create product'
						links={[
							{
								name: 'Dashboard',
								href: '/dashboard',
							},
							{
								name: 'Your products',
								href: '/dashboard/ViewProducts',
							},
							{ name: 'Create Product' },
						]}
					/>

					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							<ProductInformation
								productName={productName}
								setProductName={setProductName}
								productPrice={productPrice}
								setProductPrice={setProductPrice}
								productDescription={productDescription}
								setProductDescription={setProductDescription}
								productMainPicture={productMainPicture}
								setProductMainPicture={setProductMainPicture}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<GetCollections
								selectedMcValue={selectedMcValue}
								setSelectedMcValue={setSelectedMcValue}
								selectedSubValue={selectedSubValue}
								setSelectedSubValue={setSelectedSubValue}
								selectedTypeValue={selectedTypeValue}
								setSelectedTypeValue={setSelectedTypeValue}
							/>
						</Grid>

						<Grid item xs={12}>
							<Card>
								<CardHeader
									title='Upload Additional Images'
									subheader='Select and upload images from your device'
									titleTypographyProps={{ color: 'textPrimary' }}
								/>
								<CardContent>
									<UploadMultiFile
										hasFile={hasFile}
										setHasFile={setHasFile}
										value={files}
										setImageList={setImageList}
										imageList={imageList}
										onChange={setFiles}
										mainImage={mainImage}
										setMainImage={setMainImage}
									/>
								</CardContent>
							</Card>
						</Grid>
						<br />

						<Grid item xs={12}>
							<GetVariants
								productColors={productColors}
								colorInput={colorInput}
								setColorInput={setColorInput}
								addNewColorToArray={addNewColorToArray}
								deleteColorFromArray={deleteColorFromArray}
								sizeInput={sizeInput}
								setSizeInput={setSizeInput}
								addNewSizeToArray={addNewSizeToArray}
								productSizes={productSizes}
								deleteSizeFromArray={deleteSizeFromArray}
							/>
						</Grid>
					</Grid>
					<br />

					<div>
						<ProductShipping
							homeDeliveryDistance={homeDeliveryDistance}
							setHomeDeliveryDistance={setHomeDeliveryDistance}
							homeDeliveryPrice={homeDeliveryPrice}
							setHomeDeliveryPrice={setHomeDeliveryPrice}
							shippingPrice={shippingPrice}
							setShippingPrice={setShippingPrice}
							shippingChecked={shippingChecked}
							setShippingChecked={setShippingChecked}
							homeDeliveryChecked={homeDeliveryChecked}
							setHomeDeliveryChecked={setHomeDeliveryChecked}
							clickCollectChecked={clickCollectChecked}
							setClickCollectChecked={setClickCollectChecked}
							setFreeShipping={setFreeShipping}
							freeShipping={freeShipping}
							setFreeHomeDelivery={setFreeHomeDelivery}
							freeHomeDelivery={freeHomeDelivery}
						/>
					</div>

					<br />

					<Container
						component='main'
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginBottom: theme.spacing(5),
						}}
					>
						<br />

						<Button
							onClick={handleComplete}
							color='primary'
							variant='contained'
							size='large'
						>
							Complete & Save Product
						</Button>
					</Container>
				</Container>
			</Page>
		</DashboardLayout>
	)
}

export default ProductWizard
