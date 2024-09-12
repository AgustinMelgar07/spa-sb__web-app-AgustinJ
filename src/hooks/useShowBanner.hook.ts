import { useEffect, useState } from 'react'
import { FetchState } from '.'

export const useShowBanner = (fetchState: FetchState) => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (fetchState === 'success' && !showBanner) setShowBanner(true)
  }, [fetchState, showBanner])

  return { showBanner }
}
