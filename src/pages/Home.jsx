import React from 'react';
import { Parallax, Row, Col } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lotus from '../pictures/62a47d8e4ab364cf476f25a473b23c75.jpg';
import Lotusbloom from '../pictures/lotosblume-6e34f198-4e69-4fbb-99a0-6e5ede854fbf.jpg';
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
						<h4 className='header purple-text text-darken-4'>
							{' '}
							Médium de naissance - Passeuse d'âmes - Magnétisme holistique - Reiki 3<sup>ème</sup> degré
						</h4>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							" <b>J</b>e me suis rendue compte que mes aptitudes me servaient pour aider à la gestion du deuil et des blocages divers , tout en tenant
							compte de la généalogie . Les cartes , les mots , l'écriture viennent à mon aide . "
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
						<h4 className='header purple-text text-darken-4'>Déroulement de la consultation</h4>

						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>C</b>ontactez-moi et faites-moi part de votre problème : mal-être , deuil ( mort naturelle , suicide , maladie , accident ) , activité
							professionnelle , amour , immobilier ( blocage ) etc.. Et je saurai , dès lors si cela rentre dans mes compétences . Si tel est le cas , nous
							organiserons un rendez-vous téléphonique .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>L</b>ors de ce dernier , j'établirai un petit arbre généalogique ( ne vous inquiétiez pas , tout ce qu'il y a de plus simple ) . Les
							éléments manquants viendront à moi et je regarderai ce qui ne va pas en Médiumnité . Je fixerai alors le jour de notre prochain rendez-vous
							téléphonique ou physique afin d'intervenir sur votre cas .
						</p>
						<p className='grey-text text-darken-3 lighten-3'>
							<b> « CELA MARCHE TRES BIEN A DISTANCE »</b>
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>E</b>ntre-temps , vous me ferez parvenir un chèque pour ladite consultation d'un montant de 70 € ( à titre de précaution ) et qui ne sera
							encaissé qu'après cette dernière .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>L</b>ors de notre discussion , je recevrai des flashs , des paroles , des sensations que je ressentirai et que je partagerai aussitôt avec
							vous , sous la surveillance bienveillante de mes guides spirituels . J'établirai un contact auquel vous participerez oralement , pour vous
							donner la paix et le pardon réciproquement , ce qui lèvera les problèmes , les blocages dans le dialogue tout en ne négligeant pas de les lever
							sur les générations passées mais aussi présentes et futures ainsi que sur les vies antérieures qui entrent en ligne de compte et qui expliquent
							souvent , les problèmes et les blocages .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>L</b>e mal-être provoqué par ces derniers sont d'ordre variés que nous ne soupçonnons même pas . Cela m'étonne encore à chaque fois , d'une
							manière ou d'une autre , car le secret des ÂMES nous dévoile " ce qu'il faut et pas plus au bon moment . " Cela vous permettra de faire le
							point sur ce que vous voulez au plus profond de votre âme et ce que vous êtes vraiment .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>D</b>ans beaucoup de cas , un petit travail personnel sera nécessaire à celui que nous effectuerons ensemble . Il vous permettra de sceller
							, ce que les êtres de lumière nous ont aidé à faire et de pouvoir méditer dessus le temps d'un instant .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>C</b>haque fois , la demande me sera dictée par eux-mêmes , sera précisément adaptée à la situation et se présentera sous formes de prières
							personnalisées selon le cas exposé .
						</p>
						<br />
						<Row>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col s={1}></Col>
							<Col style={{ color: '#d2b16c' }} s={7} textAlign='right'>
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
