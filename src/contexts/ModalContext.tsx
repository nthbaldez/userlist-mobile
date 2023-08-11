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
    console.log('open');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  );
};
