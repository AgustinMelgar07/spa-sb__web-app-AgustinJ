import { NewsModel } from '@/models'
import { OutputAdapter } from '@/helpers'

export const getAll: {
  output: OutputAdapter<any[], NewsModel.Data[]>
} = {
  output: response => {
    const convertedResource: NewsModel.Data[] = response.map(item => ({
      id: item.id,
      title: item.title,
      content: item.entry,
      imgUrl: item.url_img,
      createdAt: item.created_at,
    }))

    return convertedResource
  },
}
