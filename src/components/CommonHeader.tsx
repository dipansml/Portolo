// components/CommonHeader.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

type Props = {
  title?: string;
  showLogo?: boolean;
  onMenuPress?: () => void;
};

const CommonHeader = ({ title, showLogo, onMenuPress }: Props) => {
  return (
    <View style={styles.container}>
      
      {/* Left Menu Icon */}
      <TouchableOpacity onPress={onMenuPress}>
       <Image
        source={require('../assets/images/menu.png')}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
      </TouchableOpacity>

      {/* Center Content */}
      <View style={styles.center}>
        {showLogo ? (
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>

      {/* Right placeholder for alignment */}
      <View style={{ width: 24 }} />
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: 2,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
     fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },
  logo: {
    width: 120,
    height: 40,
  },
});