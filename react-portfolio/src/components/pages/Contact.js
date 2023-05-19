import React, { useState } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/helper';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [emailErrorMessage, setEmailErrorMessage] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let hasError = false;

		if (!validateEmail(email)) {
			setEmailErrorMessage('*Invalid email');
			hasError = true;
		} else {
			setEmailErrorMessage('');
		}

		if (message.trim() === '') {
			setErrorMessage('*Message required!');
			hasError = true;
		} else {
			setErrorMessage('');
		}

		if (!hasError) {
			// Code to handle form submission or API request goes here

			// Clear input fields after form submission
			setEmail('');
			setName('');
			setMessage('');
		}
	};

	return (
		<div className="flex justify-center lg:mt-20 md:mt-20 sm:mt-20 xsm:mt-10">
			<form className="bg-gray-800 p-12 pb-8 rounded-2xl">
				<h1 className="text-white text-3xl font-bold flex justify-center mb-8">
					Contact Me!
				</h1>

				<div className="flex flex-col items-center mt-10 sm:flex-row ">
					<input
						className="  lg:mr-10 md:mr-10 sm:mr-10 lg:mb-0 md:mb-0 sm:mb-0 xsm:mb-4 h-10 p-2 w-64 input-name"
						placeholder="Name"
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="h-10 p-2 w-64 input-email"
						placeholder="Email"
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{emailErrorMessage && (
					<div className="text-red-500 font-bold mt-1">
						<p>{emailErrorMessage}</p>
					</div>
				)}

				<div className="mt-6">
					<textarea
						className="h-32 lg:w-full md:w-full sm:w-full  xsm:w-64 textarea-message "
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<div className="text-red-500 font-bold">
						<p>{errorMessage}</p>
					</div>
				)}

				<div className="flex justify-center mb-8 mt-4">
					<button
						className="bg-blue-400 text-white font-bold rounded-xl mt-6 p-2"
						onClick={handleFormSubmit}>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}
