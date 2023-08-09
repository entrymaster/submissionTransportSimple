import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {Children, ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  gradientArray?: string[];
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  removeSafeFromTop?: boolean;
  removeSafefromBottom?: boolean;
};

const Container: React.FC<Props> = ({
  gradientArray = ['#868BFE', '#FEFEFF', '#FFFFFF'],
  children,
  style,
  removeSafeFromTop = false,
  removeSafefromBottom = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={gradientArray}
      style={[
        styles.linearGradient,
        style,
        {
          paddingTop: removeSafeFromTop ? 0 : insets.top,
          paddingBottom: removeSafefromBottom ? 0 : insets.bottom,
        },
      ]}>
      {children}
    </LinearGradient>
  );
};

export default Container;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
  },
});
