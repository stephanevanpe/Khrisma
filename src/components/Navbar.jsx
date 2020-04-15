import React from 'react';
import { Navbar, Icon, NavItem} from 'react-materialize';



const NavBar = () => {
	return (
		<Navbar
			className='purple lighten-5'
			alignLinks='right'
			fixed
			centerChildren
			id='mobile-nav'
			menuIcon={
				<Icon>
					<span class='purple-text text-darken-4'>menu</span>
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
				<span class='purple-text text-darken-4'>Accueil</span>
			</NavItem>
			<NavItem href='/Prices'>
				<span class='purple-text text-darken-4'>Tarifs</span>
			</NavItem>
			<NavItem href='/Contact'>
				<span class='purple-text text-darken-4'>Contact</span>
			</NavItem>
		</Navbar>
	);
};

export default NavBar;
