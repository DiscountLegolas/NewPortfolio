'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			{/* <AboutMe /> */}
			<SystemArchitecture />
			<WorkExperience />
			{/* <TechnicalMetrics /> */}
			<ContactSection />
		</main>
	);
}
