import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader  from '../components/CommonHeader';

const ContactUs = ({ navigation }: any ) => {
  return (
     <View style={styles.root}>
      <SafeAreaView style={styles.screen} edges={['top','left', 'right', 'bottom']}>
        <View style = {[{ }]}>
          <CommonHeader
            title="Contact Us"
            showLogo={false}
            onMenuPress={() => navigation.openDrawer()}/>
        </View>
       <View style={styles.container}>
         <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>

         </ScrollView>
       </View>
      </SafeAreaView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8F7F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F7F5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
},
})