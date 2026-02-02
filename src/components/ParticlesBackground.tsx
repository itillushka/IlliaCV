import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = {
    fullScreen: {
      enable: false,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      color: {
        value: ['#D5001C', '#8B0000', '#FF3333'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
      },
      size: {
        value: { min: 1, max: 4 },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#D5001C',
        opacity: 0.15,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.4,
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  }

  if (!init) {
    return null
  }

  return (
    <div className="absolute inset-0 top-[900px] z-[1] pointer-events-none">
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  )
}
