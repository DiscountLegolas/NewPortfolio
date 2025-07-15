'use client';

import { motion } from 'framer-motion';

const jobs = [
	{
		title: 'Back End Developer',
		company: 'creWin Online Denizcilik',
		location: 'Remote',
		dates: 'Aug 2022 - Sept 2022',
		bullets: [
			'I contributed to the backend development processes of a job platform for seafarers.',
			'I worked on microservice architecture, API integrations, and database design.',
		],
		tech: ['.Net', 'MSSQL'],
	},
	{
		title: 'Software Developer',
		company: 'Src Yazılım',
		location: 'Remote',
		dates: 'Mar 2023 - Feb 2024',
		bullets: [
			'I contributed to the backend development processes of a job platform for seafarers.',
			'I worked on microservice architecture, API integrations, and database design.',
		],
		tech: ['.Net', 'MSSQL', 'Python', 'PostgreSql', "LLM's", 'Flask'],
	},
	{
		title: 'Full-Stack Developer',
		company: 'İnfinity E-Learning',
		location: 'İstanbul/Sarıyer',
		dates: 'Feb 2024 - May 2025',
		bullets: [
			'Developed and integrated AI modules using fine‑tuned LLMs and custom model deployments, extending platform intelligence with automated content generation and smart suggestions.',
			'Built applications that help users generate announcements, surveys, and competency sets using generative AI.',
			'Developed an app that creates .PPTX presentations from user input, automating content formatting using generative AI techniques.',
		],
		tech: ['Python', 'Flask', 'PostgreSql', 'TensorFlow', 'Hugging Face Transformers', 'Langchain', 'Pytorch'],
	},
];

export default function WorkExperience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-center">
					Work Experience
				</motion.h2>
				<div className="space-y-8">
					{jobs.map((job, idx) => (
						<div key={idx}>
							<div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
								<h3 className="text-xl font-semibold">{job.title} <span className="text-gray-400 font-normal">@ {job.company}</span> <span className="text-gray-500 font-normal">({job.location})</span></h3>
								<p className="text-gray-400 text-sm mb-2">{job.dates}</p>
								<ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
									{job.bullets.map((bullet, i) => (
										<li key={i}>{bullet}</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-2">
									{job.tech.map((tech, i) => (
										<span key={i} className="text-xs px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
											{tech}
										</span>
									))}
								</div>
							</div>
							{idx < jobs.length - 1 && (
								<hr className="my-8 border-t border-gray-700 opacity-50" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 