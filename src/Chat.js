
import React, { Component } from 'react';

import './Chat.css';

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB07inVKgYo4W2lh2UcJw88-i12iobf1vo",
	authDomain: "okto-chat.firebaseapp.com",
	databaseURL: "https://okto-chat-default-rtdb.firebaseio.com",
	projectId: "okto-chat",
	storageBucket: "okto-chat.appspot.com",
	messagingSenderId: "314760933981",
	appId: "1:314760933981:web:524278895599cc2e2ed3b4"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export default class Chat extends Component {

	render() {

		/*const city = {
			name: "Los Angeles",
			state: "CA",
			country: "USA"
		}
		addDoc(collection(db, 'cities'), city);*/

	    return(
			<div className="chat">
				Chat (lang: {this.props.lang})
			</div>
		)
  }
}

