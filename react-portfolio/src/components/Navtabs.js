import React, { useState } from 'react';
import './styles/Nav.css';

export default function NavTabs({ currentPage, handlePage }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleNavigation = (page) => {
		handlePage(page);
		setIsOpen(false);
	};
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-800 sticky top-0 z-10">
			<div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
				<ul className={`moible-menu-links ${isOpen ? 'open' : ''}`}>
					<li
						className={`${
							currentPage === 'About'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}
						onClick={() => handleNavigation('About')}>
						About Me
					</li>
					<li
						className={`${
							currentPage === 'Projects'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}
						onClick={() => handleNavigation('Projects')}>
						Projects
					</li>
					<li
						className={`${
							currentPage === 'Resume'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}
						onClick={() => handleNavigation('Resume')}>
						Resume
					</li>
					<li
						className={`${
							currentPage === 'Contact'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}
						onClick={() => handleNavigation('Contact')}>
						Contact
					</li>
				</ul>
			</div>

			<p className="nav-name text-3xl m-8 text-pink-color font-bold">
				Jack Nguyen
			</p>

			<ul
				className={`flex flex-wrap  justify-end text-3xl space-x-12 py-8  nav-link ${
					isOpen ? 'open' : ''
				} ${isOpen && 'space-x-2'}`}>
				<li>
					<button
						onClick={() => handleNavigation('About')}
						className={`${
							currentPage === 'About'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						About Me
					</button>
				</li>

				<li>
					<button
						onClick={() => handleNavigation('Projects')}
						className={`${
							currentPage === 'Projects'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Projects
					</button>
				</li>
				<li>
					<button
						onClick={() => handleNavigation('Resume')}
						className={`${
							currentPage === 'Resume'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Resume
					</button>
				</li>
				<li>
					<button
						onClick={() => handleNavigation('Contact')}
						className={`${
							currentPage === 'Contact'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Contact
					</button>
				</li>
			</ul>
			<div
				className={`burger_menu ${isOpen ? 'open' : ''}`}
				onClick={toggleMenu}>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
			</div>
		</nav>
	);
}
