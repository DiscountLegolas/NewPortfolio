'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Fourier Analysis Web Application',
							description: 'Developed a web application for Fourier analysis, enabling complex calculations and interactive graph visualizations.',
							details: [
								'Leveraged mathematical libraries such as NumPy for efficient numerical operations',
								'Implemented advanced algorithms for real-time signal processing',
								'Created intuitive UI for seamless user experience',
							],
							tech: ['Python', 'NumPy', 'React', 'D3.js'],
						},
						{
							title: 'Custom Helium10-like Widget',
							description: 'Engineered a custom widget replicating core functionalities of the Helium10 platform to streamline product research and analysis.',
							details: [
								'Automated data collection and analysis for e-commerce products',
								'Enhanced user workflows for product research',
								'Integrated with third-party APIs for real-time insights',
							],
							tech: ['JavaScript', 'React', 'Node.js', 'REST API'],
						},
						{
							title: 'Centralized Reporting Infrastructure',
							description: 'Redesigned reporting by replacing Excel-based outputs with a centralized reporting page, consolidating multiple reports per module.',
							details: [
								'Improved accessibility and scalability of business reports',
								'Unified data visualization and export features',
								'Enabled real-time data updates and filtering',
							],
							tech: ['Python', 'Scipy', 'Pandas', 'MSSQL','REST API','Streamlit'],
						},
						{
							title: 'Constructor Proctor System Integration',
							description: 'Independently integrated a secure, real-time proctoring system to reinforce academic integrity through advanced anti-cheating measures.',
							details: [
								'Enabled live exam monitoring and automated flagging',
								'Ensured data privacy and compliance',
								'Seamless integration with existing platform architecture',
							],
							tech: ['JavaScript', '.Net', 'MSSQL', 'REST API'],
						},
						{
							title: 'Localization Logic Optimization',
							description: 'Restructured localization logic to significantly improve system load times and overall responsiveness.',
							details: [
								'Optimized language resource loading and caching',
								'Reduced initial page load times by over 30%',
								'Enhanced user experience for global audiences',
							],
							tech: ['JavaScript', '.Net', 'MSSQL', 'Python'],
						},
						{
							title: 'AI Module Design & Integration',
							description: 'Designed, developed, and integrated AI modules using machine learning algorithms and fine-tuned large language models (LLMs).',
							details: [
								'Custom model deployments to extend platform intelligence',
								'Integrated ML-driven features for automation and insights',
								'Continuous model improvement and monitoring',
							],
							tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
