import { InquiryModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getPending: {
  output: OutputAdapter<any[], InquiryModel.Data[]>
} = {
  output: response => {
    const convertedResource: InquiryModel.Data[] = response.map(item => ({
      id: item.id,
      name: item.name,
      lastName: item.lastname,
      phone: item.phone,
      email: item.email,
      desc: item.description,
      createdAt: item.created_at,
    }))

    return convertedResource
  },
}

export const answer: {
  input: InputAdapter<any, InquiryModel.AnswerData>
} = {
  input: response => {
    const convertedResource: InquiryModel.AnswerData = {
      answer: response.answer,
    }

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<InquiryModel.CreateData, InquiryModel.CreateBody>
} = {
  input: data => {
    const convertedResource: InquiryModel.CreateBody = {
      name: data.name,
      lastname: data.lastName,
      phone: data.phone,
      email: data.email,
      description: data.desc,
    }
    return convertedResource
  },
}
