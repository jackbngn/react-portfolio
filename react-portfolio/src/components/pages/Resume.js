import React from 'react';

function Resume() {
	return (
		<div className="max-w-3xl mx-auto p-4">
			<div className="flex justify-center font-bold text-5xl m-6">
				<h1>Resume</h1>
			</div>

			<div className="flex justify-center m-8">
				<a
					href="https://docs.google.com/document/d/1ROakOXaRAgzlRkTBojDzhqTwH2pujQ0LcPw6Hj0O3ng/export?format=pdf"
					download
					className="bg-blue-500 text-white font-bold rounded-xl py-2 px-4 hover:bg-blue-600 transition-colors">
					Download Resume
				</a>
			</div>

			<h1 className="text-3xl font-bold mb-4">Jack Bao Nguyen</h1>
			<p className="mb-4">
				714-657-4915 | jackngn83@gmail.com |{' '}
				<a
					href="https://www.linkedin.com/in/jack-nguyen-909759266/"
					className="text-blue-500">
					LinkedIn
				</a>
			</p>

			<h2 className="text-xl font-bold mb-2">Summary:</h2>
			<p className="mb-4">
				Highly skilled software developer with expertise in both frontend and
				backend development. Proficient in designing and implementing
				user-friendly interfaces and robust server-side solutions. Strong
				problem-solving abilities and a passion for creating efficient and
				innovative software applications. Committed to delivering high-quality
				code and exceeding client expectations.
			</p>

			<h2 className="text-xl font-bold mb-2">Skills:</h2>
			<h3 className="font-bold mb-1">Frontend Development:</h3>
			<ul className="list-disc ml-6 mb-4">
				<li>Programming Languages: HTML, CSS, JavaScript</li>
				<li>Web Development Frameworks: Tailwind CSS, Bootstrap, Bulma</li>
				<li>Responsive Web Design</li>
				<li>Frontend Testing and Debugging</li>
			</ul>

			<h3 className="font-bold mb-1">Backend Development:</h3>
			<ul className="list-disc ml-6 mb-4">
				<li>Programming Languages: Node.js, Express.js</li>
				<li>Database Technologies: NoSQL, MongoDB</li>
				<li>API Development and Integration</li>
				<li>Server-Side Programming</li>
				<li>Backend Testing and Debugging</li>
			</ul>

			<h3 className="font-bold mb-1">General Skills:</h3>
			<ul className="list-disc ml-6 mb-4">
				<li>Strong Analytical and Problem-Solving Skills</li>
				<li>Version Control Systems: Git</li>
				<li>Agile Development Methodologies</li>
				<li>Cross-Functional Collaboration</li>
				<li>Strong Communication and Documentation Skills</li>
			</ul>

			<h2 className="text-xl font-bold mb-2">Experience:</h2>

			<h2 className="text-xl font-bold mb-2">Education:</h2>
			<p className="mb-4">La Quinta High School | 2014-2017</p>

			<h2 className="text-xl font-bold mb-2">Certifications:</h2>
			<ul className="list-disc ml-6 mb-4">
				<li>UCI FullStack BootCamp | Dec 22'- Jun 23'</li>
			</ul>

			<h2 className="text-xl font-bold mb-2">Projects:</h2>
			<ul className="list-disc ml-6 mb-4">
				<li>
					Project 1: [Briefly describe the project, frontend and backend
					technologies used, and outcomes achieved]
				</li>
				<li>
					Project 2: [Briefly describe the project, frontend and backend
					technologies used, and outcomes achieved]
				</li>
				<li>
					Project 3: [Briefly describe the project, frontend and backend
					technologies used, and outcomes achieved]
				</li>
			</ul>

			<h2 className="text-xl font-bold mb-2">Additional Information:</h2>
			<ul className="list-disc ml-6 mb-4">
				<li>
					GitHub:{' '}
					<a href="[GitHub profile URL]" className="text-blue-500">
						[GitHub profile URL]
					</a>
				</li>
				<li>
					Personal Website/Blog:{' '}
					<a href="[URL]" className="text-blue-500">
						[URL]
					</a>
				</li>
				<li>
					Awards and Recognitions: [List any relevant awards or recognitions]
				</li>
			</ul>
		</div>
	);
}

export default Resume;
