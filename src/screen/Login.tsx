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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  

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
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.title_normal}>Integrated Intelligence for Clinical Research</Text>
      <Text style={styles.input_header}>Email Address</Text>
  
      <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <Image
          source={require('../assets/images/ic_email.png')}
          style={styles.icon}
        />

        <TextInput
          style={[styles.input, errors.email && styles.errorInput]}
          placeholder="name@institution.edu"
          value={email}
          onChangeText={t => {
            setEmail(t);
            setErrors({ ...errors, email: undefined });
          }}
        />
      </View>

      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
    </View>

    <Text style={styles.input_header}>Password</Text>
      <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <Image
          source={require('../assets/images/ic_password.png')}
          style={styles.icon}
        />

        <TextInput
          style={[styles.input, errors.password && styles.errorInput]}
          placeholder="******"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={t => {
            setPassword(t);
            setErrors({ ...errors, password: undefined });
          }}
        />

         <TouchableOpacity
              style={[styles.eyeIcon, loading && { opacity: 0.5 }]}
              onPress={() => !loading && setShowPassword(p => !p)}
              disabled={loading}
            >
              <Image
                source={
                  showPassword
                    ? require('../assets/images/pass_visible.png')
                    : require('../assets/images/pass_invisible.png')
                }
                style={styles.eyeImage}
              />
            </TouchableOpacity>
      </View>

  {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
</View>     
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
        marginBottom: 10,
        color: '#000000',
        fontFamily: 'segoe_bold',
  },
  title_normal: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
        color: '#48566A',
        fontFamily: 'segoe',
  },

  input_header: {
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 5,
        color: '#48566A',
        fontFamily: 'segoe_bold',
        width: '100%'
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
    
    inputContainer: {
        marginBottom: 10,
        width: '100%',
},

  input: {
    padding: 4,
    fontSize: 12,
    width: '100%',
    height: 40,
    flex: 1,
    borderColor: "#00000000",
    paddingVertical: 12,
    fontFamily: "segoe",
    color: '#000',
},

  errorInput: {
    borderColor: 'red',
},
  errorText: {
      color: 'red',
      marginTop: 4,
      fontSize: 13,
},

inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#E0E6EF',
  borderRadius: 6,
  paddingHorizontal: 10,
},

icon: {
  width: 16,
  height: 16,
  marginRight: 4,
  tintColor: '#888', // optional
},
eyeIcon: {
    position: 'absolute',
    right: 12,
    height: '100%',
    justifyContent: 'center',
  },
eyeImage: {
    width: 22,
    height: 22,
    tintColor: '#666',
    resizeMode: 'contain',
  },
});
