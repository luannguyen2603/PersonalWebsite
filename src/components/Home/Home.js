import React from 'react';
import './Home.scss';
import Fade from 'react-reveal/Fade';

const Home = () => {
	const name = 'Luan Nguyen';
	const resumeUrl =
		'https://drive.google.com/open?id=1nov_kxHzfqSEr8FGlljn88Kk_DbW_mou';

	return (
		<>
			<Fade cascade delay={600}>
				<section className='title-section'>
					<p className='introduction'>Hello! My name is</p>
					<h1>{name}.</h1>
					<p className='description-title'>
						I'm a{' '}
						<span>
							<b>Computer Science student at Georgia Tech.</b>
						</span>{' '}
						My areas of expertise
						lie in Java, Python, React.js and Back-end Development.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<a href='mailto:nguyenluan2603@gmail.com' className='button-link'>
								<button className='contact-button'>Get In Touch</button>
							</a>
							<a
								href={resumeUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='button-link'>
								<button className='contact-button'>Resume</button>
							</a>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;
