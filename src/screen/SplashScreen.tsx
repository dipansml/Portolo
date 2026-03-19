import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Splash'
  >;
};

const SplashScreen = ({ navigation }: SplashProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirectUser();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const redirectUser = async () => {
   navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
