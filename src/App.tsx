import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './navigation/MainNav.navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaProvider>
        {/* <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.primaryBackground,
          }}> */}
          <MainNav />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

export default App;
