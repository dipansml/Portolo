import React from 'react';
import {  View, 
          Text,
          StyleSheet,
          ScrollView,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader  from '../components/CommonHeader';

const HomeScreen = ( { navigation }: any ) => {
return (
  <View style={styles.root}>
      <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
        <View style = {[{ }]}>
          <CommonHeader
            title="Home"
            showLogo={true}
            onMenuPress={() => navigation.openDrawer()}/>
        </View>
       <View style={styles.container}>
         <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Portolo Dashboard</Text>
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
scrollContent: {
    padding: 0,
  },
title: {
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        marginBottom: 5,
        marginLeft: 5,
        marginTop: 10,
        color: '#000000',
        fontFamily: 'segoe_bold',
  },  
})