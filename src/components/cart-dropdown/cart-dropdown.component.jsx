import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-buttom/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCardHidden } from '../../redux/cart/cart.actions.js';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className='empty-message'>Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCardHidden());
			}}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});
// const mapStateToProps = state => ({
// 	cartItems: selectCartItemsCount(state)
// });
export default withRouter(connect(mapStateToProps)(CartDropdown));
