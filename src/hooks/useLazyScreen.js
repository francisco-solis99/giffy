import {useState, useEffect, useRef} from 'react'

export function useLazyScreen({distance = '100px', externalRef, once = true} = {}) {
  const [show, setShow] = useState(false)
  const refLazyEl = useRef()



  useEffect(() => {
    const handleObserver = (entries, observer) => {
      const entryEl = entries[0]
      if(entryEl.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        if(!once) setShow(false)
      }
    }

    const observer = new window.IntersectionObserver(handleObserver, {
      rootMargin: distance
    })
    const elementToObserve = externalRef ? externalRef.current : refLazyEl.current

    if(elementToObserve) {
      observer.observe(elementToObserve)
    }
    return () => observer.disconnect()
  }, [distance, externalRef, once])


  return {isShow: show, fromRef: refLazyEl}
}
