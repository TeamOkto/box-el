import React, { useEffect, useMemo, useRef } from 'react';
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
import './components/message'
import { Message } from './components/message';

const Chat = (props) => { 

	let today = new Date()

    const [messages, setMessages] = useState([]);

	const [stateChat, setStateChat] = useState(false);
	const [getFetchingData, setGetFetchingData] = useState(true);

	const ref = useRef();
    const refSendMessage = useRef();
	const refChatWrapper = useRef();
	const scrollToBottom = useRef();

    const colRef = collection(db, "messages");

	const useMemoTime = useMemo(() => {
		return (new Date().getTime()-(new Date().getTime()%1000))/1000
	}, [])

    useEffect(()=>{
        onSnapshot(query(colRef, orderBy('timestamp')), querySnapshot=>{
            let messagesUsers = [];
            querySnapshot.forEach(qs=>{
				const data = qs.data()
				if(data?.timestamp?.seconds > useMemoTime){
					messagesUsers.push({...qs.data(), id: qs.id})
					setMessages(messagesUsers);
				}
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
		setData({name: ref.current.value})
        localStorage.setItem('user', ref.current.value);
        localStorage.setItem('indef', today.getMilliseconds());
		setStateChat(true);
    }

	const [data, setData] = useState({
        name: '',
        indef: 2
    })

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
	useEffect(()=> {
        setData({name: localStorage.getItem('user'), indef: localStorage.getItem('indef')})
    }, [])

	const scrollHandler = () => {
		if(scrollToBottom.current.scrollHeight - (scrollToBottom.current.scrollTop + window.innerHeight) < 10){
			setGetFetchingData(true);
		};
	};

	return(
		<div className={"chat_wrapper"}>
			<div onClick={() => (setStateChat(!stateChat))} className="chat_wrapper__header">
				<p className="chat_wrapper__title">{props.lang === "fr" ? "Messagerie" : "Chat"}</p>
				<button 
						className={stateChat ? "visible-button" : "hidden-button"} 
						onClick={() => setStateChat(!stateChat)}>
					×
				</button>
			</div>
			{data.indef !== null && data.name !== '' ?
			<>
			{stateChat &&
			<>
				<div ref={scrollToBottom} className="chat_content__wrapper">
					{messages.map((message, index) => (
						<Message
							index={index}
							indef={message.indef}
							fullname={message.fullname}
							message={message.message}
							timestamp={message?.timestamp.seconds}
						/>
					))}
					<div ref={refChatWrapper}/>
				</div>
				<form className="chat_wrapper__footer">
					<input 
						ref={refSendMessage} 
						type="text" 
						className="chat_wrapper__footer_input input_styles" 
						placeholder={props.lang === "fr" ? "Écrire ici" : "type here"} 
						min={1} 
						minLength={1}
						autoFocus={true}
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
				<h2>{props.lang === "fr" ? "Veuillez entrer votre nom complet" : "Please enter your full name"}</h2>
				<form>
					<input 
						ref={ref} 
						type="text" 
						minLength={3} 
						maxLength={15} 
						className="input_styles" 
						placeholder={props.lang === "fr" ? "Écrire ici" : "type here"}  
						required
						autoFocus={true}
					/>
					<button type='submit' onClick={handlerClick}>{props.lang === "fr" ? "Confirmer" : "Confirm"}</button>
				</form>
			</div>
			}
		</div>
	);
};

export default Chat;

