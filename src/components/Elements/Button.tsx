import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Label from './Label';
import {scale} from 'theme/responsiveSize';
import {COLORS} from 'theme/theme';

type Props = {
  type: 'large' | 'medium' | 'small';
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<Props> = ({type, text, disabled, isLoading, style}) => {
  const TypeSwitch = () => {
    switch (type) {
      case 'large':
        return (
          <TouchableOpacity
            disabled={disabled || isLoading}
            style={[styles.btnLarge, style]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Label content={text} type="h2" />
            )}
          </TouchableOpacity>
        );

      default:
        break;
    }
  };
  return <>{TypeSwitch()}</>;
};

export default Button;

const styles = StyleSheet.create({
  btnLarge: {
    backgroundColor: COLORS.primary,
    width: scale(270),
    height: scale(62),
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
