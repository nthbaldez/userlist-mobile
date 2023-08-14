import React, {createContext, useState, ReactNode} from 'react';

interface ModalProps {
  children: ReactNode;
}

export const ModalContext = createContext({
  isModalOpen: false,
  isConfirmModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  openConfirmModal: () => {},
  closeConfirmModal: () => {},
});

export const ModalProvider = ({children}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(prev => !prev);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isConfirmModalOpen,
        openModal,
        closeModal,
        openConfirmModal,
        closeConfirmModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
