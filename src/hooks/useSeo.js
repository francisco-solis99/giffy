import { useEffect, useRef} from "react"

export function useSeo({ title, description }) {
  const prevTitleRef = useRef(document.title)
  const prevMetaDescriptionRef = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
  // For title
  useEffect(() => {
    const prevTitle = prevTitleRef.current;
    if(title) {
      document.title = `${title} | Giffy`
    }

    return () => document.title = prevTitle
  }, [title])

  // For description tag
  useEffect(() => {
    const prevMetaDescription = prevMetaDescriptionRef.current
    const metaDescription = document.querySelector('meta[name="description"]')

    if(description) {
      metaDescription.setAttribute('content', description)
    }

    return () => metaDescription.setAttribute('content', prevMetaDescription)
  })
}
