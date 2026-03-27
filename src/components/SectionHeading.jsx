export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}>
      {label && (
        <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
          light ? 'text-pool-blue' : 'text-pool-blue'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
        light ? 'text-white' : 'text-charcoal'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-charcoal/60'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
