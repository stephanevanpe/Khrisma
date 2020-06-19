import React from 'react';
import { Row, Col, Card, Icon, Table } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../pictures/image1.jpeg';


const Prices = () => {
	return (
		<div style={{
					marginLeft: '0px',
					marginRight: '0px',
					backgroundImage: `url(${Background})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: 'auto',
					width: '100%'
				}}>
			<Navbar />
			<Row>
			</Row>
			<Row>
			</Row>
			<Row>
			</Row>
			<Row>
			</Row>
			<Row>
				<Col s={1}></Col>
				<Col s={10}>
					<Col s={12}>
						<Card
							className='purple lighten-5'
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							textClassName='purple-text text-darken-4'
							title='Tarification'
						>
							Pour les consultations à distance, merci de me faire parvenir le chèque à l'adresse que je vous communiquerai.
							<br/>
							<Table>
								<thead>
									<tr>
										<th data-field='name'>Type de consultation</th>
										<th data-field='price'>Prix</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Médium</td>
										<td>70€ par consultation + supplément si travail très important </td>
									</tr>
									<tr>
										<td>Magnétisme holistique</td>
										<td>Sur devis</td>
									</tr>
									<tr>
										<td>Coupeur de feu</td>
										<td>Sur devis</td>
									</tr>
									<tr>
										<td>Reiki</td>
										<td>Sur devis</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
				</Col>
				<Col s={1}></Col>
			</Row>
			<Row>
			</Row>
			<Row>
			</Row>
			<Footer />
		</div>
	);
};

export default Prices;
