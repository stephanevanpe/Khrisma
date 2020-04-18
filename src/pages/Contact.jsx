import React, { Component } from 'react';
import { Row, Col, Card, Icon, Button} from 'react-materialize';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import swal from 'sweetalert';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cabinet from '../pictures/Cabinet.jpg'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 43.5492979,
			lng: -1.4872277,
			zoom: 16,
			name:"",
			firstname:"",
			birthday:"",
			zipcode:"",
			city:"",
			foneNumber:"",
			mail:"",
			message:"",
		};
	}

handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Message envoyé"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const {name,
			firstname,
			birthday,
			zipcode,
			city,
			foneNumber,
			mail,
			message} =this.state
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
								<form className='khrismacontac' name="contact" netlify onSubmit={this.handleSubmit}>
									<div>
										<div className='row'>
											<p className='input-field col s6'>
												<input type='text' name='name' value={name} onChange={this.handleChange} />
												<label>Nom</label>
											</p>
											<p className='input-field col s6'>
												<input type='text' name='firstname' value={firstname} onChange={this.handleChange} />
												<label>Prénom</label>
											</p>
										</div>
										<br />
										<div className='row'>
											<p className='input-field col s4'>
												<input type='date' name='birthday' value={birthday} onChange={this.handleChange}/>
												<label>Date de naissance</label>
											</p>
											<p className='input-field col s4'>
												<input type='number' name='zipcode' value={zipcode} onChange={this.handleChange}/>
												<label>Code postale</label>
											</p>
											<p className='input-field col s4'>
												<input type='text' name='city' value={city} onChange={this.handleChange}/>
												<label>Ville</label>
											</p>
										</div>
										<div className='row'>
											<p className='input-field col s6'>
												<input type='number' name='foneNumber' value={foneNumber} onChange={this.handleChange} />
												<label>Telephone</label>
											</p>
											<p className='input-field col s6'>
												<input type='email' name='mail' value={mail} onChange={this.handleChange}/>
												<label>Mail</label>
											</p>
										</div>

										<div className='row'>
											<Row>
												<Icon>mode_edit</Icon>
												<textarea
													name='message'
													type='text'
													l={12}
													m={12}
													s={12}
													xl={12}
													placeholder='Tapez votre message ici'
													value={message} onChange={this.handleChange}
												/>
											</Row>
										</div>
										<div className='row'>
											<p className='col s12'>
												<Button node='button' type='submit' waves='light' className='purple darken-4'>
													<span className='purple-text text-lighten-5'>Envoyer</span>
													<Icon left>
														<span className='purple-text text-lighten-5'>send</span>
													</Icon>
												</Button>
											</p>
										</div>
									</div>
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
