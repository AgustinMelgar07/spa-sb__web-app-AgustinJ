import { InquiryModel } from '@/models'
import { InquiryAdapter } from '@/adapters'
import { AppError, publicInstance } from '@/helpers'

const collection = '/consultations'

export const getPending = async () => {
  const response = await publicInstance.get(`${collection}/get/pending`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = InquiryAdapter.getPending.output(response.data)
  return adaptedResponse
}

export const create = async (data: InquiryModel.CreateData) => {
  const adaptedInput = InquiryAdapter.create.input(data)

  const response = await publicInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}

export const answer = async (
  params: { id: number },
  data: InquiryModel.AnswerData
) => {
  const { id } = params
  const adaptedInput = InquiryAdapter.answer.input(data)

  const response = await publicInstance.post(
    `${collection}/${id}/answer`,
    adaptedInput
  )
  if (!response || response instanceof AppError) return response as AppError

  return true
}
