import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { db } from './firebase.config';

import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

import './Chat.css';

const Chat = () => { 
	const [messages, setMessages] = useState([]);

	const colRef = collection(db, 'messages');

		getDocs(colRef)
		.then((snapshot)=> {
			let messagesUsers = [];
			snapshot.forEach((doc) => {
				messagesUsers.push({...doc.data(), id: doc.id})
			});
			setMessages(messagesUsers);
		})
		.catch((err) => console.error(err.message))

	const [data, setData] = useState({
		name: ""
	})

	const ref = useRef();
	const refSendMessage = useRef();

	const handlerClick = (event) => {
		event.preventDefault();
		setData({name: ref.current.value})
		localStorage.setItem('user', ref.current.value);
	}

	useEffect(()=> {
		setData({name: localStorage.getItem('user')})
	}, [])

	const sendMessageHandler = (e) => {
		e.preventDefault();
		addDoc(colRef, {
			fullname: localStorage.getItem('user'),
			message: refSendMessage?.current?.value,
			timestamp: serverTimestamp()
		})
	}

	return(
		<div className="chat_wrapper">
			<div className="chat_wrapper__header">
				<p className="chat_wrapper__title">Chat</p>
			</div>
			{localStorage.getItem('user') !== null && localStorage.getItem('user') !== '' ?
			<>
				<div className="chat_content__wrapper">
					{messages.map((message, index) => (
						<div key={index} className="chat_content__wrapper_box">
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

