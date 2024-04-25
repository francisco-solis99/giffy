export function loginService({username, password}) {
  const fetchOpts = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    })
  }
  return fetch('http://localhost:4000/api/login', fetchOpts)
    .then(response => {
      if(!response.ok) throw new Error('Bad requirements passed')
      return response.json()
    })
    .then(data => {
      const { token } = data;
      return {
        token
      }
    })
    .catch(() => {
      console.error('Something went wrong')
    })
}