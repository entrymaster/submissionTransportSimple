import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard.screen';
import Explainer from '../screens/Explainer.screen';
import SignUp from 'screens/SignUp.screen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Explainer">
      <Stack.Screen name="Explainer" component={Dashboard} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignUp">
      <Stack.Screen name="Explainer" component={Explainer} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const MainNav: React.FC = () => {
  return false ? <MainStack /> : <AuthStack />;
};

export default MainNav;
