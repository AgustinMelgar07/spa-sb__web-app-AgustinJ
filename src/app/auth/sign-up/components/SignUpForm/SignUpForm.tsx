'use client'

import { Input, StateButton } from '@/components'
import { useFetchState } from '@/hooks'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { AuthService } from '@/services'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { signUp, profile } = jsonData.pages.dynamic
const { title, button } = signUp.form

const SignUpForm = () => {
  const router = useRouter()

  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const registerResponse = await AuthService.register({
        name: formData.get('name') as string,
        lastName: formData.get('lastName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })

      if (registerResponse instanceof AppError) {
        await setError()
        return
      }

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })

      if (signInResponse?.error) {
        await setError()
        console.log(signInResponse.error)
      } else {
        await setSuccess()
        router.push(`/${profile.page}`)
      }
    }
  )

  return (
    <div className="cmp-sign-up-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <Input id="name" title="Nombre" required />
        <Input id="lastName" title="Apellido" required />
        <Input
          id="phone"
          title="Teléfono"
          type="tel"
          // TODO: test del formato
          pattern="\+54[0-9]{11}"
          placeholder="+54___________"
        />
        <Input id="email" title="Correo electrónico" required type="email" />
        <Input
          id="password"
          title="Contraseña"
          required
          type="password"
          minLength={8}
        />
        {/* TODO: implementar input de confirmar contraseña */}
        <StateButton text={button} title={button} fetchState={fetchState} />
      </form>
    </div>
  )
}

export default SignUpForm
