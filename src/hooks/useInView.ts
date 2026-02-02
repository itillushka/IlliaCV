import { useRef, useState, RefObject, useLayoutEffect } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  // Start with false, but we'll set to true quickly if observer doesn't work
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<T>(null!)
  const observerSet = useRef(false)

  // Use useLayoutEffect to run synchronously after DOM mutations
  useLayoutEffect(() => {
    const element = ref.current

    // Fallback timeout - if observer hasn't triggered in 500ms, make visible
    const fallbackTimeout = setTimeout(() => {
      if (!observerSet.current) {
        setIsInView(true)
      }
    }, 500)

    if (!element) {
      return () => clearTimeout(fallbackTimeout)
    }

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsInView(true)
      observerSet.current = true
      return () => clearTimeout(fallbackTimeout)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        observerSet.current = true
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      clearTimeout(fallbackTimeout)
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isInView]
}
