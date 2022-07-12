
import React, { Component } from 'react';

export default class Agenda extends Component {

	render() {

		var lang = this.props.lang;
		var show = true;
		if ( lang === 'fr' || lang === 'en' ) show = false;

		var label = 'Back to agenda';
		if ( lang === 'fr' ) label = "Retour à l'agenda";

		if ( show )
		{
		    return(
				<div>
					<h1>AGENDA</h1>
					<h2>July 21st at 3pm EDT &bull; 21 Juillet à 15h, Heure avancée de l’Est</h2>
					<div id="agenda" className="agenda">
						<div className="table">
							<div className="row">
								<div className="cell num">1</div>
								<div className="cell">
									<strong>Welcome<br/>
									Bienvenue</strong><br/>
									Rick Gadd, President EssilorLuxottica Canada and Essilor Instruments NA
								</div>
							</div>
							<div className="row">
								<div className="cell num">2</div>
								<div className="cell">
									<strong>EssilorLuxottica Wholesale Canada Story<br/>
									L’histoire de EssilorLuxottica Canada</strong><br/>
									Rick Gadd, President EL Canada and Essilor Instruments NA
								</div>
							</div>
							<div className="row">
								<div className="cell num">3</div>
								<div className="cell">
									<strong>Meet the Canadian Leadership Team<br/>
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
									Maxime Laoun, Olympic Gold Medalist interviewed by Pascale Desroches, Head of Marketing for Essilor Canada<br/>
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
									<strong>Happy Hour - RX Café (4:30-5:30)<br/>
									Cocktail - RX Café (4:30-5:30)</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
		else
		{
			return(
				<div>
					<h1>AGENDA</h1>
					<div class="agenda">
						<a className="button" href="/">{label}</a>
					</div>
				</div>
			)
		}
	}
}

