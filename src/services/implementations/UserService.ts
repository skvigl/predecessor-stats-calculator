import { LocalStorageServce } from './LocalStorageService'

interface IUser {
  view: 'full' | 'compact'
}

const lsService = new LocalStorageServce<IUser>('predecessor-user')

class UserService {
  getView = () => {
    const user = lsService.get()

    return user['view'] ?? 'full'
  }

  setView = (view: IUser['view']) => {
    const user = lsService.get()

    const newUser = { ...user, view }

    lsService.set(newUser)
  }
}

export const userService = new UserService();
