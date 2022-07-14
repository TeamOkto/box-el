import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA_0GPDiKi_3SK3clG1TvIxAxwvffmVbus",
	authDomain: "todolist-dcc0a.firebaseapp.com",
	projectId: "todolist-dcc0a",
	storageBucket: "todolist-dcc0a.appspot.com",
	messagingSenderId: "196415986511",
	appId: "1:196415986511:web:2d4f2a4d02f3261e14c33a"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {db}
