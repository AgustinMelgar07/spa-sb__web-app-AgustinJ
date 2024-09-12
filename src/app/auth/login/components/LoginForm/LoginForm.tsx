'use client'

import './LoginForm.css'
import { Input, LinkButton, StateButton } from '@/components'
import { useRouter } from 'next/navigation'
import { useFetchState } from '@/hooks'
import { signIn } from 'next-auth/react'
import jsonData from '@/data.json'

const { login, signUp, profile } = jsonData.pages.dynamic
const { title, button } = login.form

const LoginForm = () => {
  const router = useRouter()

  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })

      if (signInResponse?.error) {
        await setError()
        console.log(signInResponse.error)
      } else {
        router.push(`/${profile.page}`)
        await setSuccess()
      }
    }
  )

  return (
    <div className="cmp-login-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <Input id="email" title="Correo electrónico" required type="email" />
        <Input id="password" title="Contraseña" required type="password" />
        <StateButton text={button} title={button} fetchState={fetchState} />
      </form>
      <div className="register">
        <small className="text">¿No tienes una cuenta?</small>
        <LinkButton
          title="Registrarse"
          href={`/${signUp.page}`}
          style={{ type: 'secondary' }}
        />
      </div>
    </div>
  )
}

export default LoginForm
