import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../styles/Filters.styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const topics = [
  'Politics',
  'Tech',
  'AI',
  'Finance',
  'Health',
  'Business',
  'Entertainment',
  'Science',
  'Sports',
];
const regions = [
  'Global',
  'India',
  'USA',
  'Europe',
  'Asia',
  'Africa',
  'Australia',
  'South America',
  'North America',
];
const times = ['Today', 'Past 24h', 'Past week'];

const Filters = () => {
  const navigation = useNavigation();

  const [selectedTopic, setSelectedTopic] = useState<string | null>('Politics');
  const [selectedRegion, setSelectedRegion] = useState<string | null>('Global');
  const [selectedTime, setSelectedTime] = useState<string | null>('Past 24h');

  const renderTag = (label: string, selected: boolean, onPress: () => void) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tag, selected && styles.selected]}>
      <Text style={[styles.tagText]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Text style={styles.heading}>Filter by:</Text>

        <Text style={styles.section}>Topic</Text>
        <View style={styles.grid}>
          {topics.map((topic, index) => (
            <React.Fragment key={index}>
              {renderTag(topic, selectedTopic === topic, () =>
                setSelectedTopic(topic),
              )}
            </React.Fragment>
          ))}
        </View>

        <Text style={styles.section}>Region</Text>
        <View style={styles.grid}>
          {regions.map((region, index) =>
            <React.Fragment key={index}>
              {renderTag(region, selectedRegion === region, () =>
                setSelectedRegion(region),
              )}
            </React.Fragment>
          )}
        </View>

        <Text style={styles.section}>Time</Text>
        <View style={styles.grid}>
          {times.map((time, index) =>
            <React.Fragment key={index}>
              {renderTag(time, selectedTime === time, () => setSelectedTime(time))}
            </React.Fragment>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filters;
