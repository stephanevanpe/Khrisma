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
							" <b>A</b> l'âge de neuf ans , ce que je croyais être une extrême sensibilité , a révélé , d'une façon beaucoup plus intime ma médiumnité .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>L</b>ors de l'accident de voiture de mon cousin , qui est resté durant trois semaines dans le coma , j' ai eu un contact quasiment permanent
							avec lui , et j'ai su à quel moment il avait fait le choix de nous quitter . Je n'en ai jamais parlé à personne .
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>U</b>n peu plus tard dans ma vie , j'ai eu un problème sur la table d'opération . A cet instant , j'ai pu entrevoir l'autre côté du "voile" . Nos
							êtres disparus sont bien présents dans un amour total , inconditionnel et tellement grand que je ne pourrais vous décrire sa lumière et sa douceur .
						</p>
						<img alt='' src={Ange} onClick={() => swal({ icon: `${Ange}`,text: "Cette peinture a été réalisée par mes soins .",  })}/>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>P</b>uis , pendant deux ans , il y a eu de très nombreux "départs" dans mon entourage . A ce moment là , j'ai eu la chance de rencontrer une amie chère . Elle aussi était en deuil. Bercée depuis
							son enfance dans le domaine spirituel , je l'ai aidée et elle , m'a surtout aidé à accepter et à comprendre à quoi
							me sers ce que mes guides m'envoient afin de pouvoir aider les autres . C'était donc cela !! Pendant plusieurs années , j'ai accompagné bénévolement les
							gens que je rencontrais tant dans ma vie privée que professionnelle et j'y prenais grand plaisir !
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>P</b>uis chômage ... "C'est le moment je me lance !"
						</p>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							<b>L</b>ors des consultations , je me sers du magnétisme holistique , des flashs (images) , des paroles et des sensations que je perçois , ainsi que
							des cartes qui me confirment l'évolution spirituelle de la personne . Et même , du pendule si besoin , du reiki et de la géobiologie . Je me sers de "
							l'outil " dont j'ai besoin sur le moment en complèment . "
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
