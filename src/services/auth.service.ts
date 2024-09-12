import { AuthModel, UserModel } from '@/models'
import { AuthAdapter } from '@/adapters'
import { AppError, publicInstance } from '@/helpers'

const collection = '/auth'

export const login = async (data: AuthModel.LoginData) => {
  const adaptedInput = AuthAdapter.login.input(data)

  const response = await publicInstance.post(
    `${collection}/login`,
    adaptedInput
  )

  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = AuthAdapter.login.output(response.data)
  return adaptedResponse
}

export const register = async (data: UserModel.CreateClientData) => {
  const adaptedInput = AuthAdapter.register.input(data)

  const response = await publicInstance.post(
    `${collection}/register`,
    adaptedInput
  )

  if (!response || response instanceof AppError) return response as AppError

  return true
}
