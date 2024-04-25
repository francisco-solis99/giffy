import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { PORT } from './config.js'
import favoritesRoutes from './routes/favorites.routes.js'
import login from './routes/login.js'


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(login)
app.use(favoritesRoutes)

app.listen(PORT, () => {
  console.log('Serve on port', PORT)
})