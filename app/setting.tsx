import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Setting = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting Screen</Text>
      <Text style={styles.description}>This is a shared Settings screen (Modal Way).</Text>
      <Button title="Close" onPress={() => router.back()} color="#e31837" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  }
})

export default Setting
