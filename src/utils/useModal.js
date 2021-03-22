import { useState } from 'react'
import { useBodyScrollLock } from './useBodyScrollLock'

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openModal = () => setIsOpened(true);
  const closeModal = () => setIsOpened(false);
  const toggleModal = () => setIsOpened((prev) => !prev);
  useBodyScrollLock(isOpened)

  return { isOpened, setIsOpened, openModal, closeModal, toggleModal, }
}
