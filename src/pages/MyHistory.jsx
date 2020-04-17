import React from 'react';
import { Parallax } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lotus from '../pictures/62a47d8e4ab364cf476f25a473b23c75.jpg';
import Chapeau from '../pictures/unnamed.png';
import Ange from '../pictures/Ange.jpg';


const MyHistory = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Parallax
					image={<img alt='' src={Lotus} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<img alt='' src={Chapeau} height='85px' weight='auto' />
						<h4 className='header purple-text text-darken-4'>Mon Histoire</h4>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							" <b>A</b> l'âge de neuf ans, ce que je croyais être une extrème sensibilité, s'est révélé , d'une façon beaucoup plus fine ma médiumnité.
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>L</b>ors de l'accident de voiture de mon cousin, qui est resté trois semaines durant dans le comas, j' avais un contact quasiment permanent
							avec lui, et j'ai su quand il a choisi de nous quitter. Jamais je n'en ai parlé à personne.
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>U</b>n peu plus tard dans ma vie, j'ai eu un problème sur la table d'opération, à cet instant j'ai pu entrevoir l'autre côté du voile. Nos
							êtres disparus sont bien présents dans un amour total et inconditionnel, tellement grand que je ne peux vous décrire sa lumière et sa douceur.
						</p>
						<img alt='' src={Ange}/>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>P</b>uis pendant deux ans, de très nombreux ''départs'' dans mon entourage!!! A ce moment là, j'ai rencontré une amie chère,versée depuis
							son enfance dans le domaine spirituel, qui elle aussi était en deuil. Je l'ai aidée et elle m'a surtout aidé à accepter et à comprendre à quoi
							me servait ce que mes guides m'envoient….afin d'aider les autres… C'était donc cela !! Pendant plusieurs années j'ai donc aidé bénévolement les
							gens que je rencontrais dans ma vie privée, amicale, ou dans sur le lieu de mon travail et j'y prenais grand plaisir!
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>P</b>uis chômage c'est le moment je me lance ...
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>L</b>ors des consultations je me sers du magnétisme holistique, des flashs (images), des paroles, des sensations que je perçois, ainsi que
							des cartes qui me confirment l'évolution spirituelle de la personne, du pendule si besoin, du reiki et de la géobiologie. Je me sers de ''
							l'outil'' dont j'ai besoin sur le moment en complèment. "
						</p>
						<img alt='' src={Chapeau} height='85px' weight='auto' />
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
