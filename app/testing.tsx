import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Testing = () => {
  return (
    <View>
      <Text>testing</Text>
      <Link href="/login" >Go to login</Link>
      <Link href="/profile" >Go to profile</Link>
      <Link href="/" >Go to Home</Link>
    </View>
  )
}

export default Testing