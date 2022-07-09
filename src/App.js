
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

import './App.css';

import Chat from './Chat.js'

/**
 * Init Helmet
 */

const helmetData = new HelmetData({});

/**
 * Chat loader
 */

const ChatLoader = () => {
	const { lang } = useParams();
	return (
		<Chat lang={lang}/>
	);
};

/**
 * Video component
 */

const Video = () => {
	const { lang } = useParams();

	var link = '';
	if ( lang === 'fr' )
		link = 'https://vimeo.com/event/2251400/embed';
	else if ( lang === 'en' )
		link = 'https://vimeo.com/event/2265661/embed';
	else
		return ''; // Invalid or missing language

	return (
		<div className="vimeo">
			<div
				style={{
					padding: '56.25% 0 0 0',
					position: 'relative',
				}}
			>
				<iframe title="vimeo" src={link} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%',
				}}></iframe>
			</div>
		</div>
	);
};

function App() {

	return (

	<Router>

		<Helmet helmetData={helmetData}>

		</Helmet>

		<div className="wp-block-cover alignfull has-background-dim">
			<img loading="lazy" width="2000" height="1125" className="wp-block-cover__image-background wp-image-5990" alt="" src="https://eoatownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03.png" data-object-fit="cover" srcset="https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03.png 2000w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-300x169.png 300w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-1024x576.png 1024w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-768x432.png 768w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/02/Q1-2022-EL-Town-Hall-2.03-1536x864.png 1536w" sizes="(max-width: 2000px) 100vw, 2000px" />
			<div className="wp-block-cover__inner-container">
				<div className="wp-block-image">
					<figure className="aligncenter size-large">
						<img loading="lazy" width="1024" height="118" src="https://eoatownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png" alt="" className="wp-image-5863" srcset="https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1024x118.png 1024w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-300x35.png 300w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-768x89.png 768w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-1536x177.png 1536w, https://eltownhall.ouronlineevent.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-17-at-10.01.18-AM-2048x236.png 2048w" sizes="(max-width: 1024px) 100vw, 1024px"/>
					</figure>
				</div>
			</div>
		</div>

		<div className="App">

			<div className="agenda">

				<h1>AGENDA</h1>
				<h2>July 21st at 3pm &bull; 21 Juillet à 15h</h2>

				<div className="table">
					<div className="row">
						<div className="cell num">1</div>
						<div className="cell">
							<strong>Welcome<br/>
							Bienvenue</strong><br/>
							Rick Gadd, President EL Canada and Essilor Instruments NA
						</div>
					</div>
					<div className="row">
						<div className="cell num">2</div>
						<div className="cell">
							<strong>EssilorLuxottica Canada Story<br/>
							L’histoire de EssilorLuxottica Canada</strong><br/>
							Rick Gadd, President EL Canada and Essilor Instruments NA
						</div>
					</div>
					<div className="row">
						<div className="cell num">3</div>
						<div className="cell">
							<strong>Meet the Leadership Team<br/>
							Rencontrer l’équipe de direction</strong><br/>
							Canada Executive Leadership Team
						</div>
					</div>
					<div className="row">
						<div className="cell num">4</div>
						<div className="cell">
							<strong>New Ways of Working Update<br/>
							Mise à jour des nouvelles méthodes de travail</strong><br/>
							Isabelle Thériault, Vice President of Human Resources EL Canada
						</div>
					</div>
					<div className="row">
						<div className="cell num">5</div>
						<div className="cell">
							<strong>Eye to Eye with Leaders Open Q&amp;A<br/>
							Partage de point de vue avec les leaders, questions et réponses ouvertes</strong><br/>
							Canada Executive Leadership Team
						</div>
					</div>
					<div className="row">
						<div className="cell num">6</div>
						<div className="cell">
							<strong>Special Guest Speaker<br/>
							Conférencier invité</strong><br/>
							Maxime Laoun, Olympic Gold Medalist interviewed by Pascale Desroches, Sr. Marketing<br/>
							Director EL Canada
						</div>
					</div>
					<div className="row">
						<div className="cell num">7</div>
						<div className="cell">
							<strong>Final Thoughts &amp; Close<br/>
							Conclusion</strong><br/>
							Rick Gadd
						</div>
					</div>
					<div className="row">
						<div className="cell num">8</div>
						<div className="cell">
							<strong>Happy Hour (4:30-5:30)<br/>
							Cocktail (4:30-5:30)</strong>
						</div>
					</div>
				</div>

			</div>

			<div className="buttons">
				<h1>Choisissez une langue pour l'événement</h1>
				<h2>Choose a language for the event</h2>
				<a className="button" href="/fr">Français</a>
				<a className="button" href="/en">English</a>
			</div>

			<Routes>
				<Route exact path="/:lang" element={<Video/>}/>
			</Routes>

			<Routes>
				<Route exact path="/:lang" element={<ChatLoader/>}/>
			</Routes>

			<div className="footer">

			</div>

		</div>

	</Router>

  );
}

export default App;

