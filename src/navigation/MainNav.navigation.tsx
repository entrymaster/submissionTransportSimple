import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard.screen';
import Explainer from '../screens/Explainer.screen';
import SignUp from 'screens/SignUp.screen';
import NewTask from 'screens/NewTask.screen';

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
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="NewTask" component={NewTask} />
    </Stack.Navigator>
  );
};

const MainNav: React.FC = () => {
  return false ? <MainStack /> : <AuthStack />;
};

export default MainNav;
