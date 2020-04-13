import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyAycjKWSq08w7GIooYau3wUEyDGCIXD64s',
	authDomain: 'chatty-44a8d.firebaseapp.com',
	databaseURL: 'https://chatty-44a8d.firebaseio.com',
	projectId: 'chatty-44a8d',
	storageBucket: 'chatty-44a8d.appspot.com',
	messagingSenderId: '259891034420',
	appId: '1:259891034420:web:6d33978fbce8b068230d61',
	measurementId: 'G-7JPE1KC14H'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;

export const db = firebase.database();
