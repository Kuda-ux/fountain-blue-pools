import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Heart, MessageCircle, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

const values = [
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Quality',
    description: 'We use premium materials and proven techniques to deliver pool solutions that meet the highest standards of craftsmanship.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Durability',
    description: 'Every project is built to last. We focus on structural integrity and long-term performance in every detail.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Client Satisfaction',
    description: 'Your satisfaction drives everything we do. We listen carefully and deliver results that exceed expectations.',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Professional Advice',
    description: 'We guide you through every decision with honest, expert advice tailored to your specific pool needs and budget.',
  },
]

const highlights = [
  'New pool construction from design to completion',
  'Expert pool repair and renovation services',
  'Fibreglass relining and marblelite finishing',
  'Professional pump repairs and servicing',
  'Scheduled maintenance plans for all pool types',
  'Filter sand replacement and water chemistry management',
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Trusted Pool Specialists"
        description="Learn about Fountain Blue Pools - Zimbabwe's most trusted swimming pool construction and repair company. 10+ years of premium workmanship, 100+ pools built across Zimbabwe."
        keywords="about fountain blue pools, pool company Zimbabwe, trusted pool builders, swimming pool experts Zimbabwe"
        path="/about"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/project-5.jpeg"
            alt="Pool construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60"></div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
              About Us
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Your Trusted Pool{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pool-blue to-cyan-300">
                Specialists
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Dedicated to delivering premium swimming pool solutions with integrity, skill, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight mb-6">
                Professional Pool Solutions Built on{' '}
                <span className="gradient-text">Trust & Quality</span>
              </h2>
              <div className="space-y-4 text-charcoal/60 text-base leading-relaxed">
                <p>
                  Fountain Blue Pools is a swimming pool specialist focused on quality, reliability, and professional results. We provide new pool construction, repairs, renovations, fibreglass relining, maintenance, and pump solutions for clients who want clean finishes and long-term value.
                </p>
                <p>
                  We understand that a swimming pool is more than just a structure — it is part of the beauty, comfort, and value of your property. That is why we approach each project with attention to detail and commitment to quality workmanship.
                </p>
                <p>
                  Based in Maphisa, Zimbabwe, we serve residential clients who demand the best for their outdoor living spaces. Our team brings experience, precision, and dedication to every project we undertake.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20pool%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-deep-blue hover:bg-deep-blue/90 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-deep-blue/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-deep-blue/5 to-pool-blue/5 rounded-3xl"></div>
              <div className="relative">
                <img
                  src="/images/project-6.jpeg"
                  alt="Pool finishing work in progress"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[240px]">
                  <div className="font-display font-extrabold text-3xl gradient-text mb-1">100%</div>
                  <div className="text-charcoal/60 text-sm">Commitment to quality workmanship on every project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Summary */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/project-1.jpeg"
                  alt="New pool construction"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <img
                  src="/images/project-4.jpeg"
                  alt="Completed pool"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover mt-8"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
                What We Offer
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight mb-6">
                Complete Pool Solutions Under One Roof
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                We provide everything your pool needs — from initial construction through to ongoing maintenance and repairs. Our comprehensive service offering means you have one trusted partner for all your pool requirements.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pool-blue shrink-0 mt-0.5" />
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-deep-blue hover:text-pool-blue font-semibold text-sm transition-colors duration-300"
                >
                  Explore Our Services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy / Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            title="Built on Principles That Matter"
            description="Our approach is guided by core values that ensure every client receives exceptional service and results."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-light-gray rounded-2xl p-7 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-pool-blue/20"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue/10 to-pool-blue/10 flex items-center justify-center text-deep-blue group-hover:bg-gradient-to-br group-hover:from-deep-blue group-hover:to-pool-blue group-hover:text-white transition-all duration-500 mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue to-deep-blue/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Ready to Start Your Pool Project?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a new build, renovation, or repair — contact us today and let&apos;s discuss how we can help.
          </p>
          <a
            href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20pool%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-pool-blue to-cyan-400 hover:from-cyan-400 hover:to-pool-blue text-charcoal px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-pool-blue/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Chat With Us on WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </>
  )
}
