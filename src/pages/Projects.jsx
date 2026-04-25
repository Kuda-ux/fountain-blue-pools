import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SEO from '../components/SEO'

const categories = ['All', 'New Pools', 'Repairs & Renovations', 'Finishing']

const projects = [
  {
    src: '/images/project-1.jpeg',
    alt: 'New pool shell construction with integrated circular spa feature and brick coping',
    category: 'New Pools',
  },
  {
    src: '/images/project-2.jpeg',
    alt: 'Collection of completed pool projects showcasing various designs and finishes',
    category: 'New Pools',
  },
  {
    src: '/images/project-3.jpeg',
    alt: 'Portfolio of pool construction and renovation projects including deck installations',
    category: 'Repairs & Renovations',
  },
  {
    src: '/images/project-4.jpeg',
    alt: 'Completed residential pool with terracotta tiled surround and clear blue water',
    category: 'Finishing',
  },
  {
    src: '/images/project-5.jpeg',
    alt: 'Large pool renovation with new paving, mosaic tile band, and step construction',
    category: 'Repairs & Renovations',
  },
  {
    src: '/images/project-6.jpeg',
    alt: 'Pool marblelite finish application — worker applying smooth blue coating',
    category: 'Finishing',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const seo = (
    <SEO
      title="Our Pool Projects - Photo Gallery"
      description="Browse our portfolio of completed swimming pool projects across Zimbabwe. New pool builds, renovations, fibreglass relining, marblelite finishes, and more. See our quality workmanship."
      keywords="pool projects Zimbabwe, swimming pool gallery, pool construction photos, fibreglass relining examples, completed pools Zimbabwe"
      path="/projects"
    />
  )

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const openLightbox = (index) => setLightbox({ open: true, index })
  const closeLightbox = () => setLightbox({ open: false, index: 0 })
  const prevImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? filteredProjects.length - 1 : prev.index - 1,
    }))
  const nextImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === filteredProjects.length - 1 ? 0 : prev.index + 1,
    }))

  return (
    <>
      {seo}
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/project-4.jpeg"
            alt="Completed pool project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
              Our Work
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Pool{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pool-blue to-cyan-300">
                Projects
              </span>{' '}
              &amp; Gallery
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Explore some of our recent pool construction, repair, and renovation work.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Our Recent Projects"
            description="Each project reflects our commitment to quality construction, precision finishing, and client satisfaction."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-deep-blue text-white shadow-lg shadow-deep-blue/25'
                    : 'bg-light-gray text-charcoal/60 hover:bg-deep-blue/10 hover:text-deep-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.src}-${index}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
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
                    <p className="text-white text-sm leading-relaxed">{project.alt}</p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Want Results Like These?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your pool project. Get in touch today for professional advice and a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20saw%20your%20projects%20and%20would%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pool-blue to-cyan-400 hover:from-cyan-400 hover:to-pool-blue text-charcoal px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-pool-blue/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
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

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh]">
            <img
              src={filteredProjects[lightbox.index]?.src}
              alt={filteredProjects[lightbox.index]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="inline-block bg-pool-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                {filteredProjects[lightbox.index]?.category}
              </span>
              <p className="text-white/70 text-sm">{filteredProjects[lightbox.index]?.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
