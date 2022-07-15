import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { db } from './firebase.config';


import { collection, getDocs, addDoc, doc, getDoc, serverTimestamp, orderBy, query, queryEqual } from 'firebase/firestore';

import './Chat.css';

const Chat = () => { 

	let today = new Date()

	const [messages, setMessages] = useState([]);

	const colRef = collection(db, "messages");

		useEffect(() => {
			const q = query(colRef, orderBy("timestamp"));
			const querySnapshot = getDocs(q);

			let messagesUsers = [];

			querySnapshot
			.then((snapshot)=> {
				snapshot.forEach((doc) => {
					messagesUsers.push({...doc.data(), id: doc.id})
				});
				setMessages(messagesUsers);
			})
			.catch((err) => console.error(err.message));
		}, []);

	const [data, setData] = useState({
		name: "",
		indef: 2
	})

	const ref = useRef();
	const refSendMessage = useRef();

	const handlerClick = (event) => {
		event.preventDefault();
		setData({name: ref.current.value})
		localStorage.setItem('user', ref.current.value);
		localStorage.setItem('indef', today.getMilliseconds());
	}

	useEffect(()=> {
		setData({name: localStorage.getItem('user'), indef: localStorage.getItem('indef')})
	}, [])

	const sendMessageHandler = (e) => {
		e.preventDefault();
		addDoc(colRef, {
			indef: localStorage.getItem('indef'),
			fullname: localStorage.getItem('user'),
			message: refSendMessage?.current?.value,
			timestamp: serverTimestamp()
		})
	}

	async function queryEqual(){
		const docRef = doc(db, 'messages', '712')
		const docSnap = await getDoc(docRef)
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
		  }
		  else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		  }
	}
	queryEqual();

	return(
		<div className="chat_wrapper">
			<div className="chat_wrapper__header">
				<p className="chat_wrapper__title">Chat</p>
			</div>
			{localStorage.getItem('user') !== null && localStorage.getItem('user') !== '' ?
			<>
				<div className="chat_content__wrapper">
					{messages.map((message, index) => (
						<div key={index} className={true ? 'chat_content__wrapper_box owner-message' : 'chat_content__wrapper_box'}>
							<div className="chat_content__wrapper_userName">{message?.fullname}</div>
							<div>{message?.message}</div>
						</div>
					))}
				</div>
				<form className="chat_wrapper__footer">
					<input ref={refSendMessage} type="text" className="chat_wrapper__footer_input input_styles" placeholder='type here' required/>
					<button type='submit' className="chat_wrapper__footer_send" onClick={sendMessageHandler}>
						<img src='/send_message.png' alt='send'/>
					</button>	
				</form>
			</>
			:
			<div className="chat_wrapper__auth">
				<h2>Please enter your full name</h2>
				<form>
					<input ref={ref} type="text" className="input_styles" placeholder='type here' required/>
					<button type='submit' onClick={handlerClick}>Confirm</button>
				</form>
			</div>
			}
		</div>
	);
};

export default Chat;

