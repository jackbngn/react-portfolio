import React from 'react';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';

export default function Footer() {
	return (
		<footer className=" bg-gray-800 p-2">
			<div className="flex justify-center  ">
				<a href="https://github.com/jackbngn" target="_blank">
					<img src={Github} alt="Github" className="w-20 mr-8  "></img>
				</a>
				<a
					href="https://www.linkedin.com/in/jack-nguyen-909759266/"
					target="_blank">
					<img src={Linkedin} alt="Linkedin" className="w-20"></img>
				</a>
			</div>
		</footer>
	);
}
