import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Explainer: undefined;
    Dashboard: undefined;
    SignUp: undefined;
};

export type ExplainerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;