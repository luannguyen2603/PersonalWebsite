import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>About Me
						</h2>
						<p>
							I'm a computer science student at Georgia Institute of Technology. I love building and hack things up
							for any immediate problems or projects I want to pursue.
						</p>
						
						<p>Here are a few technologies I've been working with recently:</p>
						<section className='skills'>
							<ul>
								<li>
									<span>▹</span> JavaScript <span className='es6'>(ES6+)</span>
								</li>
								<li>
									<span>▹</span> React & Redux
								</li>
								<li>
									<span>▹</span> Python
								</li>
								<li>
									<span>▹</span> MongoDB & mySQL
								</li>
							</ul>
							<ul>
								<li>
									<span>▹</span> Node.js
								</li>
								<li>
									<span>▹</span> Flutter
								</li>
								<li>
									<span>▹</span> React Native
								</li>
								<li>
									<span>▹</span> Java
								</li>
							</ul>
						</section>
					</section>
					<section>
						<img src={headshot} alt='Headshot of Edwin' />
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
