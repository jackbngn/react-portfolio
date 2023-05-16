import React from 'react';

export default function NavTabs({ currentPage, handlePage }) {
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-800 sticky top-0 z-10">
			<p className="text-3xl m-8 text-pink-color font-bold">Jack Nguyen</p>

			<ul className="flex flex-wrap justify-end m-10 text-3xl space-x-12">
				<li className="mb-4 sm:mb-0">
					<button
						onClick={() => handlePage('About')}
						className={`${
							currentPage === 'About'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						About Me
					</button>
				</li>
				<li className="mb-4 sm:mb-0">
					<button
						onClick={() => handlePage('Projects')}
						className={`${
							currentPage === 'Projects'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Projects
					</button>
				</li>
				<li className="mb-4 sm:mb-0">
					<button
						onClick={() => handlePage('Resume')}
						className={`${
							currentPage === 'Resume'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Resume
					</button>
				</li>
				<li className="mb-4 sm:mb-0">
					<button
						onClick={() => handlePage('Contact')}
						className={`${
							currentPage === 'Contact'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}`}>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
}
