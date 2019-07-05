import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyA7BInBx1ghaQrKyOB44zD2V0_v8jycmng',
	authDomain: 'crwn-ecomm.firebaseapp.com',
	databaseURL: 'https://crwn-ecomm.firebaseio.com',
	projectId: 'crwn-ecomm',
	storageBucket: '',
	messagingSenderId: '952105743425',
	appId: '1:952105743425:web:a0aac76f0e5a6485'
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
