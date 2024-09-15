import './Protect.css'
import { Loader } from '@/components'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { UserModel } from '@/models'
import jsonData from '@/data.json'

const { login } = jsonData.pages.dynamic

interface Props {
  allowedRoles?: UserModel.Role[]
  children: ReactNode
}

const Protect = ({ allowedRoles, children }: Props) => {
  const router = useRouter()
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'loading') return

    if (status === 'unauthenticated') {
      router.push(`/${login.page}`)
      return
    }

    const role = data?.user?.role as UserModel.Role

    if (
      status === 'authenticated' &&
      allowedRoles &&
      !allowedRoles.includes(role)
    ) {
      router.push('/unauthorized')
    }
  }, [status, router, allowedRoles, data])

  // useEffect(() => {
  //   console.log(status)
  //   console.log(data)
  // }, [status, data])

  return status !== 'authenticated' ? (
    <div className="page-loading">
      <Loader />
    </div>
  ) : (
    children
  )
}

export default Protect
