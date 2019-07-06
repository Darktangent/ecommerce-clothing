import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-buttom/custom-button.component';

const CartDropDown = () => (
	<div className='cart-dropdown'>
		<div className='cart-tems'>Test</div>
		<CustomButton>Go To Checkout</CustomButton>
	</div>
);

export default CartDropDown;
