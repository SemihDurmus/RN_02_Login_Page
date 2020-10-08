import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground, 
  TouchableOpacity
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ImageBackground source={require('./img/back.jpg')} style={styles.background}>
        <View style={styles.mainSection}>

        <>
          <Image source={require('./img/owl.png')} style={styles.image}/>
        </>

        <>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address">
          </TextInput>

          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType='default'
            secureTextEntry={true}>
          </TextInput>
        </>

        <>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#5D7499',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    height: 150,
    resizeMode: 'contain',

  },
  mainSection: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input : {
    fontSize: 18,
    backgroundColor: "#FFF",
    letterSpacing: 1,
    alignSelf: "center",
    width: 240,
    height: 40,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#5D7499",
    padding: 8,
  },
  button: {
    backgroundColor: "#192a56",
    padding: 10,
    borderRadius: 13,
    marginBottom: 15,
  },
  buttonText :{
    color: "#fbc531",
    fontWeight: "700",
    fontSize: 18,
    width: 140,
    textAlign: "center",
  }
});

export default App;
