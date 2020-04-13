import { auth } from '../services/firebase';

const signup = (email, password) => {
	return auth().createUserWithEmailAndPassword(email, password);
};

const signin = (email, password) => {
	return auth().signInWithEmailAndPassword(email, password);
};

export default { signup, signin };
