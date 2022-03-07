import { useState, useEffect } from 'react'

// material
import { Container, Typography, Divider, Grid } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

// hooks
// components
import Page from 'src/components/Page'
import NotMappedSubCatExerpt from 'src/components/BuyerSideLandingcc/NotMappedSubCatExerpt'

import SubCatButton from 'src/components/BuyerSideLandingcc/SubCatButton'
import firebase from 'src/firebase/firebase'

// ----------------------------------------------------------------------

export default function ForMen() {
	const theme = useTheme()

	const [jacketProducts, setJacketProducts] = useState({
		id: 'Jacket',
		description: 'Scroll to see the best selection of jackets',
		exImages: '/static/home/product_img_1.jpg',
		color1: '#98f5e1',
		link: '/home/for_men_jacket',
		color2: '#f1c0e8',
		productsArray: [
			{
				id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba012313123',
				cover: '/static/home/product_img_1.jpg',
				images: '../../images/img1',
				name: 'testtest',
				price: 123,
				colors: ['purple', 'black', 'midnight blue'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba022222',
				cover: '/static/home/product_img_2.jpg',
				images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
				name: 'Test2',
				price: 1234,
				colors: ['blue', 'red', 'purple', 'yellow', 'black'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba033',
				cover: '/static/home/product_img_1.jpg',

				images: '../../images/img1',
				name: 'testtest',
				price: 123,
				colors: ['purple', 'black', 'midnight blue'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba012312312',
				cover: '/static/home/product_img_2.jpg',
				images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
				name: 'Test2',
				price: 1234,
				colors: ['blue', 'red', 'purple', 'yellow', 'black'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
		],
	})

	const [suitProducts, setSuitProducts] = useState({
		id: 'Sweater',
		description: 'Scroll to see the best selection of sweaters',
		exImages: '/static/home/product_img_1.jpg',
		color1: '#fde4cf',
		link: '/home/for_men_sweater',
		color2: '#f1c0e8',
		productsArray: [
			{
				id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba012313123',
				cover: '/static/home/product_img_1.jpg',
				images: '../../images/img1',
				name: 'testtest',
				price: 123,
				colors: ['purple', 'black', 'midnight blue'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba022222',
				cover: '/static/home/product_img_2.jpg',
				images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
				name: 'Test2',
				price: 1234,
				colors: ['blue', 'red', 'purple', 'yellow', 'black'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba033',
				cover: '/static/home/product_img_1.jpg',

				images: '../../images/img1',
				name: 'testtest',
				price: 123,
				colors: ['purple', 'black', 'midnight blue'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
			{
				id: 'fc681231221bad5-d430-4033-b8f8-4bc069dc0ba012312312',
				cover: '/static/home/product_img_2.jpg',
				images: 'C:/Users/hakon/production/lokalapp/src/images/img1.jpg',
				name: 'Test2',
				price: 1234,
				colors: ['blue', 'red', 'purple', 'yellow', 'black'],
				inventoryType: 'in_stock',
				status: 'sale',
			},
		],
	})
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		firebase
			.firestore()
			.collection('norway')
			.doc('for_men')
			.collection('suit')
			.get()
			.then((querySnapshot) => {
				const newArray = []
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.data())
					newArray.push(doc.data())
				})
				setSuitProducts({ ...suitProducts, productsArray: newArray })
				setIsLoading(false)
			})
	}, [])

	useEffect(() => {
		setIsLoading(true)
		firebase
			.firestore()
			.collection('norway')
			.doc('for_men')
			.collection('jacket')
			.get()
			.then((querySnapshot) => {
				const newArray = []
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.data())
					newArray.push(doc.data())
				})
				setJacketProducts({ ...jacketProducts, productsArray: newArray })
				setIsLoading(false)
			})
	}, [])

	const subcategories = [
		{
			title: 'Jacket',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Fjacket%2Fjacket5.webp?alt=media&token=38ad8784-3d1b-46ed-a5ab-2ab1db896d13',
			path: '/home/for_men_jacket',
		},
		{
			title: 'Suits',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Fsuit%2Fsuit1.webp?alt=media&token=226b64a0-ca81-4ec2-b44e-882821c612ce',
			path: '/home/for_men_suit',
		},
		{
			title: 'Hoodie',
			img: 'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Fhoodie%2Fhoodie5.webp?alt=media&token=8f47c0c2-0b08-4331-8185-3f427baa64c5',
			path: '/home/for_men_hoodie',
		},
	]

	// src="/static/home/product_img_1.jpg"

	return (
		<Page title='For Women - Clothing - markd'>
			<Container>
				<Typography
					variant='h2'
					component='h1'
					paragraph
					sx={{ margin: theme.spacing(3) }}
				>
					Clothes For Men
				</Typography>
				<Grid container spacing={1}>
					{subcategories.map((subcat, index) => (
						<Grid item xs={6} md={3} key={index}>
							<SubCatButton
								subcatTitle={subcat.title}
								subcatImg={subcat.img}
								key={index}
							/>
						</Grid>
					))}
				</Grid>
				<Divider
					variant='middle'
					sx={{ mt: theme.spacing(5), mb: theme.spacing(2), width: '90%' }}
				/>
				<Grid container spacing={2}>
					'
					<Grid item xs={12}>
						<NotMappedSubCatExerpt subcat={jacketProducts} />
					</Grid>
					<Grid item xs={12}>
						<NotMappedSubCatExerpt subcat={suitProducts} />
					</Grid>
				</Grid>
			</Container>
		</Page>
	)
}
