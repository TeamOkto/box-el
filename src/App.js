
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";

import { Helmet, HelmetData } from 'react-helmet-async';

import './App.css';

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
const db = getFirestore(app);

const helmetData = new HelmetData({});

const Video = () => {
  const { lang } = useParams();

  var link = '';
  if ( lang === 'fr' )
    link = 'fr';
  else if ( lang === 'en' )
    link = 'en';
  else
    return ''; // Invalid or missing language

  return (
	<div>
		Vimeo ({link})
	</div>
  );
};

const Chat = () => {
  return (
	<div className="App-chat">
		Chat
	</div>
  );
};

function App() {

	/*
	const city = {
		name: "Los Angeles",
		state: "CA",
		country: "USA"
	}
	addDoc(collection(db, 'cities'), city);
	*/

  return (
	<Router>
		<Helmet helmetData={helmetData}>

		</Helmet>
		<div class="wp-block-cover alignfull has-background-dim">
			<img loading="lazy" width="2000" height="1125" class="wp-block-cover__image-background wp-image-5990" alt="" src="https://eoatownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03.png" data-object-fit="cover" srcset="https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03.png 2000w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-300x169.png 300w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-1024x576.png 1024w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-768x432.png 768w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-1536x864.png 1536w" sizes="(max-width: 2000px) 100vw, 2000px" />
			<div class="wp-block-cover__inner-container">
				<div class="wp-block-image">
					<figure class="aligncenter size-large">
						<img loading="lazy" width="1024" height="118" src="https://eoatownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png" alt="" class="wp-image-5863" srcset="https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png 1024w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-300x35.png 300w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-768x89.png 768w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1536x177.png 1536w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-2048x236.png 2048w" sizes="(max-width: 1024px) 100vw, 1024px"/>
					</figure>
				</div>
			</div>
		</div>
		<div className="App">
			<h1>Event is coming soon.</h1>
			<br/>
			<h1>Événement disponible bientôt.</h1>
		</div>
	</Router>
  );
}

export default App;

