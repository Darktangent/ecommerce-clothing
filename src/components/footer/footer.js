import React from 'react';
import './footer.styles.css';

export default function Footer() {
	return (
		<div>
			<footer class='myFooter' id='footer-wrapper'>
				<div class='footer-icons'>
					<a
						href='https://www.pinterest.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-pinterest' />
					</a>
					<a
						href='https://www.facebook.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-facebook' />
					</a>
					<a
						href='https://twitter.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-twitter' />
					</a>
					<a
						href='http://instagram.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-instagram' />
					</a>
					<a
						href='https://www.youtube.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-youtube' />
					</a>
					<a
						href='https://plus.google.com/'
						class='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='fa fa-google-plus' />
					</a>
				</div>
				<section class='footer-bottom'>
					<div class='footer-bottom-wrapper'>
						<i class='fa fa-copyright' /> 2019{' '}
						<a href='http://www.rohanganguly.me/'>
							<strong>Rohan Ganguly</strong>
						</a>{' '}
						<span class='footer-bottom-rights'> - All Rights Reserved - </span>
					</div>
				</section>
			</footer>
		</div>
	);
}
