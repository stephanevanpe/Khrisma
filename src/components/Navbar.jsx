import React from 'react';
import { Navbar, Icon, NavItem} from 'react-materialize';
import Lotus from '../pictures/lotus.png';



const NavBar = () => {
	return (
		<Navbar
			className='purple lighten-5'
			alignLinks='right'
			brand={
				<a className='brand-logo' href='/'>
					<img alt='Khrisma medium logo painting' src={Lotus} height='65px' weight='auto'/>

				</a>
			}
			fixed
			centerChildren
			id='mobile-nav'
			menuIcon={
				<Icon>
					<span className='purple-text text-darken-4'>menu</span>
				</Icon>
			}
			options={{
				draggable: true,
				edge: 'left',
				inDuration: 250,
				onCloseEnd: null,
				onCloseStart: null,
				onOpenEnd: null,
				onOpenStart: null,
				outDuration: 200,
				preventScrolling: true,
			}}
		>
			<NavItem href='/'>
				<span className='purple-text text-darken-4'>Accueil</span>
			</NavItem>
			<NavItem href='/History'>
				<span className='purple-text text-darken-4'>Mon histoire</span>
			</NavItem>
			<NavItem href='/Prices'>
				<span className='purple-text text-darken-4'>Tarifs</span>
			</NavItem>
			<NavItem href='/Contact'>
				<span className='purple-text text-darken-4'>Contact</span>
			</NavItem>
		</Navbar>
	);
};

export default NavBar;
