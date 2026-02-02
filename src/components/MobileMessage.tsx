import { Monitor } from 'lucide-react'

export function MobileMessage() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[var(--color-bg-dark)] px-8 md:hidden">
      <Monitor className="w-16 h-16 text-[var(--color-primary)]" />
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-[var(--color-text-white)] tracking-[4px] font-primary">
          ILLIA PASTUSHOK
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] tracking-[2px] font-primary">
          Machine Learning Engineer & AI Tech Lead
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-[var(--color-text-dark)] tracking-[3px] font-primary uppercase">
          Best viewed on desktop
        </p>
        <div className="w-12 h-[2px] bg-[var(--color-primary)]" />
      </div>
      <div className="flex flex-col items-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/illia-pastushok-78a44b250/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[var(--color-primary)] px-8 py-4"
        >
          <span className="text-xs font-semibold text-[var(--color-text-white)] tracking-[2px] font-primary">
            LINKEDIN
          </span>
        </a>
        <a
          href="/Illia_Pastushok_AIML_Engineer_CV.pdf"
          download="Illia_Pastushok_AIML_Engineer_CV.pdf"
          className="flex items-center gap-3 border border-[var(--color-border-light)] px-8 py-4"
        >
          <span className="text-xs font-semibold text-[var(--color-text-white)] tracking-[2px] font-primary">
            DOWNLOAD CV
          </span>
        </a>
      </div>
    </div>
  )
}
