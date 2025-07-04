'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Stripes from '@/public/images/stripes-dark.svg'
import Header from '@/components/ui/header'

export default function ApplyNowPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' })
  }, [])

  return (
    <>
      <Header />

      <section className="relative min-h-screen pt-[120px] pb-16 px-4 sm:px-6 overflow-hidden">
        {/* background stripes */}
        <div
          className="pointer-events-none absolute left-1/2 -top-10 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            src={Stripes}
            alt="Stripes"
            width={768}
            height={432}
            className="w-full max-w-none"
          />
        </div>

        {/* radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="h-56 w-[480px] rounded-full border-[20px] border-indigo-500 blur-3xl" />
        </div>

        {/* form card */}
        <div
          className="mx-auto max-w-3xl rounded-2xl shadow-xl p-6 sm:p-10 md:p-12"
          data-aos="fade-up"
        >
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apply for an ImpactSite
            </h1>
            <p className="mt-3 text-gray-600 text-sm">
              Fill in the details below and we’ll be in touch within a few days.
            </p>
          </header>

          {/* form */}
          <form className="space-y-6">
            {/* org + website */}
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
              <input
                required
                className="input"
                placeholder="Organization / Project Name *"
              />
              <input
                className="input"
                placeholder="Website (if any)"
              />
            </div>

            {/* mission */}
            <textarea
              required
              className="input h-24"
              placeholder="Briefly describe your mission *"
            />

            {/* goal */}
            <textarea
              required
              className="input h-28"
              placeholder="What do you hope a new website will help you achieve? *"
            />

            {/* name + email */}
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
              <input
                required
                className="input"
                placeholder="Your Full Name *"
              />
              <input
                required
                type="email"
                className="input"
                placeholder="Email *"
              />
            </div>

            {/* phone */}
            <input
              type="tel"
              className="input"
              placeholder="Phone Number (optional)"
            />

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Submit Application
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Thank you for the work you do. We’ll review and reply within 3‑5 business days.
          </p>
        </div>
      </section>
    </>
  )
}

/* --- tailwind helper: put in global CSS or TSX above form --- */
const inputClasses =
  'w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600';
