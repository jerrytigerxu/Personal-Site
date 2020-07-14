import React from 'react';

import "../styles/index.sass";
import Helmet from './helmet';
import Midsection from './midsection';
import Footer from './footer';
import Navbar from './navbar';

const Work_Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		{children}
		<Midsection />
		<Footer />
	</div>
);

export default Work_Layout;
