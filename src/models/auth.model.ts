import { UserModel } from '.'

export interface LoginData {
  email: string
  password: string
}

export interface LoginBody {
  email: string
  password: string
}

export interface AuthData {
  user: UserModel.Data
  accessToken: string
}
