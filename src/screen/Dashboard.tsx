import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './HomeScreen';
import TaskScreen from './TaskScreen';
import AnalyticsScreen from './AnalyticsScreen';
import SettingsScreen from './SettingsScreen';

type DashboardParamList = {
  Home: undefined;
  Task: undefined;
  Analytics: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<DashboardParamList>();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // ✅ Custom Image Icon
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            icon = require('../assets/images/home.png');
          } else if (route.name === 'Task') {
            icon = require('../assets/images/task.png');
          } else if (route.name === 'Analytics') {
            icon = require('../assets/images/analytics.png');
          } else if (route.name === 'Settings') {
            icon = require('../assets/images/settings.png');
          }

          return (
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',

                // ✅ Change color on select
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
          fontFamily: 'segoe',
          fontSize: 11,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Dashboard;