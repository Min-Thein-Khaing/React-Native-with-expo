import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>login</Text>
      <Link href="/testing">Go to testing</Link>
    </View>
  )
}

export default Login