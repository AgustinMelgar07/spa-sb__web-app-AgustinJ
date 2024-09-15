import { sleep } from '@/helpers'
import { FormEventHandler, useCallback, useState } from 'react'

export type FetchState = 'loading' | 'error' | 'success' | 'ready'

export const useFetchState = (
  submitCallback: ({
    formData,
    setLoading,
    setError,
    setSuccess,
  }: {
    formData: FormData
    setLoading: () => Promise<void>
    setError: () => Promise<void>
    setSuccess: () => Promise<void>
  }) => Promise<void>
) => {
  const [fetchState, setFetchState] = useState<FetchState>('ready')

  const setLoading = useCallback(async () => {
    setFetchState('loading')
    await sleep(500)
  }, [])

  const setError = useCallback(async () => {
    setFetchState('error')
    await sleep(2000)
    setFetchState('ready')
  }, [])

  const setSuccess = useCallback(async () => {
    setFetchState('success')
    await sleep(2000)
    setFetchState('ready')
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    await submitCallback({ formData, setLoading, setError, setSuccess })
  }

  return { fetchState, handleSubmit }
}
