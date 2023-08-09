import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Container, Label, TextInput} from 'components/Elements';
import {scale, screenHeight, screenWidth} from 'theme/responsiveSize';
import {SignUpBg} from 'constants/imgPath';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Label content="Sign Up" type='h1' style={{margin: scale(36)}} />
      {Platform.OS === 'ios' ? (
        <View style={styles.slantedContainer}>
            
        </View>
      ) : (
        <View>
          <SignUpBg
            style={{position: 'absolute'}}
            translateY={100}
            height={screenHeight}
            width={screenWidth}
            preserveAspectRatio="none"
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput />
      <Button type="large" text="Get OTP"  />
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
        position: 'absolute',
        width: '100%',
        height: '50%',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
