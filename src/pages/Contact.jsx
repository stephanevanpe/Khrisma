import React, { Component } from 'react';
import { Row,Textarea, Col, Card, Icon, Button} from 'react-materialize';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import swal from 'sweetalert';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cabinet from '../pictures/Cabinet.jpg'


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 43.5492979,
			lng: -1.4872277,
			zoom: 16,
		};
	}
	render() {
		const position = [this.state.lat, this.state.lng];
		return (
			<div>
				<Navbar />

				<Row>
					<Col s={1}></Col>
					<Col s={10}>
						<Col s={12}>
							<Card
								className='purple lighten-5'
								closeIcon={<Icon>close</Icon>}
								revealIcon={<Icon>more_vert</Icon>}
								textClassName='purple-text text-darken-4'
								title='Laissez moi un message ou appellez-moi'
							>
								I am a very simple card.
								<div className='row'>
									<div className='col s12'>
										<Button
											node='button'
											floating
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
								<form name='khrismacontact' data-netlify='true' method='POST' action='/'>
									<input type='hidden' name='form-name' value='contact' />
									<p>
										<p className='row'>
											<p className='input-field col s6'>
												<input type='text' name='firstName' />
												<label>Nom</label>
											</p>
											<p className='input-field col s6'>
												<input type='text' name='lastName' />
												<label>Prénom</label>
											</p>
										</p>
										<br />
										<p className='row'>
											<p className='input-field col s4'>
												<input type='date' name='birthday' />
												<label>Date de naissance</label>
											</p>
											<p className='input-field col s4'>
												<input type='number' name='zipcode' />
												<label>Code postale</label>
											</p>
											<p className='input-field col s4'>
												<input type='text' name='city' />
												<label>Ville</label>
											</p>
										</p>
										<p className='row'>
											<p className='input-field col s6'>
												<input type='number' name='foneNumber' />
												<label>Telephone</label>
											</p>
											<p className='input-field col s6'>
												<input type='email' name='mail' />
												<label>Mail</label>
											</p>
										</p>

										<p className='row'>
											<Row>
												<Textarea
													name='message'
													id='Textarea-12'
													l={12}
													m={12}
													s={12}
													xl={12}
													placeholder='Tapez votre message ici'
													icon={<Icon>mode_edit</Icon>}
												/>
											</Row>
										</p>
										<p className='row'>
											<p className='col s12'>
												<button node='button' type='submit' waves='light' className='purple darken-4'>
													<span className='purple-text text-lighten-5'>Envoyer</span>
													<Icon left>
														<span className='purple-text text-lighten-5'>send</span>
													</Icon>
												</button>
											</p>
										</p>
									</p>
								</form>
							</Card>
						</Col>
					</Col>
					<Col s={1}></Col>
				</Row>
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
								title='Lieux du cabinet'
							>
								11 rue Pierre Hugues <br />
								40220 Tarnos <br />
								France
								<br />
								<br />
								<div>
									<Map center={position} zoom={this.state.zoom} style={{ marginLeft: '0px', marginRight: '0px', height: '250px', width: '100%' }}>
										<TileLayer
											attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
											url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
										/>
										<Marker position={position}>
											<Popup>
												<img
													src={Cabinet}
													alt='déchets'
													style={{
														height: '50px',
														weight: '80px',
													}}
													onClick={() => swal({ icon: `${Cabinet}` })}
												/>
												<br />
												11 rue Pierre Hugues
												<br /> 40220 Tarnos
												<br /> France
											</Popup>
										</Marker>
									</Map>
								</div>
							</Card>
						</Col>
					</Col>
					<Col s={1}></Col>
				</Row>
				<Footer />
			</div>
		);
	}
}

export default Contact;
