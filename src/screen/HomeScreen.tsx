import React from 'react';
import {  View, 
          Text,
          StyleSheet,
          ScrollView,
          Image, 
          TouchableOpacity,
           } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const HomeScreen = () => {
return (
  <View style={styles.root}>

  <SafeAreaView edges={['top']} />
      {/* Main content */}
      <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
       <View style={styles.topRoundedBox}> 
        <View style={styles.horizontalView}>
        <View style={{ flexDirection: 'row' }}>
            <Image
              source={ require('../assets/images/profile.png') }
              style={styles.image}
            />
             <View style={styles.verticalView}>
                <Text style={styles.role}>Clinical Lead</Text>
                <Text style={styles.profileName}>Mr. Norman M. Goldfarb</Text>
             </View>
          </View>
          <View style={styles.notification}>
          <TouchableOpacity
            activeOpacity={2} 
            style={styles.notificationInside}
            onPress={() => console.log('Notifications clicked')}>
            <Image
              source={require('../assets/images/notification.png')}
              style={styles.notificationIcon}
            />
            {/* Badge */}
            <View style={styles.badge}>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>;
       <View style={styles.container}>
         <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Portolo Dashboard</Text>
          <Text style={styles.title1}>Status: Phase III Clinical Trial Active</Text>
         </ScrollView>
       </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: '#E67515', // 👈 FULL window color (status bar included)
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8F7F5', // 👈 your content area
  },
  topRoundedBox: {
    height: 200,
    backgroundColor: '#E67515',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F7F5',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    margin: 16,
    borderRadius: 30,
    marginTop:-90,
},
scrollContent: {
    padding: 16,
  },
title: {
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        marginBottom: 5,
        marginTop: 5,
        color: '#000000',
        fontFamily: 'segoe_bold',
  },  
  title1: {
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
        color: '#48566A',
        fontFamily: 'segoe',
  },  

  horizontalView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginTop: 10,
  },
  verticalView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft : 10,
    marginTop: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    
  },
  role : {
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
        color: '#fff',
        fontFamily: 'segoe',
  },  
  profileName : {
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        color: '#fff',
        fontFamily: 'segoe_bold',
  },  
  notification: {
    width : 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto', //pushes to right
    borderRadius: 6,
    marginRight: 10,
},
notificationIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
},
badge: {
  position: 'absolute',
  top: 6,
  right: 6,
  backgroundColor: '#E67515',
  borderRadius: 10,
  minWidth: 12,
  height: 12,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 3,
},
notificationInside: {
  width: 40,
  height: 40,
  backgroundColor: '#FFFFFF',
  marginLeft: 'auto',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 3, // Android shadow
},
})