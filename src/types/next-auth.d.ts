import { UserModel } from '@/models'
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    name: string
    lastName: string
    role: UserModel.Role
    profilePhotoUrl: string
    accessToken: string
  }

  interface Session {
    user?: Omit<User, 'accessToken'>
    accessToken?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: Omit<User, 'accessToken'>
    accessToken?: string
  }
}
