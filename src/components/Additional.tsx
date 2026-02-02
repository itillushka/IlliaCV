import { Users, Presentation, Globe } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const additionalItems = [
  {
    Icon: Users,
    text: 'Comfortable working in Agile/Scrum environments',
  },
  {
    Icon: Presentation,
    text: 'Experienced in presenting technical solutions to business stakeholders',
  },
  {
    Icon: Globe,
    text: 'Eligible to work in the EU',
  },
]

export function Additional() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative z-10 flex gap-[120px] bg-[rgba(17,17,17,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Left Label */}
      <div className={`flex flex-col gap-[16px] w-[300px] shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="flex items-center gap-[12px]">
          <span className="text-[11px] font-bold text-[var(--color-primary)] tracking-[3px] font-primary">
            08
          </span>
          <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[40px]' : 'w-0'}`} />
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
          ADDITIONAL
        </span>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-[24px] flex-1">
        {additionalItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-[16px] transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
          >
            <item.Icon className="w-[20px] h-[20px] text-[var(--color-primary)] icon-hover" />
            <span className="text-[15px] font-normal text-[var(--color-text-bright)] tracking-[1px] font-primary">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
