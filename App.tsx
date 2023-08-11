/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Routes} from './src/routes';
import {ModalProvider} from './src/contexts/ModalContext';

function App(): JSX.Element {
  return (
    <>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </>
  );
}

export default App;
