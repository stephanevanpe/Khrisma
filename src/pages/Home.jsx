import React from 'react';
import { Parallax, Row, Col } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lotus from '../pictures/image1.jpeg';
import Lotusbloom from '../pictures/image1.jpeg';
import Deco1 from '../pictures/pngwave1.png';
import Deco2 from '../pictures/pngwave.png';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Parallax
					image={<img alt=' medium tarnos khrisma, fleur de lotus' src={Lotusbloom} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<Col s={12}>
							<h1 style={{ color: '#d2b16c' }}>
								<img alt='' src={Deco1} /> Khrisma <img alt='medium tarnos khrisma' src={Deco2} />
							</h1>
						</Col>
						<h4 className='header purple-text text-darken-4'> Médium de naissance - Passeuse d'âmes - Magnétisme holistique </h4>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							" <b>M</b>es prédispositions me permettent de vous aider à la gestion du deuil . Vous pouvez également , me faire part de vos difficultés et
							problèmes divers de la vie quotidienne ( professionnels , sentimentaux , familiaux et autres ) , afin d'en trouver la cause , d'en prendre
							conscience et d'y remédier . Généalogie , magnétisme holistique , flashs viennent à mon aide . "
						</p>
						<hr />
					</div>
				</div>
				<Parallax
					image={<img alt='medium tarnos khrisma' src={Lotus} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<h4 className='header purple-text text-darken-4'>Déroulement de la séance</h4>

						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<a href='/medium/contact' style={{ color: 'black' }}>
								<b>C</b>ontactez-moi
							</a>{' '}
							, pour me faire part de votre problème . Si cela rentre dans le cadre de mes compétences , nous organiserons un premier rendez-vous
							téléphonique , avant toute intervention . Je ferai un petit arbre généalogique vous concernant . Grâce à ma médiumnité je détecterai les
							blocages .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>J</b>e fixerai avec vous un deuxième rendez-vous , physique ou téléphonique . Dans le dernier cas , par sécurité , vous voudrez bien
							m'envoyer à l adresse que je vous communiquerai , le règlement de{' '}
							<a href='/medium/tarifs' style={{ color: 'black' }}>
								70€
							</a>{' '}
							par chèque que j'encaisserai uniquement après la séance téléphonique . Si vous vous déplacez , le paiement se fera sur place .
						</p>
						<p className='grey-text text-darken-3 lighten-3'>
							<b> « LES SEANCES MARCHENT TRES BIEN A DISTANCE »</b>
						</p>

						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>J</b>e ne négligerai pas les générations passées , présentes , futures , ainsi que les vies antérieures qui entrent en ligne de compte et qui m
							aident à comprendre les difficultés que vous traversez .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>I</b>l se pourrait que vous ayez un petit travail personnel à faire , après la séance . La demande me sera dictée précisément par le contact
							établi . Cela vous permettra de méditer .
						</p>

						<br />
						<Row>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col style={{ color: '#d2b16c' }} s={7} textalign='right'>
								« Accepte ce qui est, laisse aller ce qui était, et aie confiance en ce qui sera »<br />
								BOUDDHA
							</Col>
						</Row>
						<hr />
					</div>
				</div>
				<Parallax
					image={<img alt='medium tarnos khrisma' src={Lotusbloom} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
