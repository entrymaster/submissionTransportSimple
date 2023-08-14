import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Container, Label, TextInput} from 'components/Elements';
import {
  scale,
  screenHeight,
  screenWidth,
  verticalScale,
} from 'theme/responsiveSize';
import {SignUpBg} from 'constants/imgPath';
import {COLORS} from 'theme/theme';
import {useNavigation} from '@react-navigation/native';
import { SignUpNavigationProp } from 'navigation/types';

const SignUp: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  return (
    <Container>
      <Label content="Sign Up" type="h1" style={{margin: scale(36)}} />
      {Platform.OS === 'ios' ? (
        <View style={styles.slantedContainer}></View>
      ) : (
        <View>
          <SignUpBg
            style={{position: 'absolute'}}
            translateY={-verticalScale(30)}
            height={screenHeight}
            width={screenWidth}
            preserveAspectRatio="none"
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput title="Phone" />
        <Button
          type="large"
          text="Get OTP"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Label
          style={{width: '60%', textAlign: 'center', marginTop: scale(32)}}
          type="h5"
          content=""
          color={COLORS.textColor_shade0}>
          By signing up you agree to the
          {<Label type="h4" content=" Terms and Conditions " color="#A3A6FF" />}
          of Taskoo
        </Label>
      </View>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  slantedContainer: {
    width: screenWidth,
    height: '80%',
    backgroundColor: '#fff',
    transform: Platform.OS === 'ios' ? [{skewY: '-20deg'}] : [],
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
    borderTopRightRadius: scale(100),
    borderTopLeftRadius: scale(40),
  },
  inputContainer: {
    // position: 'absolute',
    width: '100%',
    height: '70%',
    bottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
