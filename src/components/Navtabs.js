import React, { useState } from 'react';
import './styles/Nav.css';

export default function NavTabs({ currentPage, handlePage }) {
	const [isOpen, setIsOpen] = useState(false);
	const BurgerMenu = () => {
		const toggleMenu = () => {
			setIsOpen(!isOpen);
		};

		return (
			<div
				className={`burger_menu ${isOpen ? 'open' : ''}`}
				onClick={toggleMenu}>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
				<div className="burger-line"></div>
			</div>
		);
	};
	const handleNavigation = (page) => {
		handlePage(page);
		setIsOpen(false);
	};
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-800 sticky top-0 z-10">
			<p className="nav-name text-3xl m-8 text-pink-color font-bold">
				Jack Nguyen
			</p>

			<ul
				className={`flex flex-wrap justify-end text-3xl space-x-12 py-8  nav-link ${
					isOpen ? 'open' : ''
				} ${isOpen && 'space-x-0'}`}>
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
			<BurgerMenu />
		</nav>
	);
}
