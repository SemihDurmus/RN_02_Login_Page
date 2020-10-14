import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';

import {Input} from './components/Input';
import {Button} from './components/Button';

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#5D7499',
      }}>
      <ImageBackground
        source={require('./assets/back.jpg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          behavior={Platform.OS == 'android' ? null : 'padding'}>
          <ScrollView style={{flex: 1}} bounces={false}>
            <View
              style={{height: Dimensions.get('window').height * 0.25}}></View>
            <Image
              source={require('./assets/owl.png')}
              style={{
                height: 100,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />

            <Input holder="Enter your email.." type="email-address" />
            <Input
              holder="Enter password.."
              type="phone-pad"
              pass_visible={true}
            />

            <Button title="Log in" />
            <Button title="Sign up" />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
