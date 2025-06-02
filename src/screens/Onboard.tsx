import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Onboard.styles';


const worldMap = require('../assets/world-map.png');

const Onboard = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Interests' as never);
  };

  return (
    <View style={styles.container}>
      <Image
        source={worldMap}
        style={styles.map}
        resizeMode="contain"
      />
      <Text style={styles.title}>Your World in 60 Words</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Onboard;
