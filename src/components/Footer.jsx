import React from 'react';
import { Footer, Button, Icon} from 'react-materialize';


const Fouter = () => {
	return (
		<Footer
			className='purple lighten-5 '
			copyrights='©2020 Copyright tous droits reservés.'
			moreLinks={
				<>
					<a href='https://www.facebook.com/Khrisma-medium-316028152260673/'>
						<Button node='button' floating waves='light' className='purple darken-4 right'>
							<Icon left>
								<span className='purple-text text-lighten-5' style={{ fontFamily: 'klavika', fontSize: '35px' }}>
									f
								</span>
							</Icon>
						</Button>
					</a>
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
