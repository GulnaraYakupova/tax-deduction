import { useEffect } from 'react'

export const useBodyScrollLock = (isActive) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isActive])
}
