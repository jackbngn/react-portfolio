import React from 'react';

function NavTabs({ currentPage, handlePage }) {
	return (
		<ul className="flex justify-center m-10 text-3xl space-x-10">
			<li className="">
				<a href="#about" onClick={() => handlePage('About')}>
					About Me
				</a>
			</li>
			<li className="">
				<a href="#portfolio" onClick={() => handlePage('Portfolio')}>
					Portfolio
				</a>
			</li>
			<li className="">
				<a href="#resume" onClick={() => handlePage('Resume')}>
					Resume
				</a>
			</li>
			<li className="">
				<a href="#contact" onClick={() => handlePage('Contact')}>
					Contact
				</a>
			</li>
		</ul>
	);
}

export default NavTabs;
