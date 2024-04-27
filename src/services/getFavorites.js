export function getFavoritesService({ jwt }) {
  const fetchOpts = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": jwt
    },
  }
  return fetch('http://localhost:4000/api/favorites', fetchOpts)
    .then(response => {
      if(!response.ok) throw new Error('Bad requirements passed')
      return response.json()
    })
    .then(data => {
      const { favorites } = data;
      return {
        favorites
      }
    })
    .catch(() => {
      console.error('Something went wrong')
    })
}