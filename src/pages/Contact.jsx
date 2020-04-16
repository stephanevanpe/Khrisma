import React from 'react';
import { Row,Textarea, Col, Card, Icon, Button} from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<br />
			<Row>
				<Col s={1}></Col>
				<Col s={10}>
					<Col s={12}>
						<Card
							className='purple lighten-5'
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							textClassName='purple-text text-darken-4'
							title='Complétez le formulaire de contact'
						>
							I am a very simple card.
							<div class='row'>
								<div class='col s12'>
									<Button
										node='button'
										tooltip='06 46 12 65 28'
										tooltipOptions={{
											position: 'right',
										}}
										waves='light'
										className='purple darken-4'
									>
										<Icon left>
											<span className='purple-text text-lighten-5'>call</span>
										</Icon>
									</Button>
								</div>
							</div>
							<form id='ContactForm' method='POST'>
								<div class='row'>
									<div class='input-field col s6'>
										<input type='text' name='firstName' />
										<label>Nom</label>
									</div>
									<div class='input-field col s6'>
										<input type='text' name='lastName' />
										<label>Prénom</label>
									</div>
								</div>

								<div class='row'>
									<div class='input-field col s4' >
										<input type='date' name='birthday' />
										<label>Date de naissance</label>
									</div>
									<div class='input-field col s4'>
										<input type='number' name='zipcode' />
										<label>Code postale</label>
									</div>
									<div class='input-field col s4'>
										<input type='text' name='city' />
										<label>Ville</label>
									</div>
								</div>
								<div class='row'>
									<div class='input-field col s6'>
										<input type='number' name='foneNumber' />
										<label>Telephone</label>
									</div>
									<div class='input-field col s6'>
										<input type='email' name='mail' />
										<label>Mail</label>
									</div>
								</div>
								<div class='row'>
									<Row>
										<Textarea id='Textarea-12' l={12} m={12} s={12} xl={12} placeholder='Tapez votre message ici' icon={<Icon>mode_edit</Icon>} />
									</Row>
								</div>

								<div class='row'>
									<div class='col s12'>
										<Button node='button' type='submit' waves='light' className='purple darken-4'>
											<span className='purple-text text-lighten-5'>Envoyer</span>
											<Icon left>
												<span className='purple-text text-lighten-5'>send</span>
											</Icon>
										</Button>
									</div>
								</div>
							</form>
						</Card>
					</Col>
				</Col>
				<Col s={1}></Col>
			</Row>

			<br />
			<Footer />
		</div>
	);
};

export default Contact;
