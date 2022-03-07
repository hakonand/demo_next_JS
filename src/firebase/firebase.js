import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyDtA-CsNs-DiQYGKMoZx5BCVDZ6EvGdiDU',
		authDomain: 'heia-daf6b.firebaseapp.com',
		projectId: 'heia-daf6b',
		storageBucket: 'heia-daf6b.appspot.com',
		messagingSenderId: '915543439791',
		appId: '1:915543439791:web:01e10ca865f0938efa975a',
	})
}

const db = firebase.firestore()

const storage = firebase.storage()

export default firebase
