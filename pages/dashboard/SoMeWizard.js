import { useState, useEffect } from 'react'

import AddIcon from '@mui/icons-material/Add' // material
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
	Container,
	Typography,
	Grid,
	TextField,
	Button,
	CardActionArea,
	Stack,
	Select,
	Fab,
	MenuItem,
	InputLabel,
	Card,
	FormControl,
	Box,
	CardContent,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import PublicIcon from '@mui/icons-material/Public'
// hooks
// components
import Page from 'src/components/Page'
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs'
import { PATH_DASHBOARD } from 'src/routes/paths'
import { MHidden } from 'src/components/@material-extend'
import UploadPostImage from 'src/components/SoMeAssistant/UploadPostImage'
import firebase from 'src/firebase/firebase'
import DashboardLayout from 'src/layouts/dashboard'

function createGradientRight(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

const ProductImgStyle = styled('img')({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	loading: 'lazy',
	position: 'absolute',
	borderRadius: 2,
})

// ----------------------------------------------------------------------

export default function SoMeWizard() {
	const theme = useTheme()
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

	const topics = ['clothing', 'interior', 'technology']

	const [inputValue, setInputValue] = useState('')

	const handleProductInput = (value) => {
		setInputValue(value)
	}
	const [value, setValue] = useState([])

	const [postTitle, setPostTitle] = useState('')
	const [postDescr, setPostDescr] = useState('')
	const [postImage, setPostImage] = useState('')

	const [postProductLineDescr, setPostProductLineDescr] = useState('')
	const [postProductLineArray, setPostProductLineArray] = useState([])

	const [multipleProductLines, setMultipleProductLines] = useState(false)

	const [selectedTopic, setSelectedTopic] = useState('')

	const getDate = () => {
		let newDate = new Date()

		let date_raw = newDate.getDate()
		let month_raw = newDate.getMonth() + 1
		let year = newDate.getFullYear()

		if (date_raw <= 10) {
			let date = '0' + date_raw.toString()
		} else {
			let date = date_raw.toString()
		}
		if (month_raw <= 10) {
			let month = '0' + month_raw.toString()
		} else {
			let month = month_raw.toString()
		}

		console.log(year.toString(), month, date)
		let returnedDate = year.toString() + month + date
		console.log(Number(returnedDate))

		return Number(returnedDate)
	}

	const handleCreatePost = () => {
		if (multipleProductLines === false) {
			firebase
				.firestore()
				.collection('posts')
				.doc()
				.set({
					title: postTitle,
					descr: postDescr,
					image: postImage,
					author: 'StoreName',
					query_filters: ['clarkesbodø'],
					category: selectedTopic,

					productLines: [
						{ productLines: value, productLineDescr: postProductLineDescr },
					],
					dateCreated: getDate(),
				})
				.then(() => {
					console.log('Document successfully written!')
				})
				.catch((error) => {
					console.error('Error writing document: ', error)
				})

			firebase
				.firestore()
				.collection('merchants')
				.doc('clarkesbodø')
				.collection('posts')
				.doc()
				.set({
					title: postTitle,
					descr: postDescr,
					image: postImage,
					author: 'StoreName',
					query_filters: ['clarkesbodø'],
					category: selectedTopic,

					productLines: [
						{ productLines: value, productLineDescr: postProductLineDescr },
					],
					dateCreated: getDate(),
				})
				.then(() => {
					console.log('Document successfully written!')
				})
				.catch((error) => {
					console.error('Error writing document: ', error)
				})
		} else {
			firebase
				.firestore()
				.collection('posts')
				.doc()
				.set({
					title: postTitle,
					descr: postDescr,
					image: postImage,
					author: 'StoreName',
					query_filters: ['clarkesbodø'],
					category: selectedTopic,
					productLines: postProductLineArray,
					dateCreated: getDate(),
				})
				.then(() => {
					console.log('Document successfully written!')
				})
				.catch((error) => {
					console.error('Error writing document: ', error)
				})

			firebase
				.firestore()
				.collection('merchants')
				.doc('clarkesbodø')
				.collection('posts')
				.doc()
				.set({
					title: postTitle,
					descr: postDescr,
					image: postImage,
					author: 'StoreName',
					query_filters: ['clarkesbodø'],
					category: selectedTopic,
					productLines: postProductLineArray,
					dateCreated: getDate(),
				})
				.then(() => {
					console.log('Document successfully written!')
				})
				.catch((error) => {
					console.error('Error writing document: ', error)
				})
		}
		setPostTitle('')
		setPostDescr('')
		setPostTitle('')
		setValue([])
		setImageList([])
		setSelectedTopic('')

		setPostProductLineDescr('')
		setPostProductLineArray('')
		setPostImage('')
	}

	const addNewProductLine = () => {
		setMultipleProductLines(true)
		const newArray = [
			...postProductLineArray,
			{ productLines: value, productLineDescr: postProductLineDescr },
		]
		setPostProductLineArray(newArray)
		setValue([])
		setPostProductLineDescr('')
	}

	const [hasFile, setHasFile] = useState(0)
	const [files, setFiles] = useState([])
	const [imageList, setImageList] = useState([])
	const [urlArray, setUrlArray] = useState([])

	const changeImageField = (index, parameter, value) => {
		const newArray = [...imageList]
		newArray[index][parameter] = value
		setImageList(newArray)
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
						setPostImage(downloadURL)
						setUrlArray(newArray)
						console.log(urlArray)
					}
				)
			}
			console.log(urlArray)
			console.log(postImage)
		})
	}, [imageList])

	return (
		<DashboardLayout>
			<Page title='Create Web Post - markd'>
				<Container>
					<HeaderBreadcrumbs
						heading='Create Web Post - Digital Presence'
						links={[
							{
								name: 'Dashboard',
								href: '/dashboard/Home',
							},
							{
								name: 'Digital Presence',
								href: '/dashboard/DigitalPresence',
							},
							{ name: 'Create Web Posts' },
						]}
					/>
					<Typography variant='h5' component='h1' paragraph>
						Suggestions
					</Typography>
					<Typography gutterBottom>
						Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis,
						ligula mi congue nunc, vitae euismod ligula urna in dolor. Nam quam
						nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus
						blandit leo ut odio. Vestibulum ante ipsum primis in faucibus orci
						luctus et ultrices posuere cubilia Curae; Fusce id purus. Aliquam
						lorem ante, dapibus in, viverra quis, feugiat a, tellus. In
						consectetuer turpis ut velit. Aenean posuere, tortor sed cursus
						feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
						sagittis lacus. Vestibulum suscipit nulla quis orci. Nam commodo
						suscipit quam. Sed a libero.
					</Typography>
					<Grid container spacing={3} sx={{ mt: theme.spacing(3) }}>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant='subtitle1'>
										Upload a cover photo for your post{' '}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<UploadPostImage
										hasFile={hasFile}
										setHasFile={setHasFile}
										value={files}
										setImageList={setImageList}
										imageList={imageList}
										onChange={setFiles}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl
										variant='standard'
										sx={{ minWidth: 120 }}
										fullWidth
									>
										<InputLabel
											id='Select-Topic-Label'
											sx={{ margin: theme.spacing(1) }}
										>
											Select Topic
										</InputLabel>
										<Select
											labelId='Select-Topic-Label'
											id='Select-Topic'
											variant='filled'
											fullWidth
											required
											value={selectedTopic}
											label='Select Topic'
											onChange={(e) => setSelectedTopic(e.target.value)}
										>
											{topics.map((item, index) => (
												<MenuItem value={item} key={index}>
													{item}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<Typography variant='subtitle1'>
										Enter the title & a short description of your post
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={postTitle}
										onChange={(e) => setPostTitle(e.target.value)}
										label='Title'
										fullWidth
										variant='filled'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={postDescr}
										onChange={(e) => setPostDescr(e.target.value)}
										label='Short description'
										fullWidth
										variant='filled'
										multiline
										rows={5}
									/>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant='subtitle1'>
										Select Products & Write why/how to use these products
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={postProductLineDescr}
										onChange={(e) => setPostProductLineDescr(e.target.value)}
										label='Why - What - How '
										fullWidth
										multiline
										rows={5}
										variant='filled'
									/>
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
										getOptionLabel={(option) =>
											option.name ? option.name : ''
										}
										isOptionEqualToValue={(option, value) =>
											option.id === value.id
										}
										renderInput={(params) => (
											<TextField
												{...params}
												label='Choose product'
												variant='filled'
											/>
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
												<Typography variant='subtitle1'>
													{option.name}
												</Typography>
											</Stack>
										)}
									/>
								</Grid>
								<Grid item xs={12}>
									{postProductLineArray.length > 0 ? (
										<Button
											fullWidth
											variant='outlined'
											color='primary'
											size='large'
											startIcon={<AddIcon />}
											onClick={addNewProductLine}
										>
											Add product line
										</Button>
									) : (
										<Button
											fullWidth
											variant='outlined'
											color='primary'
											size='large'
											startIcon={<AddIcon />}
											onClick={addNewProductLine}
										>
											Add another product selection with another text
											description
										</Button>
									)}
								</Grid>
								<Grid item xs={12}>
									{postProductLineArray.length > 0 ? (
										postProductLineArray.map((item, index) => (
											<Grid container spacing={3} key={index} mt={3}>
												<Grid item xs={12}>
													<Typography variant='body1'>
														{item.productLineDescr}
													</Typography>
												</Grid>
												{item.productLines.map((item, index) => (
													<Grid item xs={12} sm={4} md={3} key={index}>
														<div>
															<CardActionArea
																onClick={() => console.log('hello')}
															>
																<Box
																	sx={{
																		pt: '100%',
																		position: 'relative',
																	}}
																>
																	<ProductImgStyle src={item.image} />
																</Box>
																<Stack
																	direction='column'
																	spacing={1}
																	sx={{ mt: theme.spacing(2) }}
																>
																	<Typography variant='subtitle1'>
																		{item.name}
																	</Typography>
																	<Typography variant='body2'>
																		{item.descr}
																	</Typography>
																</Stack>
															</CardActionArea>
														</div>
													</Grid>
												))}
											</Grid>
										))
									) : (
										<div />
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<Grid
					container
					spacing={3}
					mt={5}
					p={5}
					sx={{
						background: createGradientRight(
							theme.palette.common.black,
							theme.palette.grey[800]
						),
					}}
				>
					<Grid item xs={12} p={2}>
						<Grid
							container
							direction='row'
							justifyContent='center'
							alignItems='center'
						>
							<Typography variant='h5' color={theme.palette.common.white}>
								Check out more from StoreName
							</Typography>
						</Grid>
						<Grid item xs={12} p={2}>
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='center'
							>
								<Button
									variant='contained'
									color='primary'
									startIcon={<ChevronRightIcon />}
									onClick={getDate}
								>
									Go to StoreName
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<MHidden width='lgDown'>
					<Fab
						variant='extended'
						size='large'
						disabled={!postImage}
						onClick={handleCreatePost}
						sx={{
							backgroundColor: theme.palette.success.light,
							mb: theme.spacing(3),
							padding: theme.spacing(3),
							position: 'fixed',
							bottom: 0,
							right: '35%',
						}}
					>
						<PublicIcon sx={{ mr: theme.spacing(1) }} />
						{selectedTopic ? 'Publish to Web' : 'Select Image & Topic'}
					</Fab>
				</MHidden>

				<MHidden width='lgUp'>
					<Fab
						variant='extended'
						size='large'
						disabled={!postImage}
						sx={{
							backgroundColor: theme.palette.success.light,
							margin: theme.spacing(1),
							bottom: theme.spacing(1),
							right: theme.spacing(1),

							position: 'fixed',
							padding: theme.spacing(3),
						}}
					>
						<PublicIcon sx={{ mr: theme.spacing(1) }} />
						{selectedTopic ? 'Publish to Web' : 'Select Image & Topic'}
					</Fab>
				</MHidden>
			</Page>
		</DashboardLayout>
	)
}

// <Grid item xs={12}>
//             <Grid container direction="row" justifyContent="center" alignItems="center">
//               <Button fullWidth variant="contained" color="success" size="large" onClick={handleCreatePost}>
//                 Publish to web
//               </Button>
//             </Grid>
//           </Grid>
