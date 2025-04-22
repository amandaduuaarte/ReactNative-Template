import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const koalaLogo = require('@/assets/koala.png');
export const Home = (): React.ReactElement => {
  const handleOpenDocs = () => {
    Linking.openURL('https://github.com/amandaduuaarte/ReactNative-Template');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={koalaLogo} style={styles.koala} />
        <Text style={styles.title}>Koalate</Text>
      </View>

      <Text style={styles.description}>
        Boilerplate React Native com Clean Architecture
      </Text>

      <TouchableOpacity
        onPress={handleOpenDocs}
        testID="openDocs"
        style={styles.button}>
        <Text style={styles.buttonText}>Docs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F0EA',
  },
  header: {
    height: '45%',
    width: '100%',
    padding: 34,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71A894',
    borderBottomEndRadius: 64,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FAFAFA',
  },
  koala: {
    height: 250,
    width: 250,
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
    color: '#66645E',
    fontWeight: '600',
    marginVertical: 32,
  },
  button: {
    backgroundColor: '#71A894',
    height: 45,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
  },
});
