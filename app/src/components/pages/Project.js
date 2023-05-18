import React, { useState } from 'react';
import TechBlog from '../../images/TechBlog.png';
import GithubLogo from '../../images/github.png';
import JATE from '../../images/JATE.jpg';
import WeatherDashboard from '../../images/WeatherDash.png';

export default function Projects() {
	const projects = [
		{
			name: 'The Tech Blog',
			image: TechBlog,
			link: 'https://the-tech-post.herokuapp.com',
			githubLink: 'https://github.com/jackbngn/tech-blog',
		},
		{
			name: 'J.A.T.E',
			image: JATE,
			link: 'https://the-just-another-text-editor.herokuapp.com/',
			githubLink: 'https://github.com/jackbngn/J.A.T.E',
		},
		{
			name: 'Weather Dashboard',
			image: WeatherDashboard,
			link: 'https://jackbngn.github.io/Weather-Dashboard/',
			githubLink: 'https://github.com/jackbngn/Weather-Dashboard',
		},
		// Add more projects as needed
	];

	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div>
			<h1 className="text-pink-color text-5xl font-bold text-center mt-4">
				Projects
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{projects.map((project, index) => (
					<div
						key={index}
						className="p-4 relative"
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}>
						<h2 className="text-xl text-center font-bold">{project.name}</h2>
						<div className="relative">
							<img
								src={project.image}
								alt={project.name}
								className={`w-full h-64 object-cover transition-all duration-300 ${
									hoveredIndex === index ? 'filter brightness-50' : ''
								}`}
							/>
							{hoveredIndex === index && (
								<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
									<a
										href={project.link}
										target="_blank"
										className="text-white hover:underline mb-2">
										Website
									</a>
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer">
										<img src={GithubLogo} alt="GitHub" className="w-8 h-8" />
									</a>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
