import express from 'express'
import UserUseCases from '../../application/user.usecases'
import UserRepositoryMongoDB from '../db/user.repository.mongo'

const router = express.Router()

const userUseCases = new UserUseCases(new UserRepositoryMongoDB())

router.get('/', async (req, res) => {
  try {
    const users = await userUseCases.getTop10()
    res.send(users)
  } catch (error) {
    res.status(500).send({ error: error })
  }
})

router.post('/', async (req, res) => {
  try {
    const userFromRequest = req.body
    const user = await userUseCases.add(userFromRequest)
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' })
  }
})

export default router
