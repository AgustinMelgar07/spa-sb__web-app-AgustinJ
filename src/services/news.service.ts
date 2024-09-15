import { NewsAdapter } from '@/adapters'
import { AppError, publicInstance } from '@/helpers'

const collection = '/notices'

export const getAll = async () => {
  const response = await publicInstance.get(collection)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = NewsAdapter.getAll.output(response.data)
  return adaptedResponse
}
