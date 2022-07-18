import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB07inVKgYo4W2lh2UcJw88-i12iobf1vo",
	authDomain: "okto-chat.firebaseapp.com",
	databaseURL: "https://okto-chat-default-rtdb.firebaseio.com",
	projectId: "okto-chat",
	storageBucket: "okto-chat.appspot.com",
	messagingSenderId: "314760933981",
	appId: "1:314760933981:web:524278895599cc2e2ed3b4"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {db}