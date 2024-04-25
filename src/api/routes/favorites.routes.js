import { Router } from 'express'

const router = Router();

router.get('/favorites', (req, res) => {
  res.status(200).json({message: 'Getting favs'})
})

router.post('/favorites', (req, res) => {
  res.send('creating favs')
})

router.delete('/favorites:id', (req, res) => {
  const { id } = req.params
  console.log(id)
  res.send('deleting favs')
})

export default router;