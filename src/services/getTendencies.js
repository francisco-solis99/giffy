import { API_KEY, API_URL } from './setings'


const fromApiResponseToTrendingSearches = (apiResponse) => {
  const { data = [] } = apiResponse
  return data;
}

export default function getTrendingSearches() {
  const urlAPI = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(urlAPI)
    .then(response => response.json())
    .then(fromApiResponseToTrendingSearches)
}