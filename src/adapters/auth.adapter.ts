import { AuthModel, UserModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const login: {
  input: InputAdapter<AuthModel.LoginData, AuthModel.LoginBody>
  output: OutputAdapter<any, AuthModel.AuthData>
} = {
  input: data => {
    const convertedResource: AuthModel.LoginBody = {
      email: data.email,
      password: data.password,
    }

    return convertedResource
  },
  output: response => {
    const { user } = response

    const convertedResource: AuthModel.AuthData = {
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastname,
        phone: user.phone,
        email: user.email,
        role: user.role,
        profilePhotoUrl: user.profile_photo_url,
        createdAt: user.created_at,
      },
      accessToken: response.accessToken,
    }

    return convertedResource
  },
}

export const register: {
  input: InputAdapter<UserModel.CreateClientData, UserModel.CreateClientBody>
} = {
  input: data => {
    const convertedResource: UserModel.CreateClientBody = {
      name: data.name,
      lastname: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
    }

    return convertedResource
  },
}
