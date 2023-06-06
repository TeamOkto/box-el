
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
					<h2>June 6th at 3:00pm EDT &bull; 6 juin à 15h00, Heure avancée de l’Est</h2>
					<div id="agenda" className="agenda">
						<div className="table">
							<div className="row">
								<div className="cell num">1</div>
								<div className="cell">
									<strong>
										Welcome & Business Update<br/>
										Accueil et mise à jour des activités professionnelles
									</strong><br/>
									Fabrizio Uguzzoni, President of Professional Solutions, EssilorLuxottica North America
								</div>
							</div>
							<div className="row">
								<div className="cell num">2</div>
								<div className="cell">
									<strong>
										Innovation Spotlight<br/>
										Mise en lumière des innovations
									</strong><br/>
									Sherianne James, Chief Marketing Officer/Senior Vice President of PS Marketing, EL NA<br/>
									Dan Alder, Vice President, Wholesale Marketing, Ray-Ban<br/>
									Spencer Jones, Director of New Business Categories<br/>
									Ettore Mosca, Executive Vice President and General Manager of NA Rx Operations
								</div>
							</div>
							<div className="row">
								<div className="cell num">3</div>
								<div className="cell">
									<strong>
										People & Culture<br/>
										Collaborateurs et culture d’entreprise
									</strong><br/>
									Randee Epstein, Senior Vice President, Human Resources<br/>
									Pasquale Levato, EVP of Human Resources, EssilorLuxottica NA
								</div>
							</div>
							<div className="row">
								<div className="cell num">4</div>
								<div className="cell">
									<strong>
										Happy Hour
									</strong><br/>
									Hosted by Ray-Ban
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

