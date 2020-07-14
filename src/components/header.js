import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import mepic from '../assets/jere1.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<div className="hero-body">
			<div className="container center">
				<article className="image">
					<img src={mepic} alt="That's me you see!"  class="floater" />
				</article>

				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Hi! I'm Jere.
							</h1>
							<h3 className="subtitle has-text-white is-size-2">
								I run FirstFruits Analytics.
							</h3>
							<p className="subtitle has-text-white is-size-5">
								I specialize in online growth engineering.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
