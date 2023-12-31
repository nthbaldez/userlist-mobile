import {useContext} from 'react';
import {ModalContext} from '../contexts/ModalContext';

export const useModalMenu = () => {
  return useContext(ModalContext);
};
