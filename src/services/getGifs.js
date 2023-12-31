import { API_KEY, API_URL } from './setings'


const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  if(Array.isArray(data)) {
    const dataGifs = data.map(item => {
      const { id, title, images } = item;
      const { url } = images.fixed_height;
      return {
        id, title, url
      }
    })
    return dataGifs
  }
  return [];
}

export default function getGifs({ keyword }) {

  const urlAPI = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  return fetch(urlAPI)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}