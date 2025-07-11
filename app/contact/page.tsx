'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import toast, { Toaster } from 'react-hot-toast'
import Stripes from '@/public/images/stripes-dark.svg'
import Header from '@/components/ui/header'

export default function ContactPage() {
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
    const loadingToast = toast.loading('Sending your message...')

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          organizationName: formData.get('organizationName'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Success toast
      toast.success(
        'Message sent successfully! Check your email for confirmation.',
        { duration: 5000 }
      )
      form.reset()
    } catch (error) {
      // Error toast
      toast.error(
        'Failed to send message. Please try again.',
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
              we usually reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              <input
                type="text"
                name="organizationName"
                placeholder="Organization / Charity Name *"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <textarea
                name="message"
                placeholder="How can we help your mission? *"
                className="w-full p-2 border border-gray-300 rounded-md h-28 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <p className="text-xs">Lautech, Ogbomoso</p>
              <p className="text-xs">Yoaco, TX 78701</p>
            </InfoCard>

            <InfoCard icon={<FaPhoneAlt />} title="Phone">
              <p className="text-xs">Call / WhatsApp</p>
              <p className="text-xs">+2349063219493</p>
            </InfoCard>

            <InfoCard icon={<FaEnvelope />} title="Email">
              <p className="text-xs">We reply within a day</p>
              <p className="text-xs">isaacjinad@gmail.com</p>
            </InfoCard>

            <InfoCard icon={<FaClock />} title="Hours">
              <p className="text-xs">Mon – Fri: 9 am – 6 pm CST</p>
              <p className="text-xs">Sat – Sun: By appointment</p>
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
