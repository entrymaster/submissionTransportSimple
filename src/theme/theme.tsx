import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const COLORS = {
  primaryBackground: '#FFFFFF',
  primaryText: '#ffffff',
  secondaryText: '#9A9A9A',
  tertiaryText: '#4C5B60',
  primary: '#868BFE',
  red: '#F82626',
  blue: '#1B21B5',
  primary_shade1: '#A3A6FF',
  inputLabel: '#18306D',
  textColor_shade0: '#CDCFF6',
  placeholderColor: '#CDCFF6',
  placeHolderSecondary: '#CCDDE5',  
  shadow: '#000000',
};

export const FONT_FAMILY = {
  primary: 'Poppins-Regular',
  wt_100: 'Poppins-Thin',
  wt_200: 'Poppins-ExtraLight',
  wt_300: 'Poppins-Light',
  wt_400: 'Poppins-Regular',
  wt_500: 'Poppins-Medium',
  wt_600: 'Poppins-SemiBold',
  wt_700: 'Poppins-Bold',
  wt_800: 'Poppins-ExtraBold',
  wt_900: 'Poppins-Black',
};

export const FONT_SIZE = {
  h1: 32,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  p: 16,
  p2: 14,
  p3: 12,
  p4: 10,
};

const shadow: StyleProp<ViewStyle> = {
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowColor: '#E3E3E3',
  shadowRadius: 4,
  elevation: 8,
  shadowOpacity: 0.6,
};

const shadow1: StyleProp<ViewStyle> = {
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowColor: '#E3E3E3',
  shadowRadius: 13,
  elevation: 8,
  shadowOpacity: 1,
};

export const GLOBAL_STYLES = {
  shadow1,
  shadow,
};
