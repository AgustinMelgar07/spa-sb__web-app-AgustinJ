import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export const protectRoute = async (...allowedRoles: string[]) => {
  // const session = await getServerSession(authOptions)
  // if (!session) redirect('/auth/login')
  // // Si no se pasan roles permitidos, se permite el acceso a cualquier usuario
  // if (allowedRoles.length > 0) {
  //   const userRole = session?.user?.role
  //   if (!allowedRoles.includes(userRole)) redirect('/404')
  // }
  // return session
}
