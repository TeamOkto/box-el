import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { db } from './firebase.config';


import { collection, addDoc, serverTimestamp, orderBy, query, onSnapshot } from 'firebase/firestore';

import './Chat.css';

const Chat = () => { 

	let today = new Date()

    const [messages, setMessages] = useState([]);
	const [stateChat, setStateChat] = useState(false);

    const colRef = collection(db, "messages");

    useEffect(()=>{
        onSnapshot(query(colRef, orderBy('timestamp')), querySnapshot=>{
            let messagesUsers = [];
            querySnapshot.forEach(qs=>{
                messagesUsers.push({...qs.data(), id: qs.id})
                setMessages(messagesUsers);
            })
        })
    },[])

    const [data, setData] = useState({
        name: '',
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
	const refChatWrapper = useRef();
	const scrollToBottom = useRef();


	useEffect(() => {
		refChatWrapper?.current?.scrollIntoView({behavior: "smooth"})
	}, [messages])

    const sendMessageHandler = (e) => {
        e.preventDefault();
		if(refSendMessage?.current?.value !== ''){
			addDoc(colRef, {
				indef: localStorage.getItem('indef'),
				fullname: localStorage.getItem('user'),
				message: refSendMessage?.current?.value,
				timestamp: serverTimestamp()
			});
			refSendMessage.current.value = '';
		}
    }

	useEffect(() => {
		refChatWrapper?.current?.scrollIntoView({behavior: "smooth"})
	})

	return(
		<div className={"chat_wrapper"}>
			<div onClick={() => (setStateChat(!stateChat))} className="chat_wrapper__header">
				<p className="chat_wrapper__title">Chat</p>
				<button 
						className={!stateChat ? "hidden-button" : "visible-button"} 
						onClick={() => setStateChat(!stateChat)}>
					×
				</button>
			</div>
			{localStorage.getItem('user') !== null && localStorage.getItem('user') !== '' ?
			<>
			{stateChat &&
			<>
				<div ref={scrollToBottom} className="chat_content__wrapper">
					{messages.map((message, index) => (
						<div key={index} className={message.indef == localStorage.getItem('indef') ? 'chat_content__wrapper_box owner-message' : 'chat_content__wrapper_box'}>
							<div 
								style={message.indef == localStorage.getItem('indef') ? {color: '#326fa8'} : {}}
								className="chat_content__wrapper_userName">{message?.fullname}
							</div>
							<div>{message?.message}</div>
						</div>
					))}
					<div ref={refChatWrapper}/>
				</div>
				<form className="chat_wrapper__footer">
					<input ref={refSendMessage} type="text" className="chat_wrapper__footer_input input_styles" placeholder='type here' required/>
					<button type='submit' className="chat_wrapper__footer_send" onClick={sendMessageHandler}>
						<img src='/send_message.png' alt='send'/>
					</button>	
				</form>
				</>
				}
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

