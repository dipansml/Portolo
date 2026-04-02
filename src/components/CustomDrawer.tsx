// components/CustomDrawer.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform,
         ScrollView, 
 } from 'react-native';
 import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomDrawer(props: any) {
  const { navigation } = props;
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
      <View style={{flex: 1, backgroundColor: '#fff'  }}>
      {/* 🔥 FIXED HEADER (will NOT scroll) */}
      <View style={styles.header}>
        <View  style={styles.userDetail}>
          <View style={styles.user_image_container}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.avatar}
            />
            <View style={styles.badge} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Mr. Norman M. Goldfarb</Text>
            <Text style={styles.role}>Clinical Lead</Text>
            <Text style={styles.role1}>System Administrator</Text>
          </View>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'Subscriptions' && styles.activeItemText
                    ]}>Subscriptions</Text>
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
             <Text 
                style={[
                      styles.item,
                      activeItem === 'SystemAnalytics' && styles.activeItemText
                    ]}>SystemAnalytics</Text>
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
             <Text 
                style={[
                      styles.item,
                      activeItem === 'Announcements' && styles.activeItemText
                    ]}>System Announcements & Notifications</Text>
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
              <Text 
                style={[
                      styles.item,
                      activeItem === 'BusinessCalender' && styles.activeItemText
                    ]}>System Business Calendar</Text>
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
              <Text 
                style={[
                      styles.item,
                      activeItem === 'SystemCheckList' && styles.activeItemText
                    ]}>System Checklist</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'SystemConfigaration' && styles.activeItemText
                    ]}>System Configuration</Text>
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
             <Text 
                style={[
                      styles.item,
                      activeItem === 'AnnouncementLibrary' && styles.activeItemText
                    ]}>Announcement Library</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'SurveyTemplateLibraries' && styles.activeItemText
                    ]}>Form & Survey Template Libraries</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'ForumLibrary' && styles.activeItemText
                    ]}>Forum Library</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'OrganizationChartLibrary' && styles.activeItemText
                    ]}>Organization Chart Library</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'ProcessReceiverLibrary' && styles.activeItemText
                    ]}>Process Receiver Library</Text>
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
            <Text 
                style={[
                      styles.item,
                      activeItem === 'ProcessTemplateLibrary' && styles.activeItemText
                    ]}>Process Template Library</Text>
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
             <Text 
                style={[
                      styles.item,
                      activeItem === 'ReportLibrary' && styles.activeItemText
                    ]}>Report Library</Text>
        </TouchableOpacity> 

        <TouchableOpacity  
            style = {styles.horizontalView}
            onPress={() => {navigation.replace('Login')}}>
          <Image
            source={require('../assets/images/logout.png')}
            style={styles.logout}
          />
        <Text style={styles.logoutText}>Sign out</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#00000000',
    borderRadius: 0,
  },
  header: {
    height:150,
    backgroundColor: '#E67515',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  userDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    backgroundColor: '#00000000',
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }, 
divider: {
    height:1,
    width : 'auto',
    backgroundColor: '#E0E6EF',
    marginLeft: 10,
    marginRight: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },
  role: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
    marginTop:2,
  },
  role1: {
    alignSelf: 'flex-start',
    color: '#F84003',
    backgroundColor: '#F1E6DE',
    fontSize: 12,
    padding: 2,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
    borderRadius: 2,
    marginTop: 4,
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
  activeItemText: {
    padding: 5,
    paddingLeft: 15,
    fontSize: 14,
    color: '#000',
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
  backgroundColor: '#FFD99480', 
},
user_image_container: {
    marginLeft: 0,
   
},
badge: {
  position: 'absolute',
  bottom: 4,  
  right: 4,
  backgroundColor: '#F84003',
  borderWidth:1,
  borderColor: '#fff',
  borderRadius: 10,
  minWidth: 15,
  height: 15,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 3,
},
horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 30,
  },
logout: {
    width: 20,
    height: 20,
  },
 logoutText: {
    color: '#F84003',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
    marginLeft:5,
  },  
});