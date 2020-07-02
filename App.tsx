import React from 'react';
import Main from './src/pages/Main';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Main />
    </>
  );
};

export default App;
