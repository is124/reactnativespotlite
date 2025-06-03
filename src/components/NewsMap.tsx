import React, { useEffect, useState } from 'react';
import { View, Platform, PermissionsAndroid } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import styles from '../styles/NewsMap.styles';

const NewsMap = () => {
  const [coords, setCoords] = useState<[number, number] | null>(null);

  const requestLocation = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn('Android location permission denied');
          return;
        }
      } else {
        const auth = await Geolocation.requestAuthorization('whenInUse');
        if (auth !== 'granted') {
          console.warn('iOS location permission denied');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCoords([longitude, latitude]);
        },
        error => {
          console.log('Location error', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    } catch (err) {
      console.error('Permission error:', err);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} styleURL={MapboxGL.StyleURL.Light}>
        <MapboxGL.Camera
          centerCoordinate={coords ?? [0, 0]}
          zoomLevel={coords ? 10 : 1}
          animationMode="flyTo"
          animationDuration={1000}
        />
        {coords && (
          <MapboxGL.PointAnnotation id="user-location" coordinate={coords}>
            <View />
          </MapboxGL.PointAnnotation>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

export default NewsMap;
