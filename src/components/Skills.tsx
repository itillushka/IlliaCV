import { useInView } from '../hooks/useInView'

const skills = [
  {
    num: '01',
    title: 'Programming\n& Data',
    tags: 'Python • SQL • Pandas • NumPy • Seaborn • Scikit-Learn • Matplotlib • Polars',
    highlight: false,
  },
  {
    num: '02',
    title: 'Machine\nLearning & AI',
    tags: 'PyTorch • TensorFlow • OpenCV • YOLO • Hugging Face • Transformers • Ultralytics',
    highlight: false,
  },
  {
    num: '03',
    title: 'LLMs &\nGenAI',
    tags: 'RAG • LangChain • LlamaIndex • LangGraph • OpenAI API • Claude API • RRF',
    highlight: true,
  },
  {
    num: '04',
    title: 'Cloud &\nMLOps',
    tags: 'AWS • Docker • Kubernetes • GitHub Actions • Helm • MLflow • W&B • Airflow',
    highlight: false,
  },
  {
    num: '05',
    title: 'Databases',
    tags: 'PostgreSQL • MongoDB • Neo4j • Snowflake • Databricks • Qdrant • Pinecone • Redis • Elasticsearch',
    highlight: false,
  },
  {
    num: '06',
    title: 'Backend /\nFullstack',
    tags: 'FastAPI • Django • REST APIs • GraphQL • React • Vue.js • WebSockets • Celery',
    highlight: false,
  },
]

export function Skills() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="skills"
      className="relative z-10 flex flex-col gap-[60px] bg-[rgba(17,17,17,0.75)] px-[80px] py-[100px] w-full"
    >
      {/* Header */}
      <div className={`flex items-end justify-between w-full transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px]">
            <div className={`h-[1px] bg-[var(--color-primary)] transition-all duration-500 delay-200 ${isInView ? 'w-[24px]' : 'w-0'}`} />
            <span className="text-[11px] font-semibold text-[var(--color-primary)] tracking-[2px] font-primary">
              02
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-[4px] font-primary">
            TECHNICAL EXPERTISE
          </span>
        </div>
        <span className="text-[11px] font-medium text-[var(--color-text-darker)] tracking-[3px] font-primary">
          6 CORE AREAS
        </span>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-[1px] w-full">
        {skills.map((skill, index) => (
          <div
            key={skill.num}
            className={`flex flex-col gap-[24px] bg-[var(--color-bg-dark)] p-[32px] pt-[40px] w-[calc(33.333%-1px)] min-w-[200px] hover-lift card-hover transition-all duration-700 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
          >
            <span
              className={`text-[11px] font-medium tracking-[2px] font-primary ${
                skill.highlight ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-darker)]'
              }`}
            >
              {skill.num}
            </span>
            <h3 className="text-[18px] font-semibold text-[var(--color-text-white)] leading-[1.3] font-primary whitespace-pre-line">
              {skill.title}
            </h3>
            <p className="text-[12px] font-normal text-[var(--color-text-muted)] leading-[1.6] font-primary w-[160px]">
              {skill.tags}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
