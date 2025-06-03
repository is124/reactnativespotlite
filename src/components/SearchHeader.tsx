import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/SearchHeader.styles';
import {useNavigation} from '@react-navigation/native';

const SearchHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.logoText}>Spotlite</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Filters' as never)}
        style={styles.iconButton}>
        <Icon name="filter" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
