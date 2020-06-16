import React from 'react';
import { Parallax } from 'react-materialize';
import swal from 'sweetalert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lotus from '../pictures/image1.jpeg';
import Chapeau from '../pictures/unnamed.png';
import Ange from '../pictures/Ange.jpg';


const MyHistory = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Parallax
					image={<img alt='medium tarnos khrisma' src={Lotus} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<img alt='medium tarnos khrisma' src={Chapeau} height='85px' weight='auto' />
						<h4 className='header purple-text text-darken-4'>Mon Histoire</h4>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							" <b>A</b> l'âge de neuf ans , lors d'un évènement brutal et violent , mon extrême sensibilité déjà présente a révélé ma médiumnité .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>U</b>n de mes proches s'est retrouvé en neurologie , entre la vie et la mort , pendant trois semaines . Durant son coma , je suis restée en
							contact quasi permanent avec lui . J'ai su à quel moment il a fait le choix de nous quitter . Je n'en ai jamais parlé à personne .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>P</b>lus tard dans ma vie , lors d'une intervention chirurgicale , j'ai eu un problème durant lequel j'ai pu entrevoir l'autre côté du
							" Voile  " : nos êtres chers disparus , sont bien présents dans un amour totalement inconditionnel que je ne peux vous décrire que par les mots
							amour , lumière , beauté , douceur , plénitude . Heureusement , J'ai eu la chance de rencontrer un vieux magnétiseur qui m'a pris sous son aile
							et m'a fait comprendre bien des choses …
						</p>
						<img
							class='responsive-img'
							alt='medium tarnos khrisma'
							src={Ange}
							onClick={() => swal({ icon: `${Ange}`, text: 'Cette peinture a été réalisée par mes soins . D après le modéle des cartes de Doreen Virtue .' })}
						/>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>E</b>nsuite , pendant deux ans , il y a eu de nombreux " départs " dans mon entourage . A cette époque j’ai rencontré une amie , qui , elle
							aussi , avait perdu un être cher . Bercée depuis son enfance dans le domaine spirituel , j'ai pu l'aider et elle a su en retour , me
							faire accepter ce que mes guides spirituels me demandaient . Tout simplement , d'aider mon prochain .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>P</b>endant plusieurs années , j'ai accompagné les personnes que je rencontrais , dans ma vie privée comme professionnelle et j ai constaté
							que mes conseils et mes interventions portaient leurs fruits .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, Bookman Old Style', fontSize: '40px' }}>
							<b>P</b>uis j'ai connu le chômage . C'est à ce moment là que je me suis décidée à consacrer une partie de mon temps à aider les autres . J'ai
							trouvé ma voie ! Lors de mes séances , je me sers de tous les " outils " dont je dispose , afin de mener au mieux le travail que j’effectue . "
						</p>
						<img alt='medium tarnos khrisma' src={Chapeau} height='85px' weight='auto' />
						<hr />
					</div>
				</div>
				<Parallax
					image={<img alt='' src={Lotus} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default MyHistory;
