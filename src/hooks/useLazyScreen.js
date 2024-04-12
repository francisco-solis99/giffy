import {useState, useEffect, useRef} from 'react'

export function useLazyScreen() {
  const [show, setShow] = useState(false)
  const refLazyEl = useRef()

  const handleObserver = (entries, observer) => {
    const entryEl = entries[0]
    if(entryEl.isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(handleObserver, {
      rootMargin: '100px'
    })

    observer.observe(refLazyEl.current)
    return () => observer.disconnect()
  }, [])


  return {isShow: show, fromRef: refLazyEl}
}
