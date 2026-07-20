import { useState, useEffect, useRef } from 'react'
import { Linkedin, Download } from 'lucide-react'

export function Hero() {
  const [, setServersOn] = useState(false) // State to trigger re-renders
  const [clickCount, setClickCount] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Use refs to track state values that need to be accessed in scroll handler
  const manuallyOffRef = useRef(false)
  const serversOnRef = useRef(false)

  // Handle scroll to turn servers on (only turns on, never off from scrolling)
  useEffect(() => {
    const handleScroll = () => {
      if (manuallyOffRef.current) return // Don't turn on if manually turned off
      if (serversOnRef.current) return // Already on, don't change anything

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const scrollThreshold = windowHeight * 0.3 // 30% of viewport

      if (scrollY >= scrollThreshold) {
        serversOnRef.current = true
        setServersOn(true)
        setOpacity(1)
      } else {
        // Smooth transition based on scroll position (0 to 30%)
        const progress = scrollY / scrollThreshold
        setOpacity(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle click on background to turn servers off (requires 3 clicks)
  const handleBackgroundClick = () => {
    if (!serversOnRef.current && opacity === 0) return // Only count clicks when servers are on or transitioning

    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount >= 3) {
      manuallyOffRef.current = true
      serversOnRef.current = false
      setServersOn(false)
      setOpacity(0)
      setClickCount(0)
    }
  }


  return (
    <section
      ref={sectionRef}
      className="relative z-10 h-[900px] w-full bg-[var(--color-bg-dark)] overflow-hidden"
    >
      {/* Background Images Container - Clickable Area */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={handleBackgroundClick}
      >
        {/* Servers OFF (base layer) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/servers-off.png)',
          }}
        />

        {/* Servers ON (overlay with opacity transition) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: 'url(/images/servers-on.png)',
            opacity: opacity,
          }}
        />
      </div>

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #0D0D0D 0%, transparent 40%)'
        }}
      />

      {/* Bottom gradient overlay - smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, #0D0D0D 0%, #0D0D0D 20%, transparent 100%)'
        }}
      />

      {/* Navigation - Fade in from top */}
      <nav className="relative z-10 flex items-center justify-between h-[80px] px-[80px] w-full animate-initial animate-fade-in-down delay-300">
        <span className="text-[24px] font-extrabold text-[var(--color-text-white)] tracking-[8px] font-primary">
          IP
        </span>
        <div className="flex items-center gap-[48px]">
          <a href="#about" className="text-[11px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary link-underline hover:text-[var(--color-primary)] transition-colors">
            ABOUT
          </a>
          <a href="#skills" className="text-[11px] font-semibold text-[#AAAAAA] tracking-[3px] font-primary link-underline hover:text-[var(--color-text-white)] transition-colors">
            SKILLS
          </a>
          <a href="#experience" className="text-[11px] font-semibold text-[#AAAAAA] tracking-[3px] font-primary link-underline hover:text-[var(--color-text-white)] transition-colors">
            EXPERIENCE
          </a>
          <a href="#projects" className="text-[11px] font-semibold text-[#AAAAAA] tracking-[3px] font-primary link-underline hover:text-[var(--color-text-white)] transition-colors">
            PROJECTS
          </a>
          <a href="#contact" className="text-[11px] font-semibold text-[#AAAAAA] tracking-[3px] font-primary link-underline hover:text-[var(--color-text-white)] transition-colors">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute left-[80px] top-[280px] flex flex-col gap-[40px] w-[800px] z-10">
        {/* Status - Fade in from left */}
        <div className="flex items-center gap-[12px] animate-initial animate-fade-in-left delay-500">
          <div className="w-[40px] h-[1px] bg-[var(--color-primary)] animate-initial animate-expand-width-large delay-600" />
          <span className="text-[10px] font-bold text-[var(--color-primary)] tracking-[4px] font-primary">
            CREATING OPPORTUNITIES
          </span>
        </div>

        {/* Name - Staggered fade in from bottom */}
        <div className="flex flex-col">
          <h1 className="text-[120px] font-extrabold text-[var(--color-text-white)] tracking-[20px] leading-none font-primary animate-initial animate-fade-in-up delay-700">
            ILLIA
          </h1>
          <h1 className="text-[120px] font-extrabold text-[var(--color-text-white)] tracking-[20px] leading-none font-primary animate-initial animate-fade-in-up delay-900">
            PASTUSHOK
          </h1>
        </div>

        {/* Title - Fade in */}
        <p className="text-[16px] font-medium text-[#CCCCCC] tracking-[2px] font-primary animate-initial animate-fade-in delay-1100">
          Machine Learning Engineer &amp; AI Team Lead
        </p>

        {/* Divider - Expand width */}
        <div className="w-[120px] h-[2px] bg-[var(--color-primary)] animate-initial animate-fade-in delay-1200" />

        {/* Tagline - Fade in */}
        <p className="text-[13px] font-medium text-[#BBBBBB] tracking-[1px] font-primary animate-initial animate-fade-in delay-1300">
          Building scalable AI/ML systems from scratch to production
        </p>

        {/* CTAs - Scale in */}
        <div className="flex items-center gap-[24px] animate-initial animate-scale-in delay-1400">
          <a
            href="https://www.linkedin.com/in/illia-pastushok-78a44b250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[12px] bg-[var(--color-primary)] px-[40px] py-[16px] btn-hover hover-glow"
          >
            <Linkedin className="w-[18px] h-[18px] text-[var(--color-text-white)]" />
            <span className="text-[11px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary">
              LINKEDIN
            </span>
          </a>
          <a
            href="/Illia_Pastushok_AIML_Engineer_CV.pdf"
            download="Illia_Pastushok_AIML_Engineer_CV.pdf"
            className="flex items-center gap-[12px] border border-[var(--color-border-light)] px-[40px] py-[16px] btn-hover hover:border-[var(--color-text-muted)] transition-colors"
          >
            <Download className="w-[18px] h-[18px] text-[var(--color-text-white)]" />
            <span className="text-[11px] font-semibold text-[var(--color-text-white)] tracking-[3px] font-primary">
              DOWNLOAD CV
            </span>
          </a>
        </div>
      </div>

      {/* Side Stats - Staggered fade in from right */}
      <div className="absolute right-[80px] top-[300px] flex flex-col gap-[32px] w-[280px] border-l-2 border-[var(--color-primary)] pl-[32px] py-[32px] z-10">
        <div className="flex flex-col gap-[8px] animate-initial animate-fade-in-right delay-1000">
          <span className="text-[48px] font-bold text-[var(--color-text-white)] tracking-[-2px] font-primary stat-hover cursor-default">
            3+
          </span>
          <span className="text-[9px] font-semibold text-[#BBBBBB] tracking-[3px] font-primary">
            YEARS EXPERIENCE
          </span>
        </div>
        <div className="flex flex-col gap-[8px] animate-initial animate-fade-in-right delay-1100">
          <span className="text-[48px] font-bold text-[var(--color-text-white)] tracking-[-2px] font-primary stat-hover cursor-default">
            $800K
          </span>
          <span className="text-[9px] font-semibold text-[#BBBBBB] tracking-[3px] font-primary">
            ANNUAL SAVINGS
          </span>
        </div>
        <div className="flex flex-col gap-[8px] animate-initial animate-fade-in-right delay-1200">
          <span className="text-[48px] font-bold text-[var(--color-primary)] tracking-[-2px] font-primary stat-hover cursor-default">
            10+
          </span>
          <span className="text-[9px] font-semibold text-[#BBBBBB] tracking-[3px] font-primary">
            PRODUCTION PROJECTS
          </span>
        </div>
      </div>

    </section>
  )
}
