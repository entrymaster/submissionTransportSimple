import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'theme/responsiveSize';
import Label from './Label';
import Image from './Image';
import {PROFILE_IMAGE} from 'constants/appConstants';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Image uri={PROFILE_IMAGE} style={styles.profileImage} />
      <Label content={title} type="h1" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '15%',
    width: '100%',
    padding: scale(37),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
    marginRight: scale(16),
    borderWidth: 5,
    borderColor: '#fff',
  },
});
