import {Button, Label, ShadowCard} from 'components/Elements';
import {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {scale, screenWidth} from 'theme/responsiveSize';
import {COLORS, FONT_FAMILY} from 'theme/theme';

type Props = {
  title: string;
  children: React.ReactNode;
  timing?: number;
  status?: 'active' | 'inactive' | 'completed';
};

const TaskTile: React.FC<Props> = ({
  title,
  children,
  timing = 500,
  status = 'active',
}) => {
  const shareValue = useSharedValue(0);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = useAnimatedStyle(() => ({
    height: interpolate(shareValue.value, [0, 1], [0, bodySectionHeight]),
  }));

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(shareValue.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });

  const toggleButton = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: timing,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: timing,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  const ViewSwitch = () => {
    switch (status) {
      case 'active':
        return (
          <ShadowCard style={styles.subContainer}>
            <LinearGradient
              style={{
                padding: scale(22),
                borderRadius: scale(20),
              }}
              colors={['#FFF', '#FFF']}>
              <View style={styles.header}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Label
                    content={title}
                    style={{
                      fontFamily: FONT_FAMILY.wt_600,
                      fontSize: scale(24),
                      color: COLORS.primary,
                    }}
                  />
                  <Image
                    source={require('assets/images/DottedNotebook.png')}
                    style={{
                      width: scale(60),
                      height: scale(60),
                    }}
                  />
                </View>
                <Label
                  content="Dec 16 16:00 - 17:00"
                  style={{
                    fontFamily: FONT_FAMILY.wt_600,
                    fontSize: scale(16),
                    color: '#D9D9D9',
                  }}
                />
              </View>

              <Animated.View style={[styles.descStyle, bodyHeight]}>
                <View
                  style={styles.bodyContainer}
                  onLayout={event => {
                    setBodySectionHeight(event.nativeEvent.layout.height);
                  }}>
                  {children}
                  <View style={styles.btnContainer}>
                    <Button type="x_small" text="Ignore" color="#FD3939" />
                    <Button type="x_small" text="Complete" color="#8AF9A2" />
                  </View>
                </View>
              </Animated.View>
            </LinearGradient>
          </ShadowCard>
        );
      case 'inactive':
        return (
          <ShadowCard style={styles.subContainer}>
            <LinearGradient
              style={{
                padding: scale(22),
                borderRadius: scale(20),
              }}
              colors={['#FF5A5A', '#FF5A5ABF']}>
              <View style={styles.header}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Label
                    content={title}
                    style={{
                      fontFamily: FONT_FAMILY.wt_600,
                      fontSize: scale(24),
                      color: COLORS.primary,
                    }}
                  />
                  <Image
                    source={require('assets/images/DottedNotebook.png')}
                    style={{
                      width: scale(60),
                      height: scale(60),
                    }}
                  />
                </View>
                <Label
                  content="Dec 16 16:00 - 17:00"
                  style={{
                    fontFamily: FONT_FAMILY.wt_600,
                    fontSize: scale(16),
                    color: '#D9D9D9',
                  }}
                />
              </View>

              <Animated.View style={[styles.descStyle, bodyHeight]}>
                <View
                  style={styles.bodyContainer}
                  onLayout={event => {
                    setBodySectionHeight(event.nativeEvent.layout.height);
                  }}>
                  {children}
                  <View style={styles.btnContainer}>
                    <Button type="x_small" text="Ignore" color="#FD3939" />
                    <Button type="x_small" text="Complete" color="#8AF9A2" />
                  </View>
                </View>
              </Animated.View>
            </LinearGradient>
          </ShadowCard>
        );
      case 'completed':
        return (
          <ShadowCard style={styles.subContainer}>
            <LinearGradient
              style={{
                padding: scale(22),
                borderRadius: scale(20),
              }}
              colors={['#FF5A5A', '#FF5A5ABF']}>
              <View style={styles.header}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Label
                    content={title}
                    style={{
                      fontFamily: FONT_FAMILY.wt_600,
                      fontSize: scale(24),
                      color: COLORS.primary,
                    }}
                  />
                  <Image
                    source={require('assets/images/DottedNotebook.png')}
                    style={{
                      width: scale(60),
                      height: scale(60),
                    }}
                  />
                </View>
                <Label
                  content="Dec 16 16:00 - 17:00"
                  style={{
                    fontFamily: FONT_FAMILY.wt_600,
                    fontSize: scale(16),
                    color: '#D9D9D9',
                  }}
                />
              </View>

              <Animated.View style={[styles.descStyle, bodyHeight]}>
                <View
                  style={styles.bodyContainer}
                  onLayout={event => {
                    setBodySectionHeight(event.nativeEvent.layout.height);
                  }}>
                  {children}
                  <View style={styles.btnContainer}>
                    <Button type="x_small" text="Ignore" color="#FD3939" />
                    <Button type="x_small" text="Complete" color="#8AF9A2" />
                  </View>
                </View>
              </Animated.View>
            </LinearGradient>
          </ShadowCard>
        );
      default:
        break;
    }
  };

  return <Pressable onPress={toggleButton}>{ViewSwitch()}</Pressable>;
};

const styles = StyleSheet.create({
  subContainer: {
    // paddingBottom: scale(16),
    width: screenWidth - scale(44),
    borderRadius: 30,

    marginVertical: scale(11),
  },
  descStyle: {
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  header: {
    width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(5),
  },
});

export default TaskTile;
