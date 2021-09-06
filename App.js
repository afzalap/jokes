import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const axios = require('axios').default;

  const [joke, setJoke] = useState('')

  const getJoke = async () => {
    try {
      const { data } = await axios.get("https://api.chucknorris.io/jokes/random")
      // console.log(data.value);
      setJoke(data.value)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJoke()
  },[])

  return (
    <>
      <StatusBar backgroundColor='#F7CD2E' />
      <View style={styles.container}>
        <Text
          style={{
            color: "#0D0D0D",
            fontSize: 20,
            paddingHorizontal:15,
            marginBottom: 30,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {joke}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={getJoke}
        >
          <Text style={{
            color: "#F7CD2E",
            fontWeight: 'bold',
            fontSize: 18
          }}>
            Laugh Again
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F7CD2E'
  },
  button: {
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  }
});

export default App;
