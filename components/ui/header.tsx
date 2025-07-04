'use client'

import Link from 'next/link'
import Logo from './logo'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent
          before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box]
          before:[mask-composite:exclude_!important]
          before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* ── Brand ─────────────────────────────── */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* ── Desktop Nav ───────────────────────── */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link href="/about" className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                About
              </Link>
            </li>
            <li>
              <Link href="/impact" className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/apply" className="btn-sm bg-indigo-600 text-white shadow-sm hover:bg-indigo-700">
                Apply&nbsp;Now
              </Link>
            </li>
          </ul>

          {/* ── Mobile Menu Toggle ────────────────── */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Sliding Mobile Dropdown ───────────────── */}
        <div
          className={clsx(
            'transition-all duration-300 ease-out overflow-hidden md:hidden',
            isOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          )}
        >
          <div className="mt-2 rounded-xl bg-white shadow-lg py-4 px-6">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/about"
                  className="block text-sm font-medium text-gray-800 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="block text-sm font-medium text-gray-800 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="block text-sm font-medium text-white bg-indigo-600 px-3 py-2 rounded-md text-center hover:bg-indigo-700"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
