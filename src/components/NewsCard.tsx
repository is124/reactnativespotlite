import React, { useRef } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import styles from '../styles/NewsCard.styles.ts';

const { height } = Dimensions.get('window');

const NewsCard = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? height * 0.4 : height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[styles.card, { transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.headline}>Election Results Tell a Preface of Change</Text>
      <Text style={styles.body}>
        In a decisive vote, the nation has chosen a new path, signaling significant shifts in the political landscape.
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity><Text style={styles.actionText}>Read More</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.actionText}>Save</Text></TouchableOpacity>
      </View>
    </Animated.View>
  );
};


export default NewsCard;
