'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import toast, { Toaster } from 'react-hot-toast'
import Stripes from '@/public/images/stripes-dark.svg'
import Header from '@/components/ui/header'

export default function ApplyNowPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Show loading toast
    const loadingToast = toast.loading('Submitting your application...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationName: formData.get('organizationName'),
          website: formData.get('website'),
          mission: formData.get('mission'),
          goal: formData.get('goal'),
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      // Success toast
      toast.success(
        'Application submitted successfully! Check your email for confirmation.',
        { duration: 5000 }
      )
      form.reset()
    } catch (error) {
      // Error toast
      toast.error(
        'Failed to submit application. Please try again.',
        { duration: 5000 }
      )
    } finally {
      setIsSubmitting(false)
      toast.dismiss(loadingToast)
    }
  }

  return (
    <>
      <Header />
      {/* Toast Container */}
      <Toaster
        position="top-center"
        toastOptions={{
          // Styling for all toasts
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '14px',
          },
          // Custom success styling
          success: {
            duration: 5000,
            style: {
              background: '#059669',
            },
          },
          // Custom error styling
          error: {
            duration: 5000,
            style: {
              background: '#DC2626',
            },
          },
        }}
      />

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
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
              Apply for an ImpactSite
            </h1>
            <p className="mt-3 text-gray-600 text-sm">
              Fill in the details below and we'll be in touch within a few days.
            </p>
          </header>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* org + website */}
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
              <input
                required
                name="organizationName"
                className="input"
                placeholder="Organization / Project Name *"
              />
              <input
                name="website"
                className="input"
                placeholder="Website (if any)"
              />
            </div>

            {/* mission */}
            <textarea
              required
              name="mission"
              className="input h-24"
              placeholder="Briefly describe your mission *"
            />

            {/* goal */}
            <textarea
              required
              name="goal"
              className="input h-28"
              placeholder="What do you hope a new website will help you achieve? *"
            />

            {/* name + email */}
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
              <input
                required
                name="fullName"
                className="input"
                placeholder="Your Full Name *"
              />
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email *"
              />
            </div>

            {/* phone */}
            <input
              type="tel"
              name="phone"
              className="input"
              placeholder="Phone Number (optional)"
            />

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Thank you for the work you do. We'll review and reply within 3‑5 business days.
          </p>
        </div>
      </section>
    </>
  )
}

/* --- tailwind helper: put in global CSS or TSX above form --- */
const inputClasses =
  'w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600'
