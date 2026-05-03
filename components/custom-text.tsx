import { Text, type TextProps } from 'react-native'
import React from 'react'

type textProps= TextProps &{
  font?: string;
}

const CustomText = ({ style,font = "Roboto-Italic" , ...rest }: textProps) => {
  return (
    <Text
      style={[{ fontFamily: font }, style]}
      {...rest}
    />
  )
}

export default CustomText