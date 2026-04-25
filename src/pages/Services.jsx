import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Wrench, Sparkles, Shield, Clock, Settings, Filter, CalendarCheck } from 'lucide-react'
import SEO from '../components/SEO'

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'New Swimming Pools',
    description: 'We design and build custom swimming pools tailored to your space, style, and budget. From excavation to finishing, every stage is managed with precision and care to deliver a pool you will enjoy for years to come.',
    benefits: ['Custom design to suit your property', 'Quality materials and construction', 'Complete project management', 'Professional finishing and handover'],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Pool Repairs',
    description: 'From minor cracks to major structural repairs, our team diagnoses and fixes pool issues with expert precision. We restore your pool to full working condition, ensuring safety and longevity.',
    benefits: ['Leak detection and repair', 'Crack and structural repairs', 'Surface restoration', 'Plumbing and fitting repairs'],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Pool Renovations',
    description: 'Transform your outdated or worn pool into a stunning modern feature. Our renovation services cover everything from resurfacing and retiling to complete redesigns that elevate your outdoor space.',
    benefits: ['Full pool resurfacing', 'Modern design upgrades', 'Tile and coping replacement', 'Complete aesthetic transformation'],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Fibreglass Relining',
    description: 'Fibreglass relining provides a durable, smooth, and watertight finish for your pool. This cost-effective solution extends the life of your pool significantly while delivering a clean, professional appearance.',
    benefits: ['Long-lasting waterproof seal', 'Smooth, attractive finish', 'Prevents future leaks', 'Cost-effective renovation option'],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Marblelite / Maberlite Finishes',
    description: 'Our marblelite finishing service delivers a beautiful, hard-wearing pool surface that combines luxury aesthetics with practical durability. Available in a range of colours to suit your style.',
    benefits: ['Premium aesthetic finish', 'Durable and long-lasting', 'Range of colour options', 'Smooth comfortable surface'],
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Pump Repairs',
    description: 'Keep your filtration system running at peak performance with our professional pump repair service. We diagnose faults quickly and provide reliable repairs or replacements as needed.',
    benefits: ['Expert fault diagnosis', 'Efficient repairs', 'Replacement recommendations', 'System performance optimization'],
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: 'Sand Changes',
    description: 'Regular sand changes are essential for maintaining optimal water clarity and filter performance. We replace your filter sand efficiently, ensuring your pool stays crystal clear.',
    benefits: ['Improved water clarity', 'Better filtration performance', 'Extended filter lifespan', 'Professional installation'],
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: 'Weekend & Monthly Maintenance',
    description: 'Our scheduled maintenance plans keep your pool clean, chemically balanced, and swim-ready throughout the year. Choose from weekend or monthly plans designed to fit your needs and budget.',
    benefits: ['Regular cleaning and skimming', 'Chemical testing and balancing', 'Equipment inspection', 'Consistent swim-ready condition'],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Pool Services - Construction, Repairs, Relining & Maintenance"
        description="Complete swimming pool services in Zimbabwe: new pool construction, repairs, fibreglass relining, marblelite finishes, pump repairs, sand changes, renovations, and maintenance plans. Get a free quote!"
        keywords="pool services Zimbabwe, swimming pool construction, fibreglass relining, marblelite finish, pump repairs, pool maintenance, sand changes, pool renovation"
        path="/services"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/project-6.jpeg"
            alt="Professional pool work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
              Our Services
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Complete Pool{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pool-blue to-cyan-300">
                Solutions
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              From new builds and renovations to repairs and routine maintenance — we deliver professional pool services that protect your investment and keep your pool looking its best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-light-gray rounded-2xl p-8 md:p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-pool-blue/10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-deep-blue to-pool-blue flex items-center justify-center text-white mb-6 shadow-lg shadow-deep-blue/20">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/60 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-sm text-charcoal/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-pool-blue shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-deep-blue/5 to-pool-blue/5 rounded-2xl"></div>
                    <img
                      src={`/images/project-${(index % 6) + 1}.jpeg`}
                      alt={service.title}
                      className="relative rounded-2xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue to-deep-blue/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pool-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Need a Service? Let&apos;s Talk.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact us today for professional advice and a no-obligation quote on any of our pool services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20pool%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pool-blue to-cyan-400 hover:from-cyan-400 hover:to-pool-blue text-charcoal px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-pool-blue/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Quote on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
