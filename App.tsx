/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Routes} from './src/routes';
import {ModalProvider} from './src/contexts/ModalContext';
import {HandleUserProvider} from './src/contexts/HandleUserContext';

function App(): JSX.Element {
  return (
    <>
      <ModalProvider>
        <HandleUserProvider>
          <Routes />
        </HandleUserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
