import { ReviewAdapter } from '@/adapters'
import { ReviewModel } from '@/models'
import { AppError, publicInstance } from '@/helpers'

const collection = '/reviews'

export const getTheBest = async () => {
  const response = await publicInstance.get(`${collection}/better`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = ReviewAdapter.getBetter.output(response.data)
  return adaptedResponse
}

export const create = async (data: ReviewModel.CreateData) => {
  const adaptedInput = ReviewAdapter.create.input(data)

  const response = await publicInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}
