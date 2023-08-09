import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './navigation/MainNav.navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {colors} from './theme/theme';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.primaryBackground,
          }}> */}
          <MainNav />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
