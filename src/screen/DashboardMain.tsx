import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './HomeScreen';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Resources from './Resources';
import Support from './Support'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DashboardParamList = {
  Home: undefined;
  Resources: undefined;
  AboutUs: undefined;
  ContactUs: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator<DashboardParamList>();

const DashboardMain = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

         // ✅ Safe Area for Bottom Tab
        tabBarStyle: {
          paddingBottom: insets.bottom,   // 🔥 key line
          height: 54 + insets.bottom,     // adjust height dynamically
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },

        //Custom Image Icon
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            icon = require('../assets/images/home.png');
          } else if (route.name === 'Resources') {
            icon = require('../assets/images/ic_resources.png');
          } else if (route.name === 'AboutUs') {
            icon = require('../assets/images/ic_aboutus.png');
          } else if (route.name === 'ContactUs') {
            icon = require('../assets/images/ic_contactus.png');
          } else if (route.name === 'Support') {
            icon = require('../assets/images/ic_support.png');
          }
          return (
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                margin:1,
                //Change color on select
                tintColor: focused ? '#E67515' : 'gray',
              }}
            />
          );
        },

        // ✅ Label Color
        tabBarActiveTintColor: '#E67515',
        tabBarInactiveTintColor: 'gray',

        // ✅ Custom Font
        tabBarLabelStyle: {
          fontFamily: 'SegoeUI',
          fontSize: 11,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Resources" component={Resources} />
      <Tab.Screen name="AboutUs" component={AboutUs} options={{tabBarLabel : 'About Us'}}/>
      <Tab.Screen name="ContactUs" component={ContactUs}  options={{tabBarLabel : 'Contact Us'}}/>
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
};

export default DashboardMain;