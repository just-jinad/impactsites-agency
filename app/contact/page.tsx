'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Stripes from '@/public/images/stripes-dark.svg'
import Header from '@/components/ui/header'

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' })
  }, [])

  return (
    <>
      <Header />

      <section className="relative min-h-screen pt-[120px] pb-16 px-4 sm:px-6 overflow-hidden ">
        {/* Background Stripes */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image className="max-w-full" src={Stripes} width={768} height={432} alt="Stripes" />
        </div>

        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-56 w-[480px] rounded-full border-[20px] border-indigo-500 blur-3xl" />
        </div>

        {/* Main Wrapper */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="w-full md:w-[60%] bg-white p-6 sm:p-8 rounded-xl shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Have a question or ready to start a project? Drop us a message —
              we usually reply within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Organization / Charity Name *"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <textarea
                placeholder="How can we help your mission? *"
                className="w-full p-2 border border-gray-300 rounded-md h-28 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 text-sm font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div
            className="w-full md:w-[30%] space-y-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <InfoCard icon={<FaMapMarkerAlt />} title="Address">
              <p className="text-xs">123 Impact Lane</p>
              <p className="text-xs">Austin, TX 78701</p>
            </InfoCard>

            <InfoCard icon={<FaPhoneAlt />} title="Phone">
              <p className="text-xs">Call / WhatsApp</p>
              <p className="text-xs">1‑800‑IMPACT‑1</p>
            </InfoCard>

            <InfoCard icon={<FaEnvelope />} title="Email">
              <p className="text-xs">We reply within a day</p>
              <p className="text-xs">hello@impactsites.org</p>
            </InfoCard>

            <InfoCard icon={<FaClock />} title="Hours">
              <p className="text-xs">Mon – Fri: 9 am – 6 pm CST</p>
              <p className="text-xs">Sat – Sun: By appointment</p>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  )
}

// Reusable Card Component
const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) => (
  <div className="bg-indigo-700/90 text-white p-4 rounded-lg">
    <p className="font-bold text-sm mb-1 flex items-center">
      {icon} <span className="ml-2">{title}</span>
    </p>
    {children}
  </div>
)
