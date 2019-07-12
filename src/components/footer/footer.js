import React from 'react';
import './footer.styles.css';

export default function Footer() {
	return (
		<div>
			<footer className='myFooter' id='footer-wrapper'>
				<div className='footer-icons'>
					<a
						href='https://www.pinterest.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-pinterest' />
					</a>
					<a
						href='https://www.facebook.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-facebook' />
					</a>
					<a
						href='https://twitter.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-twitter' />
					</a>
					<a
						href='http://instagram.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-instagram' />
					</a>
					<a
						href='https://www.youtube.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-youtube' />
					</a>
					<a
						href='https://plus.google.com/'
						className='generic-anchor'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa fa-google-plus' />
					</a>
				</div>
				<section className='footer-bottom'>
					<div className='footer-bottom-wrapper'>
						<i className='fa fa-copyright' /> 2019{' '}
						<a href='http://www.rohanganguly.me/'>
							<strong>Rohan Ganguly</strong>
						</a>{' '}
						<span className='footer-bottom-rights'>
							{' '}
							- All Rights Reserved -{' '}
						</span>
					</div>
				</section>
			</footer>
		</div>
	);
}
