import { UserModel } from '@/models'
import { OutputAdapter } from '@/helpers'

export const getOne: {
  output: OutputAdapter<any, UserModel.Data>
} = {
  output: response => {
    const convertedResource: UserModel.Data = {
      id: response.id,
      name: response.name,
      lastName: response.lastname,
      phone: response.phone,
      email: response.email,
      role: response.role,
      profilePhotoUrl: response.profile_photo_url,
      createdAt: response.created_at,
    }

    return convertedResource
  },
}
