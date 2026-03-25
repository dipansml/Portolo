import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>

        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        {/* Center Title */}
        <Text style={styles.title}>Register</Text>

      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    height: 44, // ✅ FIX height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  left: {
    position: 'absolute', // ✅ KEY for centering title
    left: 16,
  },

  backIcon: {
    fontSize: 22,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});