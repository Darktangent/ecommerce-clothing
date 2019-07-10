import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = `pk_test_KlKkWsjS1Vg3LoT9OfLOFSnD00FM0tDXR7`;
	const onToken = token => {
		console.log(token);
		alert(`Payment Successful`);
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Ecomm Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
