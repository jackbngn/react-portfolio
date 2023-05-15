import React, { useState } from 'react';
import '../styles/contact.css';
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
		<div className="flex justify-center mt-12 ">
			<form className="bg-gray-800 p-2">
				<h1 className="text-white text-3xl font-bold flex justify-center mb-8">
					Contact Me!
				</h1>

				<div className="mr-8 ml-8 flex">
					<input
						className="h-8 w-64 mr-10 p-2"
						placeholder="Name"
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="h-8 w-64 p-2"
						placeholder="Email"
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{emailErrorMessage && (
					<div
						className="text-red-500 font-bold mt-1"
						style={{ marginLeft: '325px' }}>
						<p>{emailErrorMessage}</p>
					</div>
				)}

				<div className="ml-8 mr-8 mt-6">
					<textarea
						className="h-32 w-full"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<div className="text-red-500 font-bold ml-8">
						<p>{errorMessage}</p>
					</div>
				)}

				<div className="flex justify-center mb-8 mt-4">
					<button
						className="bg-blue-400 text-white font-bold rounded-xl p-2"
						onClick={handleFormSubmit}>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}
