import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Container({ children }: any) {
  return <View style={[styles.container, styles.elevation]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
    padding: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000000',
  },
})
