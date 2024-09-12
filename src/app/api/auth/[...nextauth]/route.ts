import { AuthService } from '@/services'
import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AppError } from '@/helpers'

const secret = process.env.NEXTAUTH_SECRET

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async credentials => {
        if (!credentials) return null

        const response = await AuthService.login(credentials)

        if (!response || response instanceof AppError) return null

        const { user, accessToken } = response
        const { name, lastName, role, profilePhotoUrl } = user

        return { name, lastName, role, profilePhotoUrl, accessToken } as any
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const { accessToken, ...rest } = user

        token = {
          user: { ...rest },
          accessToken,
        } as any
      }

      return token
    },

    session: async ({ session, token }) => {
      if (token) {
        const { accessToken, ...rest } = token

        session = {
          ...rest,
          accessToken,
        } as any
      }

      return session
    },
  },
  secret,
  session: { strategy: 'jwt' },
  jwt: { secret },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
