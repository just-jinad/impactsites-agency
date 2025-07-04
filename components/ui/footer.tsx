import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* Branding */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Logo />
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Impactsites. All rights reserved.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">Programs</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">Impact Stories</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">Donate</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">Volunteer</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">Our Mission</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">Vision & Values</Link></li>
              {/* <li><Link href="/t" className="text-gray-600 hover:text-gray-900">Our Team</Link></li> */}
              {/* <li><Link href="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link></li> */}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              {/* <li><Link href="mailto:info@nambushalom.org" className="text-gray-600 hover:text-gray-900">info@nambushalom.org</Link></li> */}
              <li><Link href="/#" className="text-gray-600 hover:text-gray-900">Newsletter</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Follow Us</h3>
            <ul className="flex gap-2">
              <li><Link href="https://facebook.com" className="text-gray-500 hover:text-gray-600" aria-label="Facebook">FB</Link></li>
              <li><Link href="https://twitter.com" className="text-gray-500 hover:text-gray-600" aria-label="Twitter">X</Link></li>
              <li><Link href="https://instagram.com" className="text-gray-500 hover:text-gray-600" aria-label="Instagram">IG</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional: Remove this if it’s unrelated to your mission */}
      {/* <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
      </div> */}
    </footer>
  );
}
