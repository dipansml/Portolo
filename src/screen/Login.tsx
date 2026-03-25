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
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { SafeAreaView } from 'react-native-safe-area-context';

  const screenWidth = Dimensions.get('window').width;

  type RootStackParamList = {
  Dashboard: undefined;
  Signup: undefined
};

  type SplashProps = {
    navigation: NativeStackNavigationProp<
      RootStackParamList,
      'Dashboard',
      'Signup'
    >;
  };


const Login = ({ navigation }: SplashProps) =>  {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = () => {
      const newErrors: { email?: string; password?: string } = {};
      console.log('email:', email)
      if (!email.trim()) newErrors.email = 'Please enter email';
      if (!password.trim()) newErrors.password = 'Please enter password';
      setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
  if (!validateLogin()) return;
    console.log('login click')
    navigation.replace('Dashboard');
 }

 


const handleSignup = () => {
  navigation.navigate('Signup');
};

 const openCms = (text: string) => {
  console.log(text)
};

 const forgotPassClick = () => {
  console.log("Forgot pass click")
};

  return (
   <View style={styles.screen}>
    
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
             if (errors.password) {
                setErrors(prev => ({ ...prev, password: undefined }));
            }
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
     <View style={styles.container_horizontal_without_space}>
        <Text style={styles.errorText1}>
          {errors.password ? errors.password : ''} {/* 👈 keeps space */}

        </Text>

        <Text style={styles.forget_pass} onPress={forgotPassClick}>
          Forgot Password?
        </Text>
     </View>
          <TouchableOpacity
              style={[styles.button, loading && { opacity: 0.7 }]}
              onPress={handleLogin}
              disabled={loading}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Sign In</Text>

                <Image
                  source={require('../assets/images/arrow_right.png')}
                  style={styles.buttonIcon}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.container_horizontal}>
                <View style={styles.line} />
                <Text style={styles.text}>New to Portolo?</Text>
                <View style={styles.line} />
            </View>
             <TouchableOpacity
              style={[styles.button_border, loading && { opacity: 0.7 }]}
              onPress={handleSignup}
              disabled={loading}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText_black}>Join Portolo</Text>
              </View>
            </TouchableOpacity>
      </View>     
      <View style={styles.container_horizontal1}>
      <Text style={styles.link} onPress={() => openCms('TermsOfUse')}>
        Terms of Use
      </Text>

      <Text style={styles.separator}> {'\u2022'} </Text>

      <Text style={styles.link} onPress={() => openCms('siteMap')}>
        Site Map
      </Text>

      <Text style={styles.separator}> {'\u2022'} </Text>

      <Text style={styles.link} onPress={() => openCms('privacy')}>
        Privacy Policy
      </Text>
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
        marginHorizontal: 10,
        fontSize: 14,
        color: '#48566A',
        fontFamily: 'segoe_semibold',
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
        backgroundColor: '#00000000',
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
 

inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#E0E6EF',
  backgroundColor: '#F8FAFC',
  borderRadius: 12,
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
    width: 20,
    height: 20,
    tintColor: '#666',
    resizeMode: 'contain',
  },
  button: {
    height: 40,
    backgroundColor: '#E67515',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
},

button_border: {
    height: 40,
    borderColor: '#E67515',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
},

buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',   // 👈 vertical center
  justifyContent: 'center', // 👈 horizontal center
},

buttonText: {
  color: '#fff',
  fontSize: 14,
  fontFamily: 'segoe_bold',
  textAlignVertical: 'center', // 👈 Android fix
},


buttonText_black: {
  color: '#000',
  fontSize: 14,
  fontFamily: 'segoe_bold',
  textAlignVertical: 'center', // 👈 Android fix
},

buttonIcon: {
  width: 14,
  height: 14,
  marginLeft: 6,
  tintColor: '#fff',
  resizeMode: 'contain',
  marginTop: 2, // 👈 prevents distortion
},

 container_horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },


  container_horizontal1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E6EF',
  },
  link: {
    color: '#48566A',
    fontSize: 12,
    fontFamily: "segoe_bold"
  },
  separator: {
    color: '#48566A',
    fontSize: 20,
    marginHorizontal: 4,
  },

 container_horizontal_without_space: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
},

errorText1: {
  color: 'red',
  fontSize: 12,
  flex: 1,          // 👈 reserves space always
  marginRight: 10,
  marginTop:5,
  fontFamily: "segoe",
},

errorText: { 
   color: 'red',
   marginTop: 4,
   fontSize: 12,
   flexWrap: 'wrap',
   fontFamily: "segoe",
  },

forget_pass: {
  fontSize: 12,
  color: '#E67515',
  fontFamily: 'segoe_bold',
  marginTop:5,
},
});
