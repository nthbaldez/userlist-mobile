import React, {createContext, useState, ReactNode} from 'react';

interface ModalProps {
  children: ReactNode;
}

export const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({children}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
};
