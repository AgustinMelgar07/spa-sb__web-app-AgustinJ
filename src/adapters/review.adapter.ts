import { ReviewModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getBetter: {
  output: OutputAdapter<any[], ReviewModel.Data[]>
} = {
  output: response => {
    const convertedResource: ReviewModel.Data[] = response.map(item => ({
      id: item.id,
      stars: item.star,
      comment: item.comment,
    }))

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<ReviewModel.CreateData, ReviewModel.CreateBody>
} = {
  input: data => {
    const convertedResource: ReviewModel.CreateBody = {
      star: data.stars,
      comment: data.comment,
    }
    return convertedResource
  },
}
