import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const baseWidth = 375; // Base width for scaling
const baseHeight = 812; // Base height for scaling

const scale = (size: number) => (screenWidth / baseWidth) * size;
const verticalScale = (size: number) => (screenHeight / baseHeight) * size

const scaleText = (fontSize: number) => {
  const scaleFactor = Math.min(
    screenWidth / baseWidth,
    screenHeight / baseWidth,
  );
  const scaledSize = Math.round(fontSize * scaleFactor * 10)/10;
  return scaledSize;
};


export {
  scale,
  verticalScale,
  scaleText,
  screenHeight,
  screenWidth,
  baseHeight,
  baseWidth,
};
