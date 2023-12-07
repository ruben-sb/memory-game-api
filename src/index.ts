import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 3000

const originURL = process.env.URL_CORS
const options: cors.CorsOptions = {
  origin: originURL,
  optionsSuccessStatus: 200,
}

app.use(cors(options))
app.use(express.json())

import userRouter from './user/infrastructure/rest/user.router'

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})
