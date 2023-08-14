import {StyleSheet, TextInput as CustomInput, View} from 'react-native';
import React from 'react';
import {scale, scaleText} from 'theme/responsiveSize';
import Label from './Label';
import {COLORS, FONT_FAMILY} from 'theme/theme';

type Props = {
  title: string;
};

const TextInput: React.FC<Props> = ({title}) => {
  return (
    <View>
      <Label
        content={title}
        style={{
          fontFamily: FONT_FAMILY.wt_700,
          fontSize: scale(16),
          color: COLORS.inputLabel,
        }}
      />
      <CustomInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.placeholderColor}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    height: scale(55),
    width: scale(260),
    backgroundColor: '#EAF0FF',
    marginVertical: scale(24),
    color: COLORS.primary_shade1,
    paddingHorizontal: scale(24),
    borderRadius: 30,
  },
});
