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
import {scale, screenWidth} from 'theme/responsiveSize';
import {COLORS, FONT_FAMILY} from 'theme/theme';

type Props = {
  type: 'large' | 'medium' | 'small' | 'x_small';
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({
  type,
  text,
  onPress,
  color = COLORS.primary,
  disabled,
  isLoading,
  style,
}) => {
  const TypeSwitch = () => {
    switch (type) {
      case 'large':
        return (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            style={[styles.btnLarge, style]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Label content={text} type="h2" />
            )}
          </TouchableOpacity>
        );
      case 'medium':
        return (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            style={[styles.btnMedium, style]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Label content={text} style={styles.mediumText} />
            )}
          </TouchableOpacity>
        );
        case 'small':
        return (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            style={[styles.btnSmall, style]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Label content={text} style={styles.mediumText} />
            )}
          </TouchableOpacity>
        );
        case 'x_small':
        return (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            style={[styles.btnXSmall,
              {
                backgroundColor: color,
              }
            , style]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Label content={text} style={styles.xSmallText} />
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
  btnMedium: {
    backgroundColor: COLORS.red,
    width: screenWidth - scale(60),
    height: scale(52),
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mediumText: {
    fontFamily: FONT_FAMILY.wt_600,
    color: COLORS.primaryText,
    fontSize: scale(27),
  },
  btnSmall: {
    backgroundColor: COLORS.red,
    width: scale(215),
    height: scale(52),
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnXSmall: {
    width: scale(125),
    height: scale(32),
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  xSmallText: {
    fontFamily: FONT_FAMILY.wt_600,
    color: COLORS.primaryText,
    fontSize: scale(16),
  },
});
