import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { db } from './firebase.config';
import 
{ 
	collection, 
	addDoc, 
	serverTimestamp, 
	orderBy, 
	query, 
	onSnapshot 
} from 'firebase/firestore';

import './Chat.css';

const Chat = () => { 

	let today = new Date()

    const [messages, setMessages] = useState([]);
	const [stateChat, setStateChat] = useState(false);
	const [getFetchingData, setGetFetchingData] = useState(true);

	const ref = useRef();
    const refSendMessage = useRef();
	const refChatWrapper = useRef();
	const scrollToBottom = useRef();

    const colRef = collection(db, "messages");

    useEffect(()=>{
        onSnapshot(query(colRef, orderBy('timestamp')), querySnapshot=>{
            let messagesUsers = [];
            querySnapshot.forEach(qs=>{
                messagesUsers.push({...qs.data(), id: qs.id})
                setMessages(messagesUsers);
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[getFetchingData]);

	useEffect(() => {
		refChatWrapper?.current?.scrollIntoView({behavior: "smooth"})
	}, [messages]);

	useEffect(() => {
		refChatWrapper?.current?.scrollIntoView({behavior: "smooth"})
	});

	useEffect(() => {
		scrollToBottom?.current?.addEventListener('scroll', scrollHandler);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		return () => scrollToBottom?.current?.removeEventListener('scroll', scrollHandler);
	});

    const handlerClick = (event) => {
        event.preventDefault();
        localStorage.setItem('user', ref.current.value);
        localStorage.setItem('indef', today.getMilliseconds());
    }

    const sendMessageHandler = (e) => {
		e.preventDefault()
		
		if(refSendMessage?.current?.value.trim() === ''){
			return refSendMessage.current.value = '';
			
		}else{
			addDoc(colRef, {
				indef: localStorage.getItem('indef'),
				fullname: localStorage.getItem('user'),
				message: refSendMessage?.current?.value.trim() !== '' && refSendMessage?.current?.value,
				timestamp: serverTimestamp()
			});
			refSendMessage.current.value = '';
		}
    };

	const scrollHandler = () => {
		if(scrollToBottom.current.scrollHeight - (scrollToBottom.current.scrollTop + window.innerHeight) < 10){
			setGetFetchingData(true);
		};
	};

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
						<div 
							key={index} 
							className={message.indef === localStorage.getItem('indef') ? 'chat_content__wrapper_box owner-message' : 'chat_content__wrapper_box'}
						>
							<div 
								style={message.indef === localStorage.getItem('indef') ? {color: '#326fa8'} : {}}
								className="chat_content__wrapper_userName">{message?.fullname}
							</div>
							<div>{message?.message}</div>
						</div>
					))}
					<div ref={refChatWrapper}/>
				</div>
				<form className="chat_wrapper__footer">
					<input 
						ref={refSendMessage} 
						type="text" 
						className="chat_wrapper__footer_input input_styles" 
						placeholder='type here' 
						min={1} 
						minLength={1}
						required
					/>	
					<button type='submit' className="chat_wrapper__footer_send" onClick={sendMessageHandler}>
							<img src='/send_message.png' alt='send'/>
					</button>
				</form>
				</>
				}
				</>
			:
			stateChat &&
			<div className="chat_wrapper__auth">
				<h2>Please enter your full name</h2>
				<form>
					<input 
						ref={ref} 
						type="text" 
						minLength={3} 
						maxLength={15} 
						className="input_styles" 
						placeholder='type here' 
						required
					/>
					<button type='submit' onClick={handlerClick}>Confirm</button>
				</form>
			</div>
			}
		</div>
	);
};

export default Chat;

