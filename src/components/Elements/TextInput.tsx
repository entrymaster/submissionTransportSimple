import { StyleSheet, TextInput as CustomInput, } from 'react-native'
import React from 'react'
import { scale } from 'theme/responsiveSize'
import Label from './Label'

type Props = {

const TextInput: React.FC = () => {
  return (
    <View>
      <Label 
    <CustomInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
    />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: scale(275),
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
})