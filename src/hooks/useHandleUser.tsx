import {useContext} from 'react';
import {HandleUserContext} from '../contexts/HandleUserContext';

export function useHandleUser() {
  return useContext(HandleUserContext);
}
