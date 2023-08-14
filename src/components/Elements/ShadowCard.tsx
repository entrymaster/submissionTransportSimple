import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {COLORS, GLOBAL_STYLES} from 'theme/theme';

type ShadowCardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  shadow?: object;
};

const ShadowCard: React.FC<ShadowCardProps> = ({
  children,
  style,
  shadow = GLOBAL_STYLES.shadow,
}) => {
  const getCardStyle = () => [
    styles.wrapper,
    {
      shadowColor: COLORS.shadow,
      backgroundColor: COLORS.primaryBackground,
    },
    style,
  ];

  return (
    <DropShadow style={shadow}>
      <View style={getCardStyle()}>{children}</View>
    </DropShadow>
  );
};

export default ShadowCard;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
});
