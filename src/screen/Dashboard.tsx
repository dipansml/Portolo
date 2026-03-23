import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 👋</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical center
    alignItems: 'center',     // horizontal center
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});