import { useEffect, useState } from "react"
import { useGifs } from "@hooks/useGifs"
import getSingleGif from "@services/getSingleGif"

export function useSingleGif({ id = null }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [singleGif, setSingleGif] = useState(gifFromCache ?? null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if(singleGif) {
      setStatus('done')
    }
    else{
      // A fallbaclk if the gif is not in the gifs list, calll the API service to get the single gif
      getSingleGif({id})
      .then(gif => {
        setSingleGif(gif)
        setStatus('done')
      })
      .catch(() => {
        setStatus('error')
      })
    }
  }, [id, singleGif])

  return { gif: singleGif, status }
}
