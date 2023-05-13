import React, { useState } from 'react';
import NavTabs from './Navtabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('About');

	// Check what is the currentPage and render that component
	const renderPage = () => {
		if (currentPage === 'About') {
			return <About handlePage={handlePage} />;
		}
		if (currentPage === 'Project') {
			return <Project />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}
		if (currentPage === 'Contact') {
			return <Contact />;
		}
	};

	// Function to set the current page
	const handlePage = (page) => setCurrentPage(page);

	return (
		<div className="min-h-screen flex flex-col">
			<NavTabs currentPage={currentPage} handlePage={handlePage} />
			<div className="flex-grow">{renderPage()}</div>
			<Footer />
		</div>
	);
}
