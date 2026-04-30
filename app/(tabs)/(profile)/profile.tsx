import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link
        style={{ fontFamily: 'SpaceMono', marginVertical: 5, color: "blue" }}
        href="/settings/zaw zaw"
      >
        Go to setting
      </Link>
      <Text>profile</Text>
    </View>
  )
}

export default profile
