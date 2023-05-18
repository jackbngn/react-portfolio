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
				714-657-4915 |{' '}
				<a href="mailto:jackngn83@gmail.com" className="text-blue-500">
					jackngn83@gmail.com
				</a>{' '}
				|{' '}
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
				<li>
					Experience with React.js for building interactive user interfaces.
				</li>
				<li>Responsive Web Design</li>
				<li>Frontend Testing and Debugging</li>
			</ul>

			<h3 className="font-bold mb-1">Backend Development:</h3>
			<ul className="list-disc ml-6 mb-4">
				<li>Programming Languages: Node.js</li>
				<li>Web Development Frameworks: Express.js</li>
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
					<a
						href="https://the-tech-post.herokuapp.com"
						className="text-blue-500">
						The Tech Blog
					</a>{' '}
					: This application is a blog site where developers can publish their
					blog posts and comment on other developers’ posts as well. The app is
					built using Node.js and follows the MVC paradigm in its architectural
					structure, using Handlebars.js as the templating language, Sequelize
					as the ORM, and the express-session npm package for authentication.
				</li>
				<li>
					<a
						href="https://the-just-another-text-editor.herokuapp.com/"
						className="text-blue-500">
						J.A.T.E
					</a>
					{''} : The text editor PWA is a single-page application that fulfills
					the criteria of a Progressive Web Application. It provides an
					intuitive and user-friendly interface for creating, editing, and
					saving text documents. The application leverages data persistence
					techniques to ensure redundancy in case certain options are not
					supported by the browser. Furthermore, the text editor is designed to
					function offline, allowing users to continue using the application
					offline.
				</li>
				<li>
					<a
						href="https://jackbngn.github.io/Weather-Dashboard/"
						className="text-blue-500">
						Weather Dashboard
					</a>{' '}
					: The "Weather Dashboard" is a web application built using modern web
					technologies and APIs. It leverages HTML, CSS, and JavaScript for the
					front-end development, along with additional libraries and APIs for
					fetching and displaying weather data.
				</li>
			</ul>

			<h2 className="text-xl font-bold mb-2">Additional Information:</h2>
			<ul className="list-disc ml-6 mb-4">
				<li>
					GitHub:{' '}
					<a href="https//github.com/jackbngn/" className="text-blue-500">
						[GitHub profile URL]
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Resume;
