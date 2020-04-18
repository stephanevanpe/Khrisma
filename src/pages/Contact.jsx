import React, { Component } from 'react';
import { Row, Col, Card, Icon, Button} from 'react-materialize';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import swal from 'sweetalert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cabinet from '../pictures/Cabinet.jpg'


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state= props.formFields;
	}


	render() {

		const position = [43.5405622, -1.4611915];
		const zoom =16;
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
								title='Envoyez-moi un message ou appellez-moi'
							>
								
								<div className='row'>
									<div className='col s12'>
										<Button
											node='button'
											floating
											tooltip='Khrisma@hotmail.fr'
											tooltipOptions={{
												position: 'left',
											}}
											waves='light'
											className='purple darken-4'
										>
											<Icon left>
												<span className='purple-text text-lighten-5'>email</span>
											</Icon>
										</Button>{' '}
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
								Cabinet à Tarnos
								<br />
								<br />
								<div>
									<Map center={position} zoom={zoom} style={{ marginLeft: '0px', marginRight: '0px', height: '250px', width: '100%' }}>
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
														height: '40px',
														weight: 'auto',
													}}
													onClick={() => swal({ icon: `${Cabinet}` })}
												/>

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
