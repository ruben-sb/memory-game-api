import User from './user'

export default interface UserRepository {
  getTop10(): Promise<User[] | undefined>
  add(user: User): Promise<User | undefined>
}
