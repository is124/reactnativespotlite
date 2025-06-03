import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/SearchBar.styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
