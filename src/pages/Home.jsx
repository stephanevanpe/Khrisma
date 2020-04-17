import React from 'react';
import { Parallax } from 'react-materialize';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lotus from '../pictures/62a47d8e4ab364cf476f25a473b23c75.jpg';
import Salle from '../pictures/salle.webp';
import Lotusbloom from '../pictures/lotosblume-6e34f198-4e69-4fbb-99a0-6e5ede854fbf.jpg';
import Deco1 from '../pictures/pngwave1.png';
import Deco2 from '../pictures/pngwave.png';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Parallax
					image={<img alt='' src={Lotusbloom} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<h1 className='yellow-text text-darken-3'>
							<img alt='' src={Deco1} />
							{' '}Khrisma{' '} 
							<img alt='' src={Deco2} />
						</h1>
						<h4 className='header purple-text text-darken-4'> Medium de naissance - magnétisme holistique - coupeur de feu et de rayons - Maître Reiki</h4>
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px' }}>
							" <b>J</b>e me suis rendue compte que mes aptitudes me servaient pour aider à la gestion du deuil et des blocages divers, tout en tenant compte
							de la généalogie. Les cartes, les mots, l'écriture viennent à mon aide . "
						</p>
						<hr />
					</div>
				</div>
				<Parallax
					image={<img alt='' src={Lotus} />}
					options={{
						responsiveThreshold: 0,
					}}
				/>
				<div className='section purple lighten-5'>
					<div className='row container'>
						<hr />
						<p className='grey-text text-darken-3 lighten-3' style={{ fontFamily: 'Snell Roundhand, cursive', fontSize: '40px', textIndent: '2' }}>
							<b>M</b>edium depuis toujours, je me suis rendue compte que mes aptitudes me servaient pour aider à la gestion du deuil et des blocages divers,
							tout en tenant compte de la généalogie. Les cartes, les mots, l'écriture viennent à mon aide .
						</p>
						<hr />
					</div>
				</div>
				<Parallax
					image={<img alt='' src={Salle} />}
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
