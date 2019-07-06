import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart.actions';
const CartIcon = ({ toggleCardHidden }) => (
	<div className='cart-icon' onClick={toggleCardHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);
const mapDispatchToProps = dispatch => ({
	toggleCardHidden: () => dispatch(toggleCardHidden())
});
export default connect(
	null,
	mapDispatchToProps
)(CartIcon);