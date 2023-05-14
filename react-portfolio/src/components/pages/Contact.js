import React from 'react';
import '../styles/contact.css';

export default function Contact() {
	return (
		<div className="flex justify-center mt-12">
			<form className="bg-gray-800">
				<h1 className="text-white text-3xl font-bold flex justify-center">
					Contact Me!
				</h1>

				<div className="m-8 flex">
					<input className="h-8 w-64 mr-10 p-2" placeholder="Name" />
					<input className="h-8 w-64 p-2" placeholder="Email" />
				</div>

				<div className="m-8">
					<textarea className="h-32 w-full" placeholder="Message" />
				</div>

				<div className="flex justify-center">
					<button className=" bg-blue-400 text-white font-bold rounded-xl p-2 ">
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}
