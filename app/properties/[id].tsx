import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PropertyDetailsScreen = () => {
    const {id}= useLocalSearchParams()
  return (
    <View>
      <Text>PropertyDetailsScreen {id}</Text>
    </View>
  )
}

export default PropertyDetailsScreen