'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './TypewriterName.module.css'

export default function TypewriterName() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const fullText = 'Keith Katale'
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (!entry.isIntersecting && text.length > 0) {
          setIsDeleting(true)
        } else if (entry.isIntersecting && text.length === 0) {
          setIsDeleting(false)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [text.length])

  useEffect(() => {
    let timeout

    if (isVisible && !isDeleting && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1))
      }, 50)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, isVisible])

  return (
    <h1 ref={elementRef} className={styles.title}>
      <span className={styles.prompt}>$</span> {text}
      <span className={styles.cursor}>_</span>
    </h1>
  )
}
