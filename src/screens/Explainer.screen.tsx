import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, screenHeight, screenWidth, verticalScale} from 'theme/responsiveSize';
import {Container} from 'components/Elements';
import {EllipseWrapper, ExplainerElement} from 'constants/imgPath';
import { ArrowCircleRight } from 'constants/iconPath';
import { ExplainerNavigationProp } from 'navigation/types';

type Props = {
  navigation: ExplainerNavigationProp;
}

const Explainer: React.FC<Props> = ({navigation}) => {
  return (
    <Container gradientArray={['#FFFFFF', '#EDF2FF', '#868BFE']}>
      <ExplainerElement
        style={{position: 'absolute'}}
        translateY={-screenHeight * (108 / 812)}
        preserveAspectRatio="none"
        width={screenWidth}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={{
            position: 'absolute',
            borderRadius: 20,
            top: verticalScale(704),
            left: screenWidth / 2 - 30,
          }}>
        <EllipseWrapper style={{position: 'absolute'}}>
          <ArrowCircleRight style={{zIndex: 20}} />
        </EllipseWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export default Explainer;

const styles = StyleSheet.create({
  backImage: {
    height: screenHeight,
    justifyContent: 'center',
  },
});
