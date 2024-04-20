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

export default function getGifs({ keyword, rating = 'g', limit= 10, page = 0 }) {
  const urlAPI = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=${rating}&lang=en`
  return fetch(urlAPI)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}