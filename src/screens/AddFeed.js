import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AddFeed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})