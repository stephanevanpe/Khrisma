import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Background from '../pictures/image1.jpeg';

const Error = () => {
	return (
		<div
			style={{
				marginLeft: '0px',
				marginRight: '0px',
				backgroundImage: `url(${Background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: 'auto',
				width: '100%',
			}}
		>
			<Navbar />
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>


			<Row>
				<Col s={1}></Col>
				<Col s={10}>
					<Col s={12}>
						<Card
							className='purple lighten-5'
							closeIcon={<Icon>close</Icon>}
							revealIcon={<Icon>more_vert</Icon>}
							textClassName='purple-text text-darken-4'
							title="Oups cette page n'existe pas"
						>
							La page que vous recherchez n'est pas disponible.
							<br />
						</Card>
					</Col>
				</Col>
				<Col s={1}></Col>
			</Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>
			<Row></Row>


			<Footer />
		</div>
	);
};

export default Error;
