import React, { useState } from 'react';
import NavTabs from './Navtabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('About');

	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
	};

	const handlePage = (page) => setCurrentPage(page);

	return (
		<div>
			<NavTabs currentPage={currentPage} handlePage={handlePage} />
			{renderPage()}
		</div>
	);
}
