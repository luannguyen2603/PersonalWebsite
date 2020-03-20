import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
	return (
		<Fade cascade>
			<main className='Contact' name='Contact'>
				<h2>
					<span>03. Contact</span>Get In Touch
				</h2>
				<p>
					I would love to connect with you!
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
