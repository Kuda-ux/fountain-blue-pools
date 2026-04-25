import { useState } from 'react'
import { Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello, my name is ${formData.name}.%0A%0APhone: ${formData.phone}%0AService Needed: ${formData.service}%0A%0AMessage: ${formData.message}`
    window.open(
      `https://wa.me/263780292970?text=${encodeURIComponent(`Hello, my name is ${formData.name}.\n\nPhone: ${formData.phone}\nService Needed: ${formData.service}\n\nMessage: ${formData.message}`)}`,
      '_blank'
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <SEO
        title="Contact Us - Get a Free Pool Quote"
        description="Contact Fountain Blue Pools for a free quote on swimming pool construction, repairs, and maintenance in Zimbabwe. Call +263 780 292 970 or WhatsApp us today!"
        keywords="contact fountain blue pools, pool quote Zimbabwe, swimming pool consultation, pool builders contact"
        path="/contact"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-pool-night.webp"
            alt="Luxury pool with LED lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/60"></div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pool-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
              Contact Us
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pool-blue to-cyan-300">
                Touch
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Looking for a new pool, repairs, renovation, or maintenance? Contact Fountain Blue Pools for professional assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
                Reach Out
              </span>
              <h2 className="font-display font-bold text-3xl text-charcoal leading-tight mb-6">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                Whether you have a question, need a quote, or want to discuss a project, we&apos;re here to help. Reach out via phone, WhatsApp, or fill in the form.
              </p>

              <div className="space-y-6">
                {/* WhatsApp / Main Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-blue to-pool-blue flex items-center justify-center text-white shrink-0 shadow-lg shadow-deep-blue/20">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-charcoal text-sm mb-1">WhatsApp / Phone</h4>
                    <a
                      href="tel:+263780292970"
                      className="text-charcoal/60 hover:text-deep-blue text-sm transition-colors duration-300 block"
                    >
                      +263 780 292 970
                    </a>
                  </div>
                </div>

                {/* Additional Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-blue to-pool-blue flex items-center justify-center text-white shrink-0 shadow-lg shadow-deep-blue/20">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-charcoal text-sm mb-1">Additional Phone</h4>
                    <a
                      href="tel:+263777776088"
                      className="text-charcoal/60 hover:text-deep-blue text-sm transition-colors duration-300 block"
                    >
                      +263 777 776 088
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-blue to-pool-blue flex items-center justify-center text-white shrink-0 shadow-lg shadow-deep-blue/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-charcoal text-sm mb-1">Location</h4>
                    <p className="text-charcoal/60 text-sm">Maphisa, Zimbabwe</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <h4 className="font-display font-bold text-charcoal mb-2">Prefer WhatsApp?</h4>
                <p className="text-charcoal/60 text-sm mb-4">
                  Send us a message directly on WhatsApp for a quick response.
                </p>
                <a
                  href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20pool%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-light-gray rounded-2xl p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
                  Send Us a Message
                </h3>
                <p className="text-charcoal/50 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6 animate-fade-in">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Your message has been sent via WhatsApp. We&apos;ll respond shortly!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pool-blue/50 focus:border-pool-blue transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+263 7XX XXX XXX"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pool-blue/50 focus:border-pool-blue transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-pool-blue/50 focus:border-pool-blue transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="New Swimming Pool">New Swimming Pool</option>
                      <option value="Pool Repairs">Pool Repairs</option>
                      <option value="Pool Renovation">Pool Renovation</option>
                      <option value="Fibreglass Relining">Fibreglass Relining</option>
                      <option value="Marblelite Finish">Marblelite Finish</option>
                      <option value="Pump Repairs">Pump Repairs</option>
                      <option value="Sand Change">Sand Change</option>
                      <option value="Maintenance Plan">Maintenance Plan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your pool project or what you need help with..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pool-blue/50 focus:border-pool-blue transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-deep-blue to-deep-blue/90 hover:from-pool-blue hover:to-pool-blue/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-deep-blue/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Send Message via WhatsApp
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-pool-blue mb-4">
            Our Location
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-tight mb-4">
            Based in Maphisa, Zimbabwe
          </h2>
          <p className="text-charcoal/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Serving residential clients with premium pool construction, repair, and maintenance services.
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              title="Fountain Blue Pools Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d28.95!3d-20.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb1a8a0a0a0a0a0%3A0x0!2sMaphisa%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1600000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
