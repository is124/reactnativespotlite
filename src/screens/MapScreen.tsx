import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NewsMap from '../components/NewsMap';
import NewsCard from '../components/NewsCard';
import SearchHeader from '../components/SearchHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/Map.styles';

const MapScreen = () => {
    const [cardVisible, setCardVisible] = useState(false);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <SearchHeader />
      </View>
      <View style={styles.mapContainer}>
        <NewsMap />
      </View>
      <NewsCard visible={cardVisible} onClose={() => setCardVisible(false)} />
    </SafeAreaView>
  );
};

export default MapScreen;
