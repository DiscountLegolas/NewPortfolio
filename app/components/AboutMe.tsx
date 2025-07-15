'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-center">
					About Me
				</motion.h2>
				<p className="text-lg text-gray-300 text-center">
					Software developer with over 2 years of hands-on experience in building web applications,
					enhancing system performance, and contributing to AI-driven solutions. Specialized in
					backend development and database management, with a proven track record of designing
					scalable architectures and integrating intelligent features into production systems.
				</p>
			</div>
		</section>
	);
} 