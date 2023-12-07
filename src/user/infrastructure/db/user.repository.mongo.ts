import User from '../../domain/user'
import UserRepository from '../../domain/user.repository'
import { collections } from '../../../context/mongo.connector'

export default class UserRepositoryMongoDB implements UserRepository {
  async getTop10(): Promise<User[] | undefined> {
    try {
      const usersFromDB = await collections.users
        .find()
        .sort({ time: 1 })
        .limit(10)
        .toArray()
      const users: User[] = usersFromDB.map((user) => {
        const aux: User = {
          username: user.username,
          time: user.time,
        }
        return aux
      })
      return users
    } catch (error) {
      return undefined
    }
  }

  async add(user: User): Promise<User | undefined> {
    try {
      /*  const query = { username: user.username, time: { $lt: user.time } }
      const update = { $set: { username: user.username, time: user.time } }
      const options = { upsert: true } */
      const userInsertResult = await collections.users.insertOne(user)
      console.log(userInsertResult)
      const userResponse: User = {
        username: user.username,
        time: user.time,
      }
      console.log(userResponse)
      return userResponse
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}
