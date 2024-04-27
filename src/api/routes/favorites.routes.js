import { Router } from 'express'
import { favorites } from '../favorites.js';
const router = Router();

router.get('/api/favorites', (req, res) => {
  const { username } = req;
  const favsByUsername = favorites[username]
  if(!favsByUsername) {
    res.status(400).json({message: 'No favorites found by username'})
  }
  res.status(200).json({favorites: favsByUsername})
})

router.post('/api/favorites', (req, res) => {
  const { username } = req;
  const { id } = req.body;
  const favsByUsername = favorites[username]
  if(!favsByUsername) {
    res.status(400).json({message: 'No favorites found by username'})
  }
  const alreadyExist = favsByUsername.some((favId) => favId === id)
  if (!alreadyExist) {
    favsByUsername.push(id)
  }

  favorites[username] = favsByUsername

  console.log({
    alreadyExist,
    favs: favsByUsername,
    username,
  })

  res.status(201).json({favorites: favsByUsername})
})

router.delete('/api/favorites:id', (req, res) => {
  const { username } = req
  const { id } = req.params

  if(!id) {
    res.status(400).json({message: 'Favorite id required'})
  }

  const favsByUsername = favorites[username]
  if(!favsByUsername) {
    res.status(400).json({message: 'No favorites found by username'})
  }
  const favsByUsernameFiltered = favsByUsername[username].filter((favId) => favId !== id)
  favorites[username] = favsByUsernameFiltered

  res.status(200).json({favorites: favsByUsernameFiltered})
})

export default router;