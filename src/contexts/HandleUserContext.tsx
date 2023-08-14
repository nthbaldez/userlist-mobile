import React, {ReactNode, createContext, useState} from 'react';
import {DeleteUser} from '../services/Users/UserService';

interface ModalProps {
  children: ReactNode;
}

interface EditUserProps {
  id: string;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  image: string;
}

export const HandleUserContext = createContext({
  userToBeHandle: {} as EditUserProps,
  setUserToBeHandle: (user: EditUserProps) => {},
  handleDelete: (id: string) => {},
});

export const HandleUserProvider = ({children}: ModalProps) => {
  const [userToBeHandle, setUserToBeHandle] = useState({
    id: '',
    name: '',
    birthDate: '',
    address: '',
    telephoneNumber: '',
    image: '',
  });

  const handleDelete = async (id: string) => {
    await DeleteUser(id);
  };

  return (
    <HandleUserContext.Provider
      value={{userToBeHandle, setUserToBeHandle, handleDelete}}>
      {children}
    </HandleUserContext.Provider>
  );
};
