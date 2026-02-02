import { Factory, Pill, ChartLine, TrendingUp, Zap, Timer, Eye, Users, Network } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    badge: 'MANUFACTURING • AI • CV',
    badgeColor: 'var(--color-primary)',
    title: 'AI Quality Control Engine',
    description: 'Enterprise CV system monitoring 50+ machines processing 10,000+ units daily. Achieved 92% defect detection accuracy, reducing manual inspection by 60%.',
    stat: '$800K ANNUAL SAVINGS',
    StatIcon: TrendingUp,
    tech: 'Python • TensorFlow • OpenCV • AWS',
    Icon: Factory,
  },
  {
    badge: 'PHARMACEUTICAL • LLM • RAG',
    badgeColor: 'var(--color-cyan)',
    title: 'AI Recommendation & Decision Support',
    description: 'LLM-powered recommendation engine analyzing 10,000+ medications and side-effect profiles. Processes 500+ daily queries with <2s latency.',
    stat: '500+ DAILY QUERIES',
    StatIcon: Zap,
    tech: 'GPT-5 • Pinecone • Neo4j • FastAPI • AWS',
    Icon: Pill,
  },
]

const wideProject = {
  badge: 'FINTECH • AUTOMATION • AI',
  badgeColor: 'var(--color-green)',
  title: 'Investment Due Diligence Platform',
  description: 'Automated company intelligence aggregation using AI and multi-source data pipelines. Reduced analysis time from 5 hours to 5 minutes per company.',
  stat: '60X FASTER ANALYSIS',
  StatIcon: Timer,
  tech: 'Python • LLMs • Web Scraping • PostgreSQL • AWS Lambda',
  Icon: ChartLine,
}

const threeRowProjects = [
  {
    badge: 'HEALTHCARE • AI • CV',
    badgeColor: '#A855F7', // Purple
    title: 'Pediatric Myopia Treatment Platform',
    description: 'AI-driven OCT analysis system for personalized myopia treatment in children, estimating peripheral eye curvature for tailored therapeutic interventions. Processed 2,000+ OCT scans with 94% accuracy.',
    stat: '94% ACCURACY',
    StatIcon: Eye,
    tech: 'Python • TensorFlow • OpenCV • Medical Imaging • PostgreSQL',
    Icon: Eye,
  },
  {
    badge: 'HR • AI • NLP',
    badgeColor: '#F59E0B', // Amber
    title: 'Political Candidate Profiling Platform',
    description: 'HR platform using multi-stage AI assessment to evaluate candidate alignment with party values. Reduced screening time by 70% with 78% predictive accuracy vs. traditional interviews.',
    stat: '70% TIME SAVED',
    StatIcon: Timer,
    tech: 'Python • GPT-4 • NLP • Django • React • PostgreSQL',
    Icon: Users,
  },
  {
    badge: 'B2B • GRAPH • AI',
    badgeColor: '#3B82F6', // Blue
    title: 'Graph-Based Business Matchmaking',
    description: 'B2B platform using graph database to connect businesses with operational challenges to specialized solution providers. Mapped 5,000+ businesses achieving 82% match success rate.',
    stat: '$2M+ DEAL VALUE',
    StatIcon: TrendingUp,
    tech: 'Python • Neo4j • VoyageAI • FastAPI • React • Cypher',
    Icon: Network,
  },
]

export function Projects() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="projects"
      className="relative z-10 flex flex-col gap-[60px] bg-[rgba(17,17,17,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Header */}
      <div className={`flex items-end justify-between w-full transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px]">
            <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
            <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
              04
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
            FEATURED PROJECTS
          </span>
        </div>
        <span className="text-[11px] font-medium text-[var(--color-text-darker)] tracking-[3px] font-primary">
          6 KEY PROJECTS
        </span>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-[24px] w-full">
        {/* First Row - Two Cards */}
        <div className="flex gap-[24px] w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 bg-[var(--color-bg-dark)] border border-[var(--color-border)] card-hover transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${300 + index * 150}ms` : '0ms' }}
            >
              {/* Icon Area */}
              <div className="flex items-center justify-center h-[180px] bg-[var(--color-bg-card)]">
                <project.Icon
                  className="w-[64px] h-[64px] icon-hover"
                  style={{ color: project.badgeColor }}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-[16px] p-[32px]">
                <span
                  className="text-[9px] font-semibold tracking-[3px] font-primary"
                  style={{ color: project.badgeColor }}
                >
                  {project.badge}
                </span>
                <h3 className="text-[20px] font-bold text-[var(--color-text-white)] tracking-[-0.5px] font-primary">
                  {project.title}
                </h3>
                <p className="text-[13px] font-normal text-[var(--color-text-light)] leading-[1.6] font-primary">
                  {project.description}
                </p>
                <div className="flex items-center gap-[8px]">
                  <project.StatIcon
                    className="w-[14px] h-[14px]"
                    style={{ color: project.badgeColor }}
                  />
                  <span className="text-[11px] font-semibold text-[var(--color-text-white)] tracking-[2px] font-primary">
                    {project.stat}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-[var(--color-text-dark)] tracking-[1px] font-primary">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Wide Card */}
        <div
          className={`flex w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] card-hover transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon Area */}
          <div className="flex items-center justify-center w-[400px] shrink-0 bg-[var(--color-bg-card)]">
            <wideProject.Icon
              className="w-[64px] h-[64px] icon-hover"
              style={{ color: wideProject.badgeColor }}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-[16px] p-[32px] justify-center flex-1">
            <span
              className="text-[9px] font-semibold tracking-[3px] font-primary"
              style={{ color: wideProject.badgeColor }}
            >
              {wideProject.badge}
            </span>
            <h3 className="text-[20px] font-bold text-[var(--color-text-white)] tracking-[-0.5px] font-primary">
              {wideProject.title}
            </h3>
            <p className="text-[13px] font-normal text-[var(--color-text-light)] leading-[1.6] font-primary">
              {wideProject.description}
            </p>
            <div className="flex items-center gap-[8px]">
              <wideProject.StatIcon
                className="w-[14px] h-[14px]"
                style={{ color: wideProject.badgeColor }}
              />
              <span className="text-[11px] font-semibold text-[var(--color-text-white)] tracking-[2px] font-primary">
                {wideProject.stat}
              </span>
            </div>
            <span className="text-[10px] font-medium text-[var(--color-text-dark)] tracking-[1px] font-primary">
              {wideProject.tech}
            </span>
          </div>
        </div>

        {/* Third Row - Three Cards */}
        <div className="flex gap-[24px] w-full">
          {threeRowProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 bg-[var(--color-bg-dark)] border border-[var(--color-border)] card-hover transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${700 + index * 150}ms` : '0ms' }}
            >
              {/* Icon Area */}
              <div className="flex items-center justify-center h-[140px] bg-[var(--color-bg-card)]">
                <project.Icon
                  className="w-[48px] h-[48px] icon-hover"
                  style={{ color: project.badgeColor }}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-[12px] p-[24px]">
                <span
                  className="text-[9px] font-semibold tracking-[3px] font-primary"
                  style={{ color: project.badgeColor }}
                >
                  {project.badge}
                </span>
                <h3 className="text-[18px] font-bold text-[var(--color-text-white)] tracking-[-0.5px] font-primary leading-[1.3]">
                  {project.title}
                </h3>
                <p className="text-[12px] font-normal text-[var(--color-text-light)] leading-[1.6] font-primary">
                  {project.description}
                </p>
                <div className="flex items-center gap-[8px]">
                  <project.StatIcon
                    className="w-[12px] h-[12px]"
                    style={{ color: project.badgeColor }}
                  />
                  <span className="text-[10px] font-semibold text-[var(--color-text-white)] tracking-[2px] font-primary">
                    {project.stat}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-[var(--color-text-dark)] tracking-[1px] font-primary">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
