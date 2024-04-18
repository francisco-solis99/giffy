import { API_KEY, API_URL } from './setings'


const fromApiResponseToGifs = (apiResponse) => {
  const { data  } = apiResponse
  const { id, title, images } = data;
  const { url } = images.fixed_height;
  return {
    id, title, url
  }
}

export default function getSingleGif({ id }) {
  const urlAPI = `${API_URL}/gifs/${id}?api_key=${API_KEY}`
  return fetch(urlAPI)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}