// navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screen/DashboardMain';
import SystemAnalytics from '../screen/SystemAnalytics';
import Announcements from '../screen/SystemAnnouncementNotification';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
       screenOptions={{
        headerShown: false,

        // optional (prevents overlay artifacts)
        overlayColor: 'transparent',
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Subscriptions" component={Dashboard} />
      <Drawer.Screen name="SystemAnalytics" component={SystemAnalytics} />
      <Drawer.Screen name="Announcements" component={Announcements} />
      <Drawer.Screen name="BusinessCalender" component={Announcements} />
      <Drawer.Screen name="SystemCheckList" component={Announcements} />
      <Drawer.Screen name="SystemConfigaration" component={Announcements} />
      <Drawer.Screen name="AnnouncementLibrary" component={Announcements} />
      <Drawer.Screen name="SurveyTemplateLibraries" component={Announcements} />
      <Drawer.Screen name="OrganizationChartLibrary" component={Announcements} />
      <Drawer.Screen name="ProcessReceiverLibrary" component={Announcements} />
      <Drawer.Screen name="ProcessTemplateLibrary" component={Announcements} />
      <Drawer.Screen name="ReportLibrary" component={Announcements} />
      <Drawer.Screen name="ForumLibrary" component={Announcements} />
    </Drawer.Navigator>
  );
}