import React from 'react';

const Footer = () => {
	return (
		<footer className="page-footer font-small bg-primary pt-2 mt-4">
			<div className="container-fluid text-center text-md-left">
				<div className="advertisement-row row m-3">
					<div id="advertisement-container" className="advertisement-col col-lg-8 offset-lg-2 text-center">
						Want to see your advertisement here? Get in touch!
					</div>
				</div>
			</div>
			<div className="footer-copyright text-center py-3">
				Restograde is a training application provided by{' '}
				<a href="https://pragmaticwebsecurity.com/" target="_blank" rel="noopener noreferrer">
					Pragmatic Web Security
				</a>
				. All data in this application is fictional. Photos from{' '}
				<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
					Unsplash
				</a>
				.
			</div>
		</footer>
	);
};

export default Footer;
