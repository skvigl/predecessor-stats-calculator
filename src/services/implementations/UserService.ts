import { LocalStorageServce } from './LocalStorageService'

interface IUser {
  view: 'full' | 'compact'
  activeBuild: string
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

  setActiveBuild = (activeBuild: string) => {
    const user = lsService.get()

    const newUser = { ...user, activeBuild }

    lsService.set(newUser)
  }

  getActvieBuild = () => {
    const user = lsService.get()

    return user['activeBuild'] ?? null
  }
}

export const userService = new UserService()
