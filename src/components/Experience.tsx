import { useInView } from '../hooks/useInView'

const experiences = [
  {
    year: '2025',
    range: 'AUG — PRESENT',
    role: 'Team Lead / AI Engineer',
    company: 'CONE RED • Wroclaw, Poland',
    description: 'Lead design and implementation of enterprise-grade AI solutions. Architected LLM-powered systems including RAG pipelines and multi-agent workflows. Established MLOps standards for CI/CD and automated deployment.',
    current: true,
  },
  {
    year: '2025',
    range: 'FEB — AUG',
    role: 'AI Engineer',
    company: 'CONE RED • Wroclaw, Poland',
    description: 'Developed production ML models for computer vision, NLP, and recommendation systems. Integrated LLM APIs (GPT-5, Claude) into business workflows. Implemented containerized ML services with Docker and Kubernetes.',
    current: false,
  },
  {
    year: '2024',
    range: 'FEB — FEB 2025',
    role: 'Quality Assurance Engineer',
    company: 'Star Global • Wroclaw, Poland',
    description: 'Ensured software quality and regulatory compliance for enterprise and medical-grade systems. Authored and executed 300+ test cases; supported audits with zero critical findings. Strengthened understanding of data quality, risk management, and security, directly applicable to enterprise AI systems.',
    current: false,
    older: true,
  },
  {
    year: '2020',
    range: 'NOV — DEC 2021',
    role: 'Computer Vision Software Engineer (Intern)',
    company: 'National Center, Academy of Sciences of Ukraine • Kyiv',
    description: 'Built OpenCV-based computer vision pipelines for scientific image analysis. Collaborated with researchers to translate scientific requirements into production-ready tools.',
    current: false,
    older: true,
    noBorder: true,
  },
]

export function Experience() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="experience"
      className="relative z-10 flex gap-[120px] bg-[rgba(13,13,13,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
          <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
            03
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          EXPERIENCE
        </span>
      </div>

      {/* Right Content */}
      <div className="flex flex-col flex-1">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex gap-[60px] py-[40px] transition-all duration-700 ${
              !exp.noBorder ? 'border-b border-[#1A1A1A]' : ''
            } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isInView ? `${200 + index * 150}ms` : '0ms' }}
          >
            {/* Date */}
            <div className="flex flex-col gap-[4px] w-[140px] shrink-0">
              <span
                className={`text-[32px] font-bold tracking-[-1px] font-primary stat-hover cursor-default ${
                  exp.current
                    ? 'text-[var(--color-text-white)]'
                    : exp.older
                    ? 'text-[var(--color-text-dark)]'
                    : 'text-[var(--color-text-muted)]'
                }`}
              >
                {exp.year}
              </span>
              <span
                className={`text-[10px] font-medium tracking-[2px] font-primary ${
                  exp.current
                    ? 'text-[var(--color-primary)]'
                    : exp.older
                    ? 'text-[var(--color-text-darker)]'
                    : 'text-[var(--color-text-dark)]'
                }`}
              >
                {exp.range}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[16px] flex-1">
              <h3
                className="text-[20px] font-semibold font-primary text-[var(--color-text-white)]"
              >
                {exp.role}
              </h3>
              <span
                className={`text-[12px] font-medium tracking-[1px] font-primary ${
                  exp.older ? 'text-[var(--color-text-dim)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {exp.company}
              </span>
              <p className="text-[14px] font-normal text-[var(--color-text-dim)] leading-[1.7] font-primary max-w-[550px]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
