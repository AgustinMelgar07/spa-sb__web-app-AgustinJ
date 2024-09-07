import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const secret = process.env.NEXTAUTH_SECRET

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })

        const user = await res.json()

        if (res.ok && user) return user

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = user.accessToken

      return token
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken

      return session
    },
  },
  secret,
  session: { strategy: 'jwt' },
  jwt: { secret },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
