import { InternalAxiosRequestConfig } from 'axios'
import { getSession } from 'next-auth/react'

export const addToken = async (config: InternalAxiosRequestConfig<any>) => {
  // Obtener el token de autenticación
  const session = await getSession()
  const accessToken = session?.accessToken

  /*
    Si existe un token de autenticación, agregarlo al encabezado de la
    solicitud.
  */
  if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`

  return config
}
