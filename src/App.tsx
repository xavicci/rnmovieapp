import './../gesture-handler.native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './presentation/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
