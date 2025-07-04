import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              We help nonprofits build beautiful, high-impact websites
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              From donations to digital presence — we handle the tech, you focus on the mission.
            </p>
          </div>

          {/* Planet Image */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image className="rounded-full bg-gray-900" src={PlanetImg} width={400} height={400} alt="Planet" />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image className="absolute -right-64 -top-20 z-10 max-w-none" src={PlanetOverlayImg} width={789} height={755} alt="Planet decoration" />
                  <div>
                    <Image className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500" src={PlanetTagImg01} width={253} height={56} alt="Tag 01" />
                    <Image className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500" src={PlanetTagImg02} width={241} height={56} alt="Tag 02" />
                    <Image className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500" src={PlanetTagImg03} width={243} height={56} alt="Tag 03" />
                    <Image className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500" src={PlanetTagImg04} width={251} height={56} alt="Tag 04" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 md:*:p-10">
            <Feature title="Real-time Analytics" description="See how supporters interact with your site: page views, referrals, clicks, and conversions — all in one dashboard." />
            <Feature title="SEO Optimization" description="Boost visibility and get discovered on Google by the people who need you or want to support your cause." />
            <Feature title="Donation-Ready Pages" description="Accept one-time or recurring donations with secure, custom-built forms and flexible payment options." />
            <Feature title="Accessibility Built-In" description="Your site works for everyone — including users with disabilities. WCAG-compliant and screen reader friendly." />
            <Feature title="Multi-language Support" description="Serve multilingual communities with language switchers and automatic localization built right in." />
            <Feature title="Fast & Reliable Hosting" description="Get a blazing-fast website with zero downtime and built-in security on Vercel, Netlify, or your custom host." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <article>
      <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
        <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
          <circle cx="8" cy="8" r="6" />
        </svg>
        <span>{title}</span>
      </h3>
      <p className="text-[15px] text-gray-400">{description}</p>
    </article>
  );
}
