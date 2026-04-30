import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Link
        style={{ fontFamily: 'SpaceMono', marginVertical: 5, color: "blue" }}
        href="/detail"
      >
        Go to detail
      </Link>
      <Text>contact-us</Text>
    </View>
  )
}

export default Contact
