import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Login = () => {
  return (
    <View>
      <Text>login</Text>
      <Link href="/testing">
        <Text>Go to testing</Text>
      </Link>
    </View>
  )
}

export default Login