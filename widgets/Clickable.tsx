import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from 'react-native';

type ClickableProps = {
  text?: string,
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress?: () => void,
  onButtonPressed?: () => void,
  onButtonReleased?: () => void,
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  children?: any
};

const Clickable = ({
  text = "Click here",
  style = {},
  textStyle = {},
  onPress = () => {},
  onButtonPressed = () => {},
  onButtonReleased = () => {},
  secondary = false,
  disabled = false,
  primary = !secondary && !disabled,
  children = <></>
}: ClickableProps) => {
  const finalContainerStyle: StyleProp<ViewStyle> = disabled ? styles?.dContainer : primary ? styles?.pContainer : styles?.sContainer;
  const finalTextStyle: StyleProp<TextStyle> = disabled ? styles?.dText : primary ? styles?.pText : styles?.sText;

  return (
    <TouchableOpacity
      style={[finalContainerStyle, style]}
      onPressIn={onButtonPressed}
      onPressOut={onButtonReleased}
      onPress={onPress}
      disabled={disabled}
    >
      <>
        <Text style={[finalTextStyle, textStyle]}>{ text }</Text>
        { children && children }
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pContainer: {
    backgroundColor: '#313131',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  sContainer: {
    borderWidth: 2,
    borderColor: '#313131',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  dContainer: {
    backgroundColor: '#999',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  pText: {
    color: '#eee',
    fontSize: 18
  },
  sText: {
    color: '#313131',
    fontSize: 18
  },
  dText: {
    color: '#bbb',
    fontSize: 18
  }
});

export default Clickable;