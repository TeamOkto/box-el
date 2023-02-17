
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
					<h2>February 22nd at 2pm EDT &bull; 22 février à 14h, Heure avancée de l’Est</h2>
					<div id="agenda" className="agenda">
						<div className="table">
							<div className="row">
								<div className="cell num">1</div>
								<div className="cell">
									<strong>
										Welcome, Q4 recap<br/>
										Bienvenue, Récapitulatif du 4ème trimestre
									</strong><br/>
									Rick Gadd, President of Wholesale Canada for Essilor Luxottica &amp; Instruments, North America<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">2</div>
								<div className="cell">
									<strong>
										2023 Business Objectives<br/>
										Objectifs d’affaires 2023
									</strong><br/>
									Rick Gadd, President of Wholesale Canada for Essilor Luxottica &amp; Instruments, North America<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">3</div>
								<div className="cell">
									<strong>
										Marketing Strategy for 2023<br/>
										Stratégie Marketing pour 2023
									</strong><br/>
									Pascale Desroches, Head of Marketing, Essilor Luxottica Canada<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">4</div>
								<div className="cell">
									<strong>
										Frames Overview<br/>
										Survol des montures
									</strong><br/>
									Ken Clark, National Director of Sales, Essilor Luxottica Canada<br/>
									Marty Hosseiny, Sales Manager, Key Accounts, Essilor Luxottica Canada<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">5</div>
								<div className="cell">
									<strong>
										Human Ressources Update<br/>
										Mise à jour des Ressources humaines
									</strong><br/>
									Isabelle Thériault, Vice présidente, Ressources humaines, Essilor Luxottica Canada<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">6</div>
								<div className="cell">
									<strong>
										Update on OneSight Essilor Luxottica Foundation Canada <br/>
										Mise à jour sur la Fondation OneSight Essilor Luxottica Foundation Canada
									</strong><br/>
									Kris Kelm, Community Impact Manager, OneSight Essilor Luxottica Foundation, Canada<br/>
									10 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">7</div>
								<div className="cell">
									<strong>
										Q&A<br/>
										Questions et réponses
									</strong><br/>
									10-15 minutes
								</div>
							</div>
							<div className="row">
								<div className="cell num">8</div>
								<div className="cell">
									<strong>
										Coffee and sweets (3:00-4:00)<br/>
										Café et gourmandises (3:00-4:00)
									</strong>
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
						<a className="button auto" href="/">{label}</a>
					</div>
				</div>
			)
		}
	}
}

