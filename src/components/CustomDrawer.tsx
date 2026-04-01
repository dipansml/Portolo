// components/CustomDrawer.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform,
         ScrollView 
 } from 'react-native';

export default function CustomDrawer(props: any) {
  const { navigation } = props;
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
      <View style={{flex: 1, backgroundColor: '#fff'  }}>
      {/* 🔥 FIXED HEADER (will NOT scroll) */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.avatar}
        />
        <View style={styles.headerContent}>
          <Text style={styles.name}>Mr. Norman M. Goldfarb</Text>
          <Text style={styles.role}>Clinical Lead</Text>
        </View>
      </View>

      {/* 🔥 SCROLLABLE CONTENT */}
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 0,}}>

        <TouchableOpacity
            style={[
                      styles.menuItem,
                      activeItem === 'Dashboard' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('Dashboard');
                navigation.navigate('Dashboard');
              }}>
            <Text style={styles.section1}>HOME</Text>
          </TouchableOpacity>

        <View style={styles.divider} />

        {/* SYSTEM */}
        <Text style={[styles.section, { marginBottom: 10 }]}>SYSTEM</Text>
        <TouchableOpacity
            style={[
                      styles.subMenuItem,
                      activeItem === 'Subscriptions' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('Subscriptions');
                navigation.navigate('Subscriptions');
              }}>
            <Text style={styles.item}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[
                      styles.subMenuItem,
                      activeItem === 'SystemAnalytics' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('SystemAnalytics');
                navigation.navigate('SystemAnalytics');
              }}>
            <Text style={styles.item}>SystemAnalytics</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'Announcements' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('Announcements');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>System Announcements & Notifications</Text>
        </TouchableOpacity>  
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'BusinessCalender' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('BusinessCalender');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>System Business Calendar</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'SystemCheckList' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('SystemCheckList');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>System Checklist</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'SystemConfigaration' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('SystemConfigaration');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>System Configuration</Text>
        </TouchableOpacity> 
        <View style = {styles.divider}/> 
      {/* LIBRARIES HEADER */} 
        <Text style={[styles.section, { marginBottom: 10 }]}>LIBRARIES</Text> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'AnnouncementLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('AnnouncementLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Announcement Library</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'SurveyTemplateLibraries' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('SurveyTemplateLibraries');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Form & Survey Template Libraries</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'ForumLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('ForumLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Forum Library</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'OrganizationChartLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('OrganizationChartLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Organization Chart Library</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'ProcessReceiverLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('ProcessReceiverLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Process Receiver Library</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'ProcessTemplateLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('ProcessTemplateLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Process Template Library</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            style={[
                    styles.subMenuItem,
                    activeItem === 'ReportLibrary' && styles.activeMenuItem
                    ]}
              onPress={() => {
                setActiveItem('ReportLibrary');
                navigation.navigate('Announcements');
              }}>
            <Text style={styles.item}>Report Library</Text>
        </TouchableOpacity> 
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#00000000',
    borderRadius: 0,
  },
  header: {
    height:150,
    backgroundColor: '#e86f0c',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    backgroundColor: '#00000000',
    marginLeft: 10,
    flexDirection: 'column',
  }, 
divider: {
    height:1,
    width : 'auto',
    backgroundColor: '#E0E6EF',
    marginLeft: 10,
    marginRight: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },
  role: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
  },
  section: {
    marginTop: 20,
    marginLeft: 15,
    color: '#48566A',
     fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },
section1: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    color: '#48566A',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },

  item: {
    padding: 5,
    paddingLeft: 15,
    fontSize: 14,
    color: '#48566A',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
  },
  activeItem: {
    backgroundColor: '#FFD99480',
    color: '#000',
},
menuItem: {
  paddingVertical: 10,
},

subMenuItem: {
    height: 40,
    justifyContent: 'center',
},

activeMenuItem: {
  backgroundColor: '#FFD99480', // 🔥 highlight
},
});