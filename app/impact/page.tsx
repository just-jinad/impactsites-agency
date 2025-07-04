'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stripes from '@/public/images/stripes-dark.svg';
import Header from '@/components/ui/header';
import { FaWater, FaGraduationCap, FaClinicMedical } from 'react-icons/fa';

const impacts = [
  {
    id: 1,
    icon: <FaWater className="w-6 h-6 text-indigo-500" />,
    title: 'Clean Water Initiative',
    description:
      'Providing safe, accessible clean water to rural communities — improving health, education, and daily life for thousands.',
    stats: '10,000+ People Served',
  },
  {
    id: 2,
    icon: <FaGraduationCap className="w-6 h-6 text-indigo-500" />,
    title: 'Education Access Program',
    description:
      'Building digital learning platforms and awarding scholarships to empower underprivileged students.',
    stats: '500+ Scholarships Awarded',
  },
  {
    id: 3,
    icon: <FaClinicMedical className="w-6 h-6 text-indigo-500" />,
    title: 'Healthcare Outreach',
    description:
      'Mobile clinics and health education campaigns reaching remote villages and towns, saving lives daily.',
    stats: '200+ Clinics Hosted',
  },
];

export default function ImpactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  return (
    <>
      <Header />

      <div className="relative min-h-screen py-16 px-4 sm:px-6 overflow-hidden">
        {/* Background Stripes */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none opacity-30"
            src={Stripes}
            width={768}
            height={432}
            alt="Background stripes"
          />
        </div>

        {/* Glow Effect */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-56 w-[480px] rounded-full border-[20px] border-indigo-500 blur-3xl" />
        </div>

        {/* Wrapper */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-sm font-medium text-indigo-700 uppercase tracking-wide mb-4">
              Our Impact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Making a Difference
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We build powerful websites that empower charities and foundations to amplify their mission, grow their reach, and make a real difference.
            </p>
          </div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impacts.map(({ id, icon, title, description, stats }) => (
              <ImpactCard
                key={id}
                icon={icon}
                title={title}
                description={description}
                stats={stats}
                delay={id * 100}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="zoom-in-up" data-aos-delay="300">
            <button className="bg-indigo-700 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-500 transition-colors duration-200">
              Join Us / Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ImpactCard({
  icon,
  title,
  description,
  stats,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  delay: number;
}) {
  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default text-center"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-3">{title}</h2>
      <p className="text-gray-600 mb-5 leading-relaxed text-sm">{description}</p>
      <p className="text-indigo-600 font-bold tracking-wide">{stats}</p>
    </div>
  );
}