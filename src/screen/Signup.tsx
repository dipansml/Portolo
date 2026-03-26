import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView, TextInput, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

const CustomHeader = () => {
  const navigation = useNavigation();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const windowHeight = Dimensions.get('window').height;

  const handleLogin = () => {
    // placeholder sign-in handler — replace with real submit logic
    setLoading(true);
    console.log('Sign In pressed');
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>

        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Image
            source={require('../assets/images/Mask group.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* Center Title */}
        <Text style={styles.title}>Register</Text>

      </View>

      <ImageBackground
        source={require('../assets/images/registration_banner.png')}
        style={styles.image}
      >
        {/* 🔥 Overlay Text */}
        <View style={styles.overlay}>
          <Text style={styles.heading}>Join Portolo</Text>
          <Text style={styles.subText}>
            Empowering healthcare professionals to connect and collaborate.
          </Text>
        </View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Platform.OS === 'ios' ? { minHeight: windowHeight + 120, paddingBottom: 40 } : { paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
       <View style={styles.content}>
        <View style={styles.labelRow}>
          <Text style={styles.headingForTextFeild}>First Name</Text>
          <Text style={styles.required}> *</Text>
        </View>

        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
        />

        <View style={styles.labelRow}>
          <Text style={styles.headingForTextFeild}>Last Name</Text>
          <Text style={styles.required}> *</Text>
        </View>

        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
        />

        <View style={styles.labelRow}>
          <Text style={styles.headingForTextFeild}>Job Title</Text>
          <Text style={styles.required}> *</Text>
        </View>

        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
        />

        <View style={styles.labelRow}>
          <Text style={styles.headingForTextFeild}>Department</Text>
          <Text style={styles.required}> *</Text>
        </View>

        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
        />

        <View style={styles.labelRow}>
          <Text style={styles.headingForTextFeild}>Organisation</Text>
          <Text style={styles.required}> *</Text>
        </View>


        <TextInput
          placeholder=""
          style={styles.input}
          placeholderTextColor="#999"
        />

        {/* Agreement checkbox + links */}
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={[styles.checkbox, agreed && styles.checkboxChecked]}
            onPress={() => setAgreed(s => !s)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: agreed }}
          >
            {agreed && <View style={styles.checkboxInner} />}
          </TouchableOpacity>

          <Text style={styles.agreeText}>
            I agree to the{' '}
            <Text style={styles.linkText} onPress={() => console.log('Terms clicked')}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.linkText} onPress={() => console.log('Privacy clicked')}>Privacy Policy</Text>
            .
          </Text>
        </View>

       <TouchableOpacity
                     style={[styles.button, loading && { opacity: 0.7 }]}
                     onPress={handleLogin}
                     disabled={loading}
                   >
                     <View style={styles.buttonContent}>
                       <Text style={styles.buttonText}>Join Portolo</Text>
       
                       <Image
                         source={require('../assets/images/arrow_right.png')}
                         style={styles.buttonIcon}
                       />
                     </View>
                   </TouchableOpacity>

                    <Text style={styles.haveaccountText}>
            Already have an account?{' '}
            <Text style={styles.linkText} onPress={() => console.log('Login')}>Terms of Service</Text>
            {' '}
          </Text>

      </View>

  </ScrollView>

    </SafeAreaView>
    
  )
};

export default CustomHeader;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  left: {
    position: 'absolute',
    left: 16,
  },

  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },

  image: {
    width: width > 600 ? '100%' : '100%',
    height: width > 600 ? 300 : 200,
    alignSelf: 'center',
    resizeMode: 'cover',
  },

  // 🔥 Added styles only (no changes above)
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    paddingLeft: 25,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },

    headingForTextFeild: {
    color: '#120101ff',
    fontSize: 16,
    //fontWeight: '700',
    fontFamily: 'SegoeUI',
    marginBottom: 0,
  },

  subText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'SegoeUI',
  },
  content: {
  flexDirection: 'column',
  padding: 16,
  marginTop: 16,
  paddingLeft: 25,
  paddingRight: 25,
},
labelRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
},
required: {
  color: 'red',
},
input: {
  paddingLeft: 10,
  height: 45,
  borderWidth: 1,
  borderColor: '#D0D5DD', // light gray border
  borderRadius: 12,
 // paddingHorizontal: 15,
  fontSize: 14,
  backgroundColor: '#fff',
  marginBottom: 12,
  //marginTop: 8,
  alignSelf: 'stretch',
},
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#FF7A00',
    borderColor: '#FF7A00',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  agreeText: {
    color: '#39404A',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'SegoeUI',
  },
  haveaccountText: {
    color: '#39404A',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '200',
    fontFamily: 'SegoeUI',
  },
  linkText: {
    color: '#FF7A00',
    fontFamily: 'SegoeUI',
  },
  buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',   // 👈 vertical center
  justifyContent: 'center', // 👈 horizontal center
},

buttonText: {
  color: '#fff',
  fontSize: 14,
  fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
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
  
  button: {
    height: 40,
    backgroundColor: '#E67515',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
},

});