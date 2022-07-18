import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCRezzblQzSMd-PSCJzt5LVl5I_NxllWfU",
	authDomain: "fir-chat-45024.firebaseapp.com",
	databaseURL: "https://fir-chat-45024-default-rtdb.firebaseio.com",
	projectId: "fir-chat-45024",
	storageBucket: "fir-chat-45024.appspot.com",
	messagingSenderId: "431344732971",
	appId: "1:431344732971:web:9b4be47f28bf70642a536e",
	measurementId: "G-QB60Q28KRQ"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {db}