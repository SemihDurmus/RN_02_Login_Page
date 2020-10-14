import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Platform} from 'react-native';

const Input = ({holder, type, pass_visible}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={holder}
        keyboardType={type}
        secureTextEntry={pass_visible}
      />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.8,
    padding: Platform.OS == 'ios' ? 15 : 4,
    borderWidth: 3,
    borderColor: '#273c75',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },

  input: {
    fontSize: 18,
    color: '#273c75',
  },
});
