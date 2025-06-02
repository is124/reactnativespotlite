import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Interests.styles';

import {SafeAreaView} from 'react-native-safe-area-context';

const topics = ['Politics', 'Tech', 'Sports', 'Climate', 'Finance', 'Health'];
const regions = ['World', 'India', 'Europe'];

const InterestPicker = () => {
  const navigation = useNavigation();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    list: string[],
    setList: (val: string[]) => void,
  ) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]); 
    }
  };

  const handleContinue = () => {
        // TODO: Implement navigation to GlobeView
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Tell us what matters to you</Text>

        <Text style={styles.section}>Topics</Text>
        <View style={styles.grid}>
          {topics.map(topic => (
            <TouchableOpacity
              key={topic}
              style={[
                styles.tag,
                selectedTopics.includes(topic) && styles.selected,
              ]}
              onPress={() =>
                toggleSelection(topic, selectedTopics, setSelectedTopics)
              }>
              <Text style={styles.tagText}>{topic}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.section}>Regions</Text>
        <View style={styles.grid}>
          {regions.map(region => (
            <TouchableOpacity
              key={region}
              style={[
                styles.tag,
                selectedRegions.includes(region) && styles.selected,
              ]}
              onPress={() =>
                toggleSelection(region, selectedRegions, setSelectedRegions)
              }>
              <Text style={styles.tagText}>{region}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InterestPicker;
