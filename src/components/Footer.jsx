import React from 'react';
import { Footer } from 'react-materialize';

const Fouter = () => {
	return (
		<Footer
			className='purple lighten-5 '
			copyrights='©2020 Copyright tous droits reservés.'
			moreLinks={
				<>
					<p className='purple-text text-darken-4' href='#!'>
						{' '}
						Krisma N° SIREN: 831 976 543
					</p>
					<a className='purple-text text-darken-4' href='https://www.linkedin.com/in/stephane-van-pe/'>
						{' '}
						Réalisé par Stéphane Van Pé.
					</a>
				</>
			}
		></Footer>
	);
};

export default Fouter;
