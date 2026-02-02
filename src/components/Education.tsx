import { useInView } from '../hooks/useInView'

export function Education() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative z-10 flex gap-[120px] bg-[rgba(13,13,13,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
          <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
            05
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          EDUCATION
        </span>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-[40px] flex-1">
        {/* Degree */}
        <div className={`flex flex-col gap-[16px] transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-[24px] font-bold text-[var(--color-text-white)] tracking-[-0.5px] font-primary">
            BSc in Medical Informatics / Biomedical Engineering
          </h3>
          <span className="text-[14px] font-medium text-[var(--color-text-muted)] tracking-[1px] font-primary">
            Wroclaw University of Science and Technology
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
            2022 — 2026 (FINISHED DEGREE)
          </span>
        </div>

        {/* Topics */}
        <div className={`flex gap-[40px] transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-normal text-[var(--color-text-dim)] leading-[2] font-primary">
            • Machine Learning &amp; Data Science
            <br />• Medical Imaging &amp; Computer Vision
          </p>
          <p className="text-[13px] font-normal text-[var(--color-text-dim)] leading-[2] font-primary">
            • Statistical Modeling &amp; Signal Processing
            <br />• Full-Stack &amp; Backend Engineering
          </p>
        </div>
      </div>
    </section>
  )
}
