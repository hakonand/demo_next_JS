import { useState, useEffect, useContext } from 'react'

// material

import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'
// components

import BuyerSideWelcome from 'src/components/BuyerSideLandingcc/BuyerSideWelcome'
import BuyerSideHighlight from 'src/components/BuyerSideLandingcc/BuyerSideHighlight'
import BuyerSideHighlightRow from 'src/components/BuyerSideLandingcc/BuyerSideHighlightRow'
import BuyerSideRowOf3 from 'src/components/BuyerSideLandingcc/BuyerSideRowOf3'

import Page from 'src/components/Page'
import firebase from 'src/firebase/firebase'
import MainLayout from 'src/layouts/main'
import { AuthContext } from 'src/contexts/AuthContext'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Home() {
	const [isLoading, setIsLoading] = useState(false)

	const { user, updateFavorites, userInfo, favorites, removeFromFavorites } =
		useContext(AuthContext)

	const [posts, setPosts] = useState([])

	useEffect(() => {
		setIsLoading(true)
		firebase
			.firestore()
			.collection('norway')
			.doc('posts')
			.collection('category')
			.get()
			.then((querySnapshot) => {
				const newArray = []
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.data())
					newArray.push(doc.data())
				})
				setPosts(newArray)
				setIsLoading(false)
			})
	}, [])

	const getMorePosts = () => {
		firebase
			.firestore()
			.collection('norway')
			.doc('posts')
			.collection('category')
			.get()
			.then((querySnapshot) => {
				const newArray = [...posts]
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.data())
					newArray.push(doc.data())
				})
				setPosts(newArray)
			})
	}

	// useEffect(() => {
	//   setIsLoading(true);
	//   firebase
	//     .firestore()
	//     .collection('norway')
	//     .doc('for_men')
	//     .collection('jacket')
	//     .get()
	//     .then((querySnapshot) => {
	//       const newArray = [];
	//       querySnapshot.forEach((doc) => {
	//         // doc.data() is never undefined for query doc snapshots
	//         console.log(doc.data());
	//         newArray.push(doc.data());
	//       });
	//       setProductLine1(newArray);
	//       setIsLoading(false);
	//     });
	// }, []);

	const [maincats, setMainCats] = useState([
		{
			id: 'Man',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-lumn-322207.jpg?alt=media&token=3c33281a-4f18-46e4-94fc-5b58e74fac4b',
			color1: '#b9fbc0',
			color2: '#FBF8CC',
		},
		{
			id: 'Woman',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-jean-van-der-meulen-1457842.jpg?alt=media&token=ad5b8b48-0996-4a13-8ed5-de48cf643558',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
		{
			id: 'Interior',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image: '/static/home/product_img_1.jpg',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
		{
			id: 'Electronics',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			image:
				'https://firebasestorage.googleapis.com/v0/b/heia-daf6b.appspot.com/o/dress%2Flanding%2Fpexels-yugandhar-bonde-4673285.jpg?alt=media&token=8c9bc510-dff8-4302-aa74-f4186e99469a',
			color1: '#fde4cf',
			color2: '#FFCFD2',
		},
	])

	const [subcats, setSubCats] = useState([
		{
			id: 'Jackets',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			exImages: '/static/home/product_img_1.jpg',
			color1: '#b9fbc0',
			color2: '#FBF8CC',
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
		},

		{
			id: 'Shirts',
			description:
				'Scroll to see the best selection of subcat sada sda sdasd ada dasdas',
			exImages: '/static/home/product_img_1.jpg',
			color1: '#fde4cf',
			color2: '#FFCFD2',
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
		},
	])

	return (
		<MainLayout>
			<BuyerSideWelcome subcats={subcats} user={user} maincats={maincats} />

			<Grid container spacing={2}>
				<BuyerSideHighlight post={posts.slice(0, 1)} isLoading={isLoading} />
				<BuyerSideRowOf3 highlightedCollection={posts.slice(0, 3)} />
				<BuyerSideHighlight post={posts.slice(1, 2)} isLoading={isLoading} />
				<BuyerSideHighlightRow highlightedCollection={posts.slice(0, 2)} />
			</Grid>

			<InfiniteScroll
				next={getMorePosts}
				hasMore
				loader={<Typography variant='h6'>Getting more posts...</Typography>}
				dataLength={posts.length}
				style={{ overflow: 'hidden' }}
			>
				{posts.map((item, index) => (
					<BuyerSideHighlight post={[item]} isLoading={isLoading} key={index} />
				))}
			</InfiniteScroll>
		</MainLayout>
	)
}
