import { Image, StyleSheet, Text } from 'react-native'

import Container from '../Container'

export default function ImageContainer() {
  return (
    <Container>
      <Text style={styles.title}>Images:</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.image}
      />

      <Image
        source={{
          uri: 'https://source.unsplash.com/300x700/?nature',
        }}
        style={styles.wideImage}
        fadeDuration={400}
        resizeMode="cover"
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#ebecec',
    borderRadius: 50,
  },
  wideImage: {
    marginTop: 10,
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
})
