import UserRepository from './UserRepository'

const repositories = {
  users: UserRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}