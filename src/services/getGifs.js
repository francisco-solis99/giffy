import {API_KEY} from './setings'

export default function getGifs({keyword}){

  const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  return fetch(urlAPI)
  .then(response => response.json())
  .then(({data}) => {
    const dataGifs = data.map(item => {
      const {id, title, images} = item;
      const {url} = images.fixed_height;
      return {
        id, title, url
      }
    })
    return dataGifs
  })
}