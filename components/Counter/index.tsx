import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Counter() {
  const [count, setCount] = React.useState<number>(0)

  const handleIncrement = React.useCallback(() => {
    setCount(count + 1)
  }, [count])

  const handleDecrement = React.useCallback(() => {
    setCount(count - 1)
  }, [count])

  return (
    <View style={[styles.container, styles.elevation]}>
      <Text style={styles.headerText}>Counter</Text>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleIncrement}
          style={styles.buttonIncrement}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleDecrement}
          style={styles.buttonDecrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginHorizontal: 20,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
    padding: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000000',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    marginTop: 20,
    flexDirection: 'row',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countText: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonIncrement: {
    backgroundColor: 'lightgreen',
    width: '45%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonDecrement: {
    backgroundColor: 'red',
    width: '45%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
