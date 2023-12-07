import User from '../domain/user'
import UserRepository from '../domain/user.repository'

export default class UserUseCases {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async getTop10(): Promise<User[] | undefined> {
    return await this.userRepository.getTop10()
  }

  async add(user: User): Promise<User | undefined> {
    return await this.userRepository.add(user)
  }
}
