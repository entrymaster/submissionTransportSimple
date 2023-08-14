import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Explainer: undefined;
    Dashboard: undefined;
    SignUp: undefined;
    NewTask: undefined;
};

export type ExplainerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

export type DashboardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NewTask'
>;