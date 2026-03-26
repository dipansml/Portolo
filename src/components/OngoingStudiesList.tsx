import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Neuro-Link Phase II',
    participants: '12 Active Participants',
    value: '92%',
    label: 'Compliance',
    positive: true,
    image: require('../assets/images/study.png'),
  },
  {
    id: '2',
    title: 'Neuro-Link Phase II',
    participants: '12 Active Participants',
    value: '-5%',
    label: 'Retention',
    positive: false,
    image: require('../assets/images/study.png'),
  },
  {
    id: '3',
    title: 'Neuro-Link Phase III',
    participants: '12 Active Participants',
    value: '-5%',
    label: 'Retention',
    positive: false,
    image: require('../assets/images/study.png'),
    
  },
  {
    id: '4',
    title: 'Neuro-Link Phase IV',
    participants: '12 Active Participants',
    value: '-5%',
    label: 'Retention',
    positive: false,
    image: require('../assets/images/study.png'),
    
  },
];

type StudyItemProps = {
  item: StudyItemType;
  index: number;
  onPress?: (item: StudyItemType, index: number) => void;
};

export type StudyItemType = {
  id: string;
  title: string;
  participants: string;
  value: string;
  label: string;
  positive: boolean;
  image: any;
};


const StudyItem : React.FC<StudyItemProps> = ({ item, index, onPress  }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(item, index)}
      activeOpacity={0.7}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.participants}</Text>
      </View>

      <View style={styles.right}>
        <Text
          style={[
            styles.value,
            { color: item.positive ? '#E67515' : '#E67515' },
          ]}
        >
          {item.value}
        </Text>
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const OngoingStudiesList = ({ onItemPress } : any) => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <StudyItem 
          item={item}
          index={index}
          onPress={onItemPress}
        />
      )}
      scrollEnabled={false}
    />
  );
};

export default OngoingStudiesList;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 14,
    fontFamily: 'segoe_bold',
    color: '#000000',
  },

  subtitle: {
    fontSize: 12,
    color: '#48566A',
    fontFamily: 'segoe',
  },

  right: {
    alignItems: 'flex-end',
  },

  value: {
    fontSize: 16,
    fontFamily: 'segoe_bold',
  },

  label: {
    fontSize: 12,
    color: '#94A3B8',
    fontFamily: 'segoe',
  },
});