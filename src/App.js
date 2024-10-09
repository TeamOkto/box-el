
/**
 * Imports
 */

import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams
} from "react-router-dom";

import { Helmet, HelmetData } from 'react-helmet-async';

//import Chat from './Chat.js'
import Agenda from './Agenda.js'
//import Video from './Video.js'

import './App.css';


/**
 * Init Helmet
 */

const helmetData = new HelmetData({});

/**
 * Chat loader
 */

/*const ChatLoader = () => {
	const { lang } = useParams();
	return (
		<Chat lang={lang}/>
	);
};*/

/**
 * Agenda loader
 */

const AgendaLoader = () => {
	const { lang } = useParams();
	return (
		<Agenda lang={lang}/>
	);
};

/**
 * Video component
 */

/*const VideoLoader = () => {
	const { lang } = useParams();
	return (
		<Video lang={lang}/>
	);
};*/

/**
 * App
 */

function App() {

	return (
		<>

	<Router>

		<Helmet helmetData={helmetData}>

		</Helmet>

		<div className="wp-block-cover alignfull has-background-dim">
			<img loading="lazy" width="2000" height="1125" className="wp-block-cover__image-background wp-image-5990" alt="" src="el/Q1-2022-EL-Town-Hall-2.03.png" data-object-fit="cover" srcset="el/Q1-2022-EL-Town-Hall-2.03.png 2000w, el/Q1-2022-EL-Town-Hall-2.03-300x169.png 300w, el/Q1-2022-EL-Town-Hall-2.03-1024x576.png 1024w, el/Q1-2022-EL-Town-Hall-2.03-768x432.png 768w, el/Q1-2022-EL-Town-Hall-2.03-1536x864.png 1536w" sizes="(max-width: 2000px) 100vw, 2000px" />
			<div className="wp-block-cover__inner-container">
				<div className="wp-block-image">
					<figure className="aligncenter size-large">
						<img loading="lazy" width="1024" height="118" src="el/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png" alt="" className="wp-image-5863" srcset="el/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png 1024w, el/Screen-Shot-2022-01-17-at-10.01.18-AM-300x35.png 300w, el/Screen-Shot-2022-01-17-at-10.01.18-AM-768x89.png 768w, el/Screen-Shot-2022-01-17-at-10.01.18-AM-1536x177.png 1536w, el/Screen-Shot-2022-01-17-at-10.01.18-AM-2048x236.png 2048w" sizes="(max-width: 1024px) 100vw, 1024px"/>
					</figure>
				</div>
			</div>
		</div>

		<div className="App">

			{
			<Routes>
				<Route exact path="/" element={<AgendaLoader/>}/>
				<Route exact path="/:lang" element={<AgendaLoader/>}/>
			</Routes>
			}

			{
			//<Routes>
			//	<Route exact path="/:lang" element={<VideoLoader/>}/>
			//</Routes>
			}

			{
			//<div className="buttons">
			//	<h2>Choisissez une langue pour l'événement</h2>
			//	<h2>Choose a language for the event</h2>
			//	<a className="button" href="/fr">Français</a>
			//	<a className="button" href="/en">English</a>
			//</div>
			}

			{
			//<Routes>
			//	<Route exact path="/:lang" element={<ChatLoader/>}/>
			//</Routes>
			}

			<div className="footer">

			</div>

		</div>

	</Router>
	</>
	);
}

export default App;

