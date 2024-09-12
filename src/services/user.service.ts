import { UserAdapter } from '@/adapters'
import { AppError, privateInstance } from '@/helpers'

const collection = '/users'

export const getOne = async (params: { id: number }) => {
  const { id } = params

  const response = await privateInstance.get(`${collection}/${id}`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = UserAdapter.getOne.output(response.data)
  return adaptedResponse
}
