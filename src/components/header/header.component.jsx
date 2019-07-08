import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className='option' to='/signin'>
					Sign in
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
// 	currentUser: currentUser,
// 	hidden: hidden
// });
const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state),
	hidden: selectCartHidden(state)
});
export default connect(mapStateToProps)(Header);
