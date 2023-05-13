import React from 'react';

function NavTabs({ currentPage, handlePage }) {
	return (
		<nav className="flex items-center justify-between bg-gray-800 ">
			<p className="text-3xl m-8 text-pink-color font-bold">Jack Nguyen</p>

			<ul className="flex justify-end m-10 text-3xl space-x-12">
				<li className="">
					<a
						href="#about"
						onClick={() => handlePage('About')}
						// ternary operator to add indications css to which tab the user is currently on.
						className={
							currentPage === 'About'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}>
						About Me
					</a>
				</li>
				<li className="">
					<a
						href="#portfolio"
						onClick={() => handlePage('Portfolio')}
						className={
							currentPage === 'Portfolio'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}>
						Portfolio
					</a>
				</li>
				<li className="">
					<a
						href="#resume"
						onClick={() => handlePage('Resume')}
						className={
							currentPage === 'Resume'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}>
						Resume
					</a>
				</li>
				<li className="">
					<a
						href="#contact"
						onClick={() => handlePage('Contact')}
						className={
							currentPage === 'Contact'
								? 'text-pink-color font-bold border-b-4 border-white'
								: ''
						}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavTabs;
