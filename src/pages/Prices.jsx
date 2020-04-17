import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Prices = () => {
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
							title='Tarification'
						>
							11 rue Pierre Hugues 40220 Tarnos France
							
						</Card>
					</Col>
				</Col>
				<Col s={1}></Col>
			</Row>
			<Footer />
		</div>
	);
};

export default Prices;
