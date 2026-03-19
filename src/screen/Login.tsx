import React, { useState, useEffect } from 'react';
import {View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground} from 'react-native';
  import { Dimensions } from 'react-native';

  const screenWidth = Dimensions.get('window').width;

const Login = () => {

  const [loading, setLoading] = useState(false);

  return (
   <View style={styles.screen}>   {/* 👈 full screen wrapper */}
    
    {/* Top Banner */}
    <ImageBackground
      source={require('../assets/images/login_banner.png')}
      style={styles.banner}
      resizeMode="cover"
    />

    {/* Content */}
    <View style={styles.container}>
      <FullScreenLoader visible={loading} />
      <Text style={styles.title}>Login</Text>

    </View>

  </View>
  );
};

export default Login;

const FullScreenLoader = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <View style={styles.loaderOverlay}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 👈 full screen background color
},
    container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 20,
    borderRadius: 20,
    marginTop:-30,
},

    banner: {
    width: '100%',
    height: 280, // 👈 control top banner height
},

    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
},

    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'segoe_bold'
  },
    loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
},

    loaderText: {
    marginTop: 12,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
},
});
