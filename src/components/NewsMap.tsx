import React from 'react';
// import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import styles from '../styles/NewsMap.styles';

const NewsMap = ({ onHotspotPress }: { onHotspotPress: () => void }) => {
  const heatmapPoints = [
    { latitude: 37.7749, longitude: -122.4194, weight: 1 },
    { latitude: 40.7128, longitude: -74.0060, weight: 2 },
    { latitude: 51.5074, longitude: -0.1278, weight: 3 },
  ];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 20,
        longitude: 0,
        latitudeDelta: 100,
        longitudeDelta: 100,
      }}
    >
      {/* <Heatmap points={heatmapPoints} radius={40} opacity={0.7} /> */}
    </MapView>
  );
};


export default NewsMap;