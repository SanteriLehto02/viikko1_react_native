import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age,setAge] = useState("")
  const [upper,setUpper] = useState("")
  const [lower,setLower] = useState("")

  const calculateLimits = () => {
    const ageInt = parseInt(age);
    if (age != "") {
      let lowerInt = parseInt((220-ageInt) * 0.65)
      let upperInt = parseInt((220-ageInt) * 0.85)
      setUpper(upperInt)
      setLower(lowerInt)  
    }else{
      setUpper("")
      setLower("")
    }
    
  }
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <Text>Limits</Text>
      <Text>{lower + "-" + upper}</Text>
      <Button title='CALCULATE' onPress={calculateLimits}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: "center"
  },
});
