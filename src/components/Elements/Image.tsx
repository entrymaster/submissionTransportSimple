import { StyleProp, StyleSheet } from 'react-native'
import React from 'react'
import FastImage, { ImageStyle } from 'react-native-fast-image'

type Props = {
    style: StyleProp<ImageStyle>;
    uri: string;
}

const Image: React.FC<Props> = ({style, uri}) => {
  return (
    <FastImage
        style={style}
        source={{
            uri: uri,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
  )
}

export default Image

const styles = StyleSheet.create({})