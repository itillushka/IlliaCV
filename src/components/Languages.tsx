import { useInView } from '../hooks/useInView'

const languages = [
  { name: 'ENGLISH', level: 'C1 — Advanced' },
  { name: 'POLISH', level: 'Upper-Intermediate' },
  { name: 'UKRAINIAN / RUSSIAN', level: 'Native' },
]

export function Languages() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative z-10 flex gap-[120px] bg-[rgba(13,13,13,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <span className="text-[11px] font-bold text-[var(--color-primary)] tracking-[3px] font-primary">
            07
          </span>
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[40px]' : 'w-0'}`} />
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          LANGUAGES
        </span>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-[32px] flex-1">
        {languages.map((lang, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-full transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
          >
            <span className="text-[16px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary">
              {lang.name}
            </span>
            <span className="text-[14px] font-normal text-[var(--color-text-gray)] tracking-[1px] font-primary">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
