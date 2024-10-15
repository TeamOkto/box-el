
import React, { Component } from 'react';

export default class Agenda extends Component {

	render() {

		var lang = this.props.lang;
		var show = true;
		if ( lang === 'fr' || lang === 'en' ) show = false;

		var label = 'Back to agenda';
		if ( lang === 'fr' ) label = "Retour à l'agenda";

		if ( show && 1 == 2 )
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
									&bull; Fabrizio Uguzzoni, President of Professional Solutions, EssilorLuxottica North America
								</div>
							</div>
							<div className="row">
								<div className="cell num">2</div>
								<div className="cell">
									<strong>
										Innovation Spotlight<br/>
										Mise en lumière des innovations
									</strong><br/>
									&bull; Sherianne James, Chief Marketing Officer/Senior Vice President of PS Marketing, EL NA<br/>
									&bull; Dan Alder, Vice President, Wholesale Marketing, Ray-Ban<br/>
									&bull; Spencer Jones, Director of New Business Categories<br/>
									&bull; Ettore Mosca, Executive Vice President and General Manager of NA Rx Operations
								</div>
							</div>
							<div className="row">
								<div className="cell num">3</div>
								<div className="cell">
									<strong>
										People & Culture<br/>
										Collaborateurs et culture d’entreprise
									</strong><br/>
									&bull; Fabrizio Uguzzoni, President of Professional Solutions, EssilorLuxottica North America<br/>
									&bull; Pasquale Levato, EVP of Human Resources, EssilorLuxottica NA
								</div>
							</div>
							<div className="row">
								<div className="cell num">4</div>
								<div className="cell">
									<strong>
										Happy Hour
									</strong><br/>
									&bull; Hosted by Ray-Ban
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
					<h2>Tuesday, October 22nd from 2:00 to 4:00 PM ET (1:00 to 3:00 PM CT)</h2>
					<h2>Mardi le 22 octobre de 14:00 à 16:00 HNE (13:00 à 15:00 HNC)</h2>
					Agenda coming soon &bull; L'agenda sera disponible bientôt
				</div>
			)
		}
	}
}

