import React, {useCallback} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {scaleText} from '../../theme/responsiveSize';
import {COLORS, FONT_FAMILY, FONT_SIZE} from 'theme/theme';

type LabelProps = {
  content: string;
  children?: React.ReactNode;
  type?: 'h1' | 'h2' | 'p';
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  lineHeight?: number;
  disabled?: boolean;
};

const Label: React.FC<LabelProps> = ({
  content,
  children,
  type,
  size = FONT_SIZE.p,
  color = COLORS.primaryText,
  lineHeight,
  style,
  disabled,
  ...props
}) => {
  const getStyleType = useCallback((): StyleProp<TextStyle> => {
    let applidStyle: StyleProp<TextStyle> = {};
    switch (type) {
      case 'h1':
        applidStyle = {
          fontFamily: FONT_FAMILY.wt_700,
          fontSize: scaleText(36),
          lineHeight: scaleText(50),
          color: color,
        };
        break;
    case 'h2':
        applidStyle = {
          fontFamily: FONT_FAMILY.wt_700,
          fontSize: scaleText(30),
          lineHeight: scaleText(41),
          color: color,
        };
        break;
      case 'p':
        applidStyle = {};
        break;
      default:
        applidStyle = style;
        break;
    }
    return [applidStyle, style];
  }, [type, style]);

  return (
    <Text disabled={disabled} style={getStyleType()} {...props}>
      {content}
      {children}
    </Text>
  );
};

export default Label;
