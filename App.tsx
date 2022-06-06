import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, ScrollView } from 'react-native'
import Counter from './components/Counter'
import ImageContainer from './components/ImageContainer'

export default function App() {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <StatusBar style="auto" />
      <Counter />
      <ImageContainer />
    </ScrollView>
  )
}
