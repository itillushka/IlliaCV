import { Mail, Download, Github, Linkedin } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export function Footer() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative z-10 flex flex-col items-center gap-[80px] bg-[rgba(13,13,13,0.75)] px-[80px] py-[120px] w-full"
    >
      {/* CTA Section */}
      <div className="flex flex-col items-center gap-[32px]">
        <h2 className={`text-[48px] font-extrabold text-[var(--color-text-white)] tracking-[4px] text-center font-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          LET'S BUILD TOGETHER
        </h2>
        <p className={`text-[14px] font-normal text-[var(--color-text-muted)] tracking-[2px] text-center font-primary transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Open new opportunities in AI/ML engineering
        </p>
        {/* CTA Buttons */}
        <div className={`flex items-center gap-[24px] transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <a
            href="mailto:il.pastushok@gmail.com"
            className="flex items-center gap-[12px] bg-[var(--color-primary)] px-[60px] py-[20px] btn-hover hover-glow"
          >
            <Mail className="w-[20px] h-[20px] text-[var(--color-text-white)]" />
            <span className="text-[12px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary">
              GET IN TOUCH
            </span>
          </a>
          <a
            href="/Illia_Pastushok_AIML_Engineer_CV.pdf"
            download="Illia_Pastushok_AIML_Engineer_CV.pdf"
            className="flex items-center gap-[12px] border border-[var(--color-border-light)] px-[60px] py-[20px] btn-hover hover:border-[var(--color-text-muted)] transition-colors"
          >
            <Download className="w-[20px] h-[20px] text-[var(--color-text-white)]" />
            <span className="text-[12px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary">
              DOWNLOAD CV
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className={`w-full h-[1px] bg-[var(--color-bg-card)] transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`} />

      {/* Bottom Section */}
      <div className={`flex items-center justify-between w-full transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-[10px] font-medium text-[var(--color-text-dark)] tracking-[3px] font-primary">
          © 2026 ILLIA PASTUSHOK
        </span>
        <div className="flex items-center gap-[32px]">
          <a
            href="https://github.com/itilushka-red"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover"
          >
            <Github className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
          </a>
          <a
            href="https://www.linkedin.com/in/illia-pastushok-78a44b250/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover"
          >
            <Linkedin className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
          </a>
          <a
            href="mailto:il.pastushok@gmail.com"
            className="icon-hover"
          >
            <Mail className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
