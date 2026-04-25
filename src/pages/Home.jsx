import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Wrench, Sparkles, Droplets, Clock, Users, CheckCircle, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

const services = [
  {
    icon: <Droplets className="w-7 h-7" />,
    title: 'New Swimming Pools',
    description: 'Custom-designed swimming pools built with precision engineering and premium materials for lasting quality.',
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Pool Repairs',
    description: 'Expert diagnosis and repair of leaks, cracks, structural issues, and surface damage to restore your pool.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Renovations',
    description: 'Complete pool makeovers that transform outdated pools into modern, stunning outdoor features.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Fibreglass Relining',
    description: 'Durable fibreglass relining solutions that provide a smooth, watertight, and long-lasting finish.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Marblelite Finishes',
    description: 'Beautiful marblelite pool finishes that combine elegance with durability for a premium look.',
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Pump Repairs',
    description: 'Professional pump servicing, repairs, and replacements to keep your filtration system running efficiently.',
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: 'Sand Changes',
    description: 'Filter sand replacement to maintain optimal water clarity and extend the life of your filtration system.',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: 'Maintenance Plans',
    description: 'Scheduled weekend and monthly maintenance to keep your pool clean, balanced, and swim-ready.',
  },
]

const whyChooseUs = [
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Professional Workmanship', text: 'Every project completed to the highest standards of quality and finish.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Reliable Service', text: 'Consistent, dependable service you can count on every time.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'High-Quality Finishes', text: 'Premium materials and techniques for results that last.' },
  { icon: <Wrench className="w-6 h-6" />, title: 'Maintenance Expertise', text: 'Comprehensive maintenance solutions to protect your investment.' },
  { icon: <Users className="w-6 h-6" />, title: 'Residential Specialists', text: 'Dedicated focus on residential pools and home outdoor spaces.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Repair & Renovation', text: 'Full-service repair and renovation capabilities under one roof.' },
]

const projects = [
  { src: '/images/project-1.jpeg', alt: 'New pool construction with curved spa section', category: 'New Build' },
  { src: '/images/project-4.jpeg', alt: 'Completed residential pool with tiled surround', category: 'Completed Pool' },
  { src: '/images/project-5.jpeg', alt: 'Pool renovation and tiling in progress', category: 'Renovation' },
  { src: '/images/project-6.jpeg', alt: 'Pool marblelite finish application', category: 'Finishing' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="#1 Swimming Pool Construction, Repairs & Renovations"
        description="Zimbabwe's leading swimming pool experts. Professional pool construction, repairs, fibreglass relining, marblelite finishes, pump repairs, and maintenance. Serving Bulawayo, Harare, Maphisa & all of Zimbabwe. Get a FREE quote today!"
        keywords="swimming pool Zimbabwe, pool construction Zimbabwe, pool repairs, fibreglass relining, marblelite finish, pool builders Bulawayo, pool company Harare, fountain blue pools, Maphisa pools"
        path="/"
      />
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/project-4.jpeg"
            alt="Beautiful swimming pool"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]/50"></div>
        </div>

        {/* Subtle glow effects */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pool-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-deep-blue/15 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-pool-blue/20 backdrop-blur-sm border border-pool-blue/30 text-pool-blue px-4 py-2 rounded-full text-sm font-medium">
                <Droplets size={16} />
                Professional Pool Specialists
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl">Premium Pool</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-pool-blue mt-1">Construction,</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-white/90 mt-1">Repairs & Renovations</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              From new swimming pools to repairs, maintenance, fibreglass relining, and pump solutions — Fountain Blue Pools delivers professional workmanship you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20pool%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-pool-blue hover:bg-cyan-400 text-charcoal px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-pool-blue/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get a Quote on WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-7 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pool-blue">100+</div>
                <div className="text-sm text-white/50">Pools Built</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pool-blue">10+</div>
                <div className="text-sm text-white/50">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pool-blue">100%</div>
                <div className="text-sm text-white/50">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 animate-bounce">
            <div className="w-1.5 h-3 bg-pool-blue rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / INTRO SECTION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
              Trusted Pool Specialists
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Building Pools That{' '}
              <span className="gradient-text">Stand the Test of Time</span>
            </h2>
            <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed mb-8">
              Fountain Blue Pools is committed to delivering clean, durable, and professionally finished swimming pool solutions. Whether you need a brand-new pool, expert repairs, routine maintenance, or full renovation, we provide workmanship designed to last.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '8+', label: 'Services Offered' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-extrabold text-3xl md:text-4xl gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-charcoal/50 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Professional Pool Services"
            description="From construction to maintenance, we provide a complete range of swimming pool solutions tailored to your needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-pool-blue/20"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue/10 to-pool-blue/10 flex items-center justify-center text-deep-blue group-hover:bg-gradient-to-br group-hover:from-deep-blue group-hover:to-pool-blue group-hover:text-white transition-all duration-500 mb-5">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2 group-hover:text-deep-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-deep-blue hover:text-pool-blue font-semibold transition-colors duration-300"
            >
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Why Choose Us"
                title="Why Clients Trust Fountain Blue Pools"
                description="We combine technical expertise with a commitment to quality that sets us apart in the industry."
                center={false}
              />
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-deep-blue/10 to-pool-blue/10 flex items-center justify-center text-deep-blue">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-charcoal text-sm mb-1">{item.title}</h4>
                      <p className="text-charcoal/50 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-deep-blue/5 to-pool-blue/5 rounded-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/images/project-4.jpeg"
                  alt="Completed residential pool"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="/images/project-6.jpeg"
                  alt="Pool finishing work"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img
                  src="/images/project-5.jpeg"
                  alt="Pool renovation in progress"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="/images/project-1.jpeg"
                  alt="New pool construction"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Portfolio"
            title="Recent Pool Projects"
            description="Explore some of our recent pool construction, repair, and renovation work showcasing our commitment to excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-pool-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <p className="text-white text-sm">{project.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-deep-blue hover:bg-deep-blue/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-deep-blue/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/project-4.jpeg"
            alt="Beautiful completed pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/95 to-deep-blue/80"></div>
        </div>

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pool-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
            Let&apos;s Get Started
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Need a New Pool or Professional Pool Repair?
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Let&apos;s help you transform, repair, or maintain your swimming pool with professional care and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20pool%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pool-blue to-cyan-400 hover:from-cyan-400 hover:to-pool-blue text-charcoal px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-pool-blue/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
