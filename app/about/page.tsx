'use client'

import Image from 'next/image'
import { Shield, Lightbulb, Zap, Target, Eye, Compass } from 'lucide-react'
import Stripes from '@/public/images/stripes-dark.svg'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/ui/header'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' })
  }, [])

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
            className="max-w-none"
            src={Stripes}
            width={768}
            height={432}
            alt="Stripes"
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
            <p className="text-sm font-medium mt-10 text-indigo-700 uppercase tracking-wide mb-4">
              About ImpactSites
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight ">
              Websites That Power Purpose
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              At ImpactSites, we build clean, powerful websites for nonprofits, charities, and foundations.
              Our mission is to help purpose-driven organizations connect with their communities, raise support,
              and make meaningful impact — all through the web.
            </p>
          </div>

          {/* Core Values */}
          <div
            className="bg-indigo-800/90 rounded-3xl p-8 md:p-12 mb-16"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Value icon={<Shield />} label="Integrity" />
              <Value icon={<Zap />} label="Speed" />
              <Value icon={<Target />} label="Purpose" />
              <Value icon={<Lightbulb />} label="Creativity" />
            </div>
          </div>

          {/* Vision + Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-16" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-indigo-500 mr-3" />
                <h2 className="text-2xl font-bold ">Our Vision</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To see every impact-driven organization — from rural charities to global initiatives — fully
                equipped with beautiful, functional websites that amplify their work and voice.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Compass className="w-6 h-6 text-indigo-500 mr-3" />
                <h2 className="text-2xl font-bold ">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We exist to design and build websites for changemakers. We simplify the tech, handle the heavy lifting,
                and deliver digital tools that help your mission grow — no matter your budget or background.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center" data-aos="zoom-in-up" data-aos-delay="300">
            <a
              href="/impact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              See Our Impact
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

// Reusable Value card
const Value = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white">
      {icon}
    </div>
    <p className="text-white font-medium text-lg">{label}</p>
  </div>
)
