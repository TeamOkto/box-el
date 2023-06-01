
import React, { Component } from 'react';

export default class Video extends Component {

	render() {

		var lang = this.props.lang;
		var link = '';

		//if ( lang === 'fr' )
		//	link = 'https://vimeo.com/event/2896516/embed';
		//else if ( lang === 'en' )
		//	link = 'https://vimeo.com/event/2896519/embed';

		if ( lang === 'fr' )
			link = 'https://vimeo.com/event/3395154/embed/37091b7b37';
		else if ( lang === 'en' )
			link = 'https://vimeo.com/event/3395172/embed/eeeffef848';

		if ( link === '' )
			return ''; // Invalid or missing language

		var label = "EVENT";
		if ( lang === 'fr' ) label = "ÉVÉNEMENT";

		return (
			<div className="vimeo" id="vimeo">
				<h1>{label}</h1>
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
	}
}

