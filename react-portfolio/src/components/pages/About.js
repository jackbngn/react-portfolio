import React from 'react';
import images from '../../images/profile.jpg';

export default function About({ handlePage }) {
	return (
		<div className="font-bold justify-center">
			<div className="p-10">
				<div className="text-center text-pink-color text-4xl mt-10 mb-4 animate__animated animate__backInLeft  ">
					<p>Hi, my name is Jack Bao Nguyen.</p>
				</div>
				<div className="text-center text-4xl animate__animated animate__backInRight ">
					<p className="mt-2">I am learning to become a software developer.</p>
				</div>
				<div className="flex justify-center m-20 animate__animated animate__rollIn animate__delay-1s">
					<img
						src={images}
						alt="Profile"
						className="w-80 h-80 overflow-hidden rounded-full"
					/>
				</div>
			</div>

			<div className="flex justify-center mt-2">
				<hr className="w-96 border-2 border-gray-400" />
			</div>

			<div className="mt-20 p-10">
				<div className="flex justify-center text-3xl text-pink-color">
					<h4>About me</h4>
				</div>
				<div className="mt-10 text-xl">
					<div className="flex justify-center">
						<h6 className="max-w-xl mb-8">
							I'm Jack Bao Nguyen, a passionate software developer currently
							enrolled in the Full Stack Coding Bootcamp at UCI. With a focus on
							frontend and backend development, I'm eager to create innovative
							software solutions that make a positive impact.
						</h6>
					</div>
					<div className="flex justify-center">
						<h6 className="max-w-xl mb-8">
							I specialize in frontend development using HTML, CSS, and
							JavaScript to craft user-friendly interfaces and implement
							responsive web designs. On the backend, I work with Node.js and
							Express.js to build robust server-side solutions and integrate
							databases like MongoDB.
						</h6>
					</div>
					<div className="flex justify-center">
						<h6 className="max-w-xl mb-8">
							Currently learning full stack coding through the UCI Coding
							Bootcamp, I'm expanding my skills in tools and frameworks such as
							React.js and SQL. With strong analytical and problem-solving
							abilities, I thrive in collaborative environments and enjoy
							delivering exceptional results.
						</h6>
					</div>
				</div>
			</div>

			<div className="p-10">
				<div className="flex justify-center">
					<a
						href="https://www.linkedin.com/in/jack-nguyen-909759266/"
						target="_blank">
						<button className="bg-pink-color text-black font-semibold rounded-xl p-2 mt-10 p-4">
							Let's connect!
						</button>
					</a>
				</div>

				<div className="flex justify-center mt-4">
					<h6>
						<a
							href="#contact"
							onClick={() => handlePage('Contact')}
							className="text-blue-300 no-underline hover:underline">
							Contact me!
						</a>
					</h6>
				</div>
			</div>
		</div>
	);
}
