import React, { useEffect, useState, createContext, useContext } from 'react'
import firebase from '../firebase/firebase'
import { useRouter } from 'next/router'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [userInfo, setUserInfo] = useState()
	const [favorites, setFavorites] = useState([])
	const [cart, setCart] = useState([])

	const [errorMessage, setErrorMessage] = useState('')

	const router = useRouter()

	const updateFavorites = async (productId) => {
		let newArray = [...favorites]
		newArray.push(productId)

		firebase
			.firestore()
			.collection('users')
			.doc(user)
			.update({
				favorites: firebase.firestore.FieldValue.arrayUnion(productId),
			})
			.then(() => {
				console.log('Updated')
				setUserInfo({ ...userInfo, favorites: newArray })
				setFavorites(newArray)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const updateCart = async (productId, qty, selectedSize, price) => {
		let newArray = [...cart]

		let cartObject = {
			id: productId,
			quantity: qty,
			size: selectedSize,
			price: price,
		}

		newArray.push(cartObject)
		setCart(newArray)

		if (user) {
			firebase
				.firestore()
				.collection('users')
				.doc(user)
				.update({
					cart: newArray,
				})
				.then(() => {
					console.log('Updated')
					setUserInfo({ ...userInfo, cart: newArray })
				})
				.catch((error) => {
					console.log(error)
				})
		}

		console.log('updated', cart)
	}

	const removeFromFavorites = async (productId) => {
		let newArray = [...favorites]
		newArray.splice(newArray.indexOf(productId), 1)

		firebase
			.firestore()
			.collection('users')
			.doc(user)
			.update({
				favorites: firebase.firestore.FieldValue.arrayRemove(productId),
			})
			.then(() => {
				console.log('Updated')
				setUserInfo({ ...userInfo, favorites: newArray })
				setFavorites(newArray)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const createUser = async (email, password, name, address, zipCode, city) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				userCredentials.user.updateProfile({
					displayName: name,
					email: email,
				})
				setUser(userCredentials.user)
				console.log({ user })

				firebase
					.firestore()
					.collection('users')
					.doc(userCredentials.user.uid)
					.set({
						name: name,
						email: email,
						city: city,
						zipCode: zipCode,
						address: address,
						favorites: [],
						cart: [],
					})
			})
			.then(() => {
				console.log('Document successfully written!')
			})
			.catch((error) => {
				console.error('Error writing document: ', error)
			})
		console.log(errorMessage)
	}

	const loginUser = (email, password) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				setUser(userCredentials.user.uid)
				setErrorMessage('')
				firebase
					.firestore()
					.collection('users')
					.doc(userCredentials.user.uid)
					.get()
					.then((doc) => {
						setUserInfo(doc.data())
						setFavorites(doc.data().favorites)
						setCart(doc.data().cart)
						console.log(userCredentials.user.uid, doc.data())
						router.push('/Home')
					})
			})
			.catch((error) => {
				console.log(error)
				setErrorMessage(error.code)
			})
	}

	const logoutUser = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(null)
				setUserInfo(null)
				setFavorites([])
				console.log(user)
			})
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				createUser,
				loginUser,
				logoutUser,
				errorMessage,
				updateFavorites,
				userInfo,
				favorites,
				removeFromFavorites,
				updateCart,
				cart,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
