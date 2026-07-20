import { useInView } from '../hooks/useInView'

export function Profile() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="about"
      className="relative z-10 flex gap-[120px] bg-[rgba(13,13,13,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
          <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
            01
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          PROFILE
        </span>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-[32px] flex-1">
        <h2 className={`text-[42px] font-semibold text-[var(--color-text-white)] tracking-[-1px] leading-[1.2] font-primary max-w-[800px] transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Engineering AI solutions that drive real business impact.
        </h2>
        <p className={`text-[15px] font-normal text-[var(--color-text-muted)] leading-[1.8] font-primary max-w-[700px] transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Machine Learning Engineer and AI Team Lead with 3+ years of commercial experience designing, building, and deploying scalable AI/ML systems from scratch to production. Proven expertise in LLMs, RAG systems, computer vision, predictive modeling, and optimization.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className={`w-[1px] h-[200px] bg-[var(--color-border)] self-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`} />
    </section>
  )
}
