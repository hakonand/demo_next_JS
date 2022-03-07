import { useState } from 'react'

// material
import {
	Container,
	Typography,
	Grid,
	Button,
	CardActionArea,
	Stack,
	Box,
} from '@mui/material'
import NextLink from 'next/link'

import { useTheme, styled } from '@mui/material/styles'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { Icon } from '@iconify/react'
import plusCircleOutline from '@iconify/icons-eva/plus-circle-outline'
import questionMarkFill from '@iconify/icons-eva/question-mark-fill'
import FacebookIcon from '@mui/icons-material/Facebook'
import { FacebookShareButton, PinterestShareButton } from 'react-share'

// hooks
// components
import Page from 'src/components/Page'

import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs'
import DashboardLayout from 'src/layouts/dashboard'

const ProductImgStyle = styled('img')({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	loading: 'lazy',
	position: 'absolute',
	borderRadius: 2,
})
const IconStyle = styled(Icon)(({ theme }) => ({
	top: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	loading: 'lazy',
	position: 'absolute',
	borderRadius: 2,
}))

// ----------------------------------------------------------------------

export default function SomeAssistant() {
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

	const [platform, setPlatform] = useState('')

	const [inputValue, setInputValue] = useState('')

	const handleProductInput = (value) => {
		setInputValue(value)
	}
	const [value, setValue] = useState([])

	const [posts, setPosts] = useState([
		{
			id: 0,
			title: 'Set the perfect Chrismas table',
			descr:
				'Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod, ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus blandit leo ut odio.',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5',
		},
	])

	const [postTitle, setPostTitle] = useState('')
	const [postDescr, setPostDescr] = useState('')
	const [postImage, setPostImage] = useState(
		'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/product_2.jpg?alt=media&token=58ed7bb3-02bb-4cb6-8042-0f077ef313c5'
	)

	const handleCreatePost = () => {
		const newArray = [
			{
				id: posts.length,
				title: postTitle,
				descr: postDescr,
				image: postImage,
			},
			...posts,
		]
		setPosts(newArray)
		setPostTitle('')
		setPostDescr('')
		// setPostImage("")
	}

	return (
		<DashboardLayout>
			<Page title='Digital Presence - markd'>
				<Container>
					<HeaderBreadcrumbs
						heading='Digital Presence'
						links={[
							{
								name: 'Dashboard',
								href: '/dashboard/Home',
							},
							{ name: 'Create Web & Social Posts' },
						]}
					/>

					<Grid container spacing={{ xs: 4, md: 6, lg: 4 }} mb={5}>
						<Grid item xs={12}>
							<Stack
								direction='column'
								justifyContent='space-around'
								alignItems='flex-start'
								sx={{
									height: '100%',
								}}
							>
								<Stack>
									<Typography variant='h5' component='h1' paragraph>
										Create posts for your to boost your online visibility!
									</Typography>
									<Typography gutterBottom>
										Curabitur turpis. Vestibulum facilisis, purus nec pulvinar
										iaculis, ligula mi congue nunc, vitae euismod ligula urna in
										dolor. Nam quam nunc, blandit vel, luctus pulvinar,
										hendrerit id, lorem. Phasellus blandit leo ut odio.
										Vestibulum ante ipsum primis in faucibus orci luctus et
										ultrices posuere cubilia Curae; Fusce id purus. Aliquam
										lorem ante, dapibus in, viverra quis, feugiat a, tellus. In
										consectetuer turpis ut velit. Aenean posuere, tortor sed
										cursus feugiat, nunc augue blandit nunc, eu sollicitudin
										urna dolor sagittis lacus. Vestibulum suscipit nulla quis
										orci. Nam commodo suscipit quam. Sed a libero.
									</Typography>
								</Stack>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<div>
								<NextLink href='/dashboard/SoMeWizard'>
									<CardActionArea>
										<Box
											sx={{
												pt: '100%',
												position: 'relative',
												backgroundColor: theme.palette.primary.main,
											}}
										>
											<IconStyle
												icon={plusCircleOutline}
												alt='Create post'
												color={theme.palette.common.white}
											/>
										</Box>
										<Stack
											direction='column'
											spacing={1}
											sx={{ mt: theme.spacing(2) }}
										>
											<Typography variant='subtitle1'>
												Create new post
											</Typography>
											<Typography variant='body2'>
												Click here to create another post
											</Typography>
										</Stack>
									</CardActionArea>
								</NextLink>
							</div>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<div>
								<CardActionArea onClick={() => console.log(posts)}>
									<Box
										sx={{
											pt: '100%',
											position: 'relative',
											backgroundColor: theme.palette.success.main,
										}}
									>
										<IconStyle
											icon={questionMarkFill}
											alt='Get help!'
											color={theme.palette.common.white}
										/>
									</Box>
									<Stack
										direction='column'
										spacing={1}
										sx={{ mt: theme.spacing(2) }}
									>
										<Typography variant='subtitle1'>Need help?</Typography>
										<Typography variant='body2'>
											Click here to see a guide or talk to us!
										</Typography>
									</Stack>
								</CardActionArea>
							</div>
						</Grid>
					</Grid>

					<Grid container spacing={2}>
						<Grid item xs={12} mt={2}>
							<Typography variant='h5' gutterBottom>
								Share your published posts!
							</Typography>
							<Typography variant='body1'>
								Click on a post to publish to social media as well! These posts
								are now visible on markd and any search engine such as Google.
							</Typography>
						</Grid>

						{posts.map((item) => {
							const sharetext = item.title
								.concat('\n')
								.concat('\n')
								.concat(item.descr)

							return (
								<Grid item xs={12} sm={6} md={4} key={item.id}>
									<div>
										<CardActionArea onClick={() => console.log(posts)}>
											<Box
												sx={{
													pt: '100%',
													position: 'relative',
												}}
											>
												<ProductImgStyle src={item.image} />
											</Box>
										</CardActionArea>
										<Stack
											direction='column'
											spacing={1}
											sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }}
										>
											<Typography variant='subtitle1'>{item.title}</Typography>
											<Typography variant='body2'>
												{item.descr.substring(0, 150)} ...
											</Typography>

											<FacebookShareButton
												quote={sharetext}
												url='https://nextjs.org/docs/api-reference/next/image'
											>
												<Button
													startIcon={<FacebookIcon />}
													variant='contained'
													fullWidth
													size='large'
												>
													Share to Facebook
												</Button>
											</FacebookShareButton>

											<PinterestShareButton
												description={sharetext}
												resetButtonStyle
												media='https://www.vetinst.no/nyheter/mistanke-om-herpesvirusinfeksjon-hos-hest/_/image/37da3072-3a3d-4607-b357-aa0b7729d0b6:6bc24b68e731cba3112bf1acde90532045b573bc/max-2400/COLOURBOX6087750.JPG'
											>
												<Button
													startIcon={<PinterestIcon />}
													variant='contained'
													fullWidth
													size='large'
												>
													Share to Pinterest
												</Button>
											</PinterestShareButton>
										</Stack>
									</div>
								</Grid>
							)
						})}
					</Grid>
				</Container>
			</Page>{' '}
		</DashboardLayout>
	)
}

// <Grid item xs={12}>
// {' '}
// <Typography variant="subtitle1">Select Platform</Typography>{' '}
// </Grid>
// <Grid item xs={4}>
// <div>
//   <CardActionArea
//     sx={{
//       p: theme.spacing(1),
//       justifyContent: 'center',
//       borderRadius: 1,
//       backgroundColor:
//         platform === 'Google' ? theme.palette.primary.lighter : theme.palette.common.white
//     }}
//     onClick={() => setPlatform('Google')}
//   >
//     <Stack direction="column" justifyContent="center" alignItems="center">
//       <GoogleIcon sx={{ my: theme.spacing(1) }} />
//       <Typography variant="subtitle1">Google</Typography>
//     </Stack>
//   </CardActionArea>
// </div>
// </Grid>

// <Grid item xs={4}>
// <div>
//   <CardActionArea
//     sx={{
//       p: theme.spacing(1),
//       justifyContent: 'center',
//       borderRadius: 1,
//       backgroundColor:
//         platform === 'Facebook' ? theme.palette.primary.lighter : theme.palette.common.white
//     }}
//     onClick={() => setPlatform('Facebook')}
//   >
//     <Stack direction="column" justifyContent="center" alignItems="center">
//       <FacebookIcon sx={{ my: theme.spacing(1) }} />
//       <Typography variant="subtitle1">Facebook</Typography>
//     </Stack>
//   </CardActionArea>
// </div>
// </Grid>

// <Grid item xs={4}>
// <div>
//   <CardActionArea
//     sx={{
//       p: theme.spacing(1),
//       justifyContent: 'center',
//       borderRadius: 1,
//       backgroundColor:
//         platform === 'Instagram' ? theme.palette.primary.lighter : theme.palette.common.white
//     }}
//     onClick={() => setPlatform('Instagram')}
//   >
//     <Stack direction="column" justifyContent="center" alignItems="center">
//       <InstagramIcon sx={{ my: theme.spacing(1) }} />
//       <Typography variant="subtitle1">Instagram</Typography>
//     </Stack>
//   </CardActionArea>
// </div>
// </Grid>

// <Grid container spacing={2}>
// <Grid item xs={12}>
//   <Typography variant="subtitle1">Enter the title & description for your post</Typography>
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     value={postTitle}
//     onChange={(e) => setPostTitle(e.target.value)}
//     label="Title"
//     fullWidth
//     variant="filled"
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField
//     value={postDescr}
//     onChange={(e) => setPostDescr(e.target.value)}
//     label="Text"
//     fullWidth
//     variant="filled"
//     multiline
//     rows={5}
//   />
// </Grid>
// </Grid>
// </Grid>

// <Grid item xs={12} md={6}>
// <Grid container spacing={2}>
// <Grid item xs={12}>
//   <Typography variant="subtitle1">Select Products & Cover Image for your post</Typography>
// </Grid>
// <Grid item xs={12}>
//   <Autocomplete
//     fullWidth
//     multiple
//     filterSelectedOptions
//     value={value}
//     onChange={(event, newValue) => {
//       setValue(newValue);
//     }}
//     inputValue={inputValue}
//     onInputChange={(event, newInputValue) => {
//       setInputValue(newInputValue);
//     }}
//     id="Choose-product"
//     options={options}
//     getOptionLabel={(option) => (option.name ? option.name : '')}
//     isOptionEqualToValue={(option, value) => option.id === value.id}
//     renderInput={(params) => <TextField {...params} label="Choose product" variant="filled" />}
//     renderOption={(params, option) => (
//       <Stack direction="row" spacing={2} p={2} {...params}>
//         <img alt={option.name} loading="lazy" height="64px" width="64px" src={option.image} />
//         <Typography variant="subtitle1">{option.name}</Typography>
//       </Stack>
//     )}
//   />
// </Grid>
// <Grid item xs={12}>
//   <TextField label="PLACEHOLDER COVER IMG UPLOAD" fullWidth variant="filled" multiline rows={3} />
// </Grid>
// </Grid>
// </Grid>
// <Grid item xs={12}>
// <Grid container direction="row" justifyContent="center" alignItems="center">
// <Button fullWidth variant="contained" color="success" size="large" onClick={handleCreatePost}>
//   Publish to web
// </Button>
// </Grid>
// </Grid>
