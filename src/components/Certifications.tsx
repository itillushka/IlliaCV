import { useInView } from '../hooks/useInView'

const certifications = [
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
  },
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'IBM',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'AMAZON WEB SERVICES',
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'GOOGLE',
  },
  {
    name: 'Neo4j Certified Professional',
    issuer: 'NEO4J',
  },
]

export function Certifications() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative z-10 flex gap-[120px] bg-[rgba(17,17,17,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
          <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
            06
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          CERTIFICATIONS
        </span>
      </div>

      {/* Right Content - Two Columns */}
      <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px] flex-1">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`flex items-center gap-[16px] transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
          >
            <div className="w-[8px] h-[8px] bg-[var(--color-primary)] shrink-0" />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px] font-semibold text-[var(--color-text-white)] font-primary">
                {cert.name}
              </span>
              <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-[2px] font-primary">
                {cert.issuer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
