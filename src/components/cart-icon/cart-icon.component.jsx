import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCardHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);
const mapDispatchToProps = dispatch => ({
	toggleCardHidden: () => dispatch(toggleCardHidden())
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
// 	itemCount: cartItems.reduce(
// 		(accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
// 		0
// 	)
// });
const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon);
