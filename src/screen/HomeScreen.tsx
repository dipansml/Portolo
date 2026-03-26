import React from 'react';
import {  View, 
          Text,
          StyleSheet,
          ScrollView,
          Image, 
          TouchableOpacity,
          ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OngoingStudiesList from '../components/OngoingStudiesList';
import { StudyItemType } from '../components/OngoingStudiesList';

const HomeScreen = () => {
return (
  <View style={styles.root}>
  <SafeAreaView edges={['top']} />
      <SafeAreaView style={styles.screen} edges={['left', 'right', 'bottom']}>
        <View style={styles.topRoundedBox}> 
        <View style={styles.horizontalView}>
        <View style={{ flexDirection: 'row' }}>
            <Image
              source={ require('../assets/images/profile.png') }
              style={styles.image}
            />
             <View style={[styles.verticalView, { marginLeft: 5 }]}>
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
      </View>
       <View style={styles.container}>
         <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Portolo Dashboard</Text>
          <Text style={styles.title1}>Status: Phase III Clinical Trial Active</Text>
          <View style={[styles.horizontalViewMenu, { marginTop: 20 }, { marginRight: 5 }]}>
            <ImageBackground
              source={require('../assets/images/dashboard_menu.png')}
              style={[styles.containerMenu, { marginRight: 2 }]}
              imageStyle={{ borderRadius: 20 }}>
              <View style={[styles.horizontalViewMenuInsideView]}>
              <View style={styles.menuIconBack}>
                  <Image
                    source={require('../assets/images/message.png')}
                    style={styles.menuIcon}
                  />
              </View>
               <View style={[styles.menuTextBack, {height: 24}, {width: 40}]}>
                  <Text style={[styles.text, { color: '#fff' }, { fontSize: 14 }, {fontFamily: 'segoe'}]}>
                    New
                  </Text>
              </View>
              </View>
              <View style={[styles.menuInsideView]}>
                <Text style={[styles.textMenuTitle1, { marginTop: 10 }]}>
                    Messages
                </Text>
              </View>
              <View style={[styles.horizontalViewMenuInsideViewWithoutPadding]}>
                <Text style={[styles.textMenuTitle2]}>
                    10
                </Text>
                 <Text style={[styles.textMenuTitle3]}>
                    Unread
                </Text>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../assets/images/dashboard_menu.png')}
              style={[styles.containerMenu, { marginLeft: 2 }]}
              imageStyle={{ borderRadius: 20 }}>
              <View style={[styles.menuIconBack, { margin: 10 }]}>
                  <Image
                    source={require('../assets/images/task.png')}
                    style={[styles.menuIcon,  {tintColor: '#E67515'}]}
                  />
              </View>
              <View style={[styles.menuInsideView]}>
                <Text style={[styles.textMenuTitle1]}>
                    Checklist
                </Text>
              </View>
              <View style={[styles.horizontalViewMenuInsideViewWithoutPadding]}>
                <Text style={[styles.textMenuTitle2]}>
                    80%
                </Text>
                 <Text style={[styles.textMenuTitle3]}>
                    +5%
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.horizontalViewMenu, { marginTop: 8 }, { marginRight: 5 }]}>
              <ImageBackground
                  source={require('../assets/images/dashboard_menu.png')}
                  style={[styles.containerMenu, { marginRight: 2 }]}
                  imageStyle={{ borderRadius: 20 }}>
                  <View style={[styles.menuIconBack, { margin: 10 }]}>
                      <Image
                        source={require('../assets/images/analytics.png')}
                        style={[styles.menuIcon,  {tintColor: '#E67515'}]}
                      />
                  </View>
                  <View style={[styles.menuInsideView]}>
                    <Text style={[styles.textMenuTitle1]}>
                        Performance
                    </Text>
                  </View>
                  <View style={[styles.horizontalViewMenuInsideViewWithoutPadding]}>
                    <Text style={[styles.textMenuTitle2]}>
                        +12%
                    </Text>
                    <Text style={[styles.textMenuTitle3]}>
                        Above Target
                    </Text>
                  </View>
            </ImageBackground>
            <ImageBackground
                  source={require('../assets/images/dashboard_menu.png')}
                  style={[styles.containerMenu, { marginLeft: 2 }]}
                  imageStyle={{ borderRadius: 20 }}>
                  <View style={[styles.menuIconBack, { margin: 10 }]}>
                      <Image
                        source={require('../assets/images/star.png')}
                        style={[styles.menuIcon,  {tintColor: '#E67515'}]}
                      />
                  </View>
                  <View style={[styles.menuInsideView]}>
                    <Text style={[styles.textMenuTitle1]}>
                        Ratings
                    </Text>
                  </View>
                  <View style={[styles.horizontalViewMenuInsideViewWithoutPadding]}>
                    <Text style={[styles.textMenuTitle2]}>
                        4.8
                    </Text>
                    <Text style={[styles.textMenuTitle3]}>
                        20 Participants
                    </Text>
                  </View>
            </ImageBackground>
          </View>
          <View style={[styles.horizontalViewMenu, { marginTop: 20 }, { marginRight: 5 }]}>
              <Text style={[styles.textTitle]}>
                  Ongoing Stadies
              </Text>
              <Text style={[styles.textMenuTitle1, { marginRight: 5 }, { marginTop: 5 },{ fontSize: 14 }, { color: '#E67515' }]}>
                  View All
              </Text>
          </View>
          <View style={styles.list}>
            <OngoingStudiesList 
              onItemPress={(item: StudyItemType, index: number) => {
                console.log('Clicked index:', index);
                console.log('Item:', item);
              }}
            />
          </View>
          {/* <OngoingStudiesList data={yourApiData}/> */}
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
    marginLeft: 10,
    marginRight: 10,
    marginTop:-80,
    borderRadius: 30,
    padding: 10,
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
  title1: {
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
        color: '#48566A',
        fontFamily: 'segoe',
        marginLeft: 5,
  },  

  horizontalView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginTop: 30,
  },

   horizontalViewMenu: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
},

horizontalViewMenuInsideView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 10,
},

horizontalViewMenuInsideViewWithoutPadding: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'baseline',
},

menuInsideView: {
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 10,
},

  verticalView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
 containerMenu: {
  flex: 1,
  height: 120,
  borderRadius: 20,
  overflow: 'hidden',
  justifyContent: 'flex-start', 
  alignItems: 'flex-start'
},
  menuIconBack: {
    width : 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
},

menuTextBack: {
  paddingHorizontal: 2,
  paddingVertical: 2,
  backgroundColor: '#E67515',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},

menuIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
},

text: {
    padding: 0,
  },

  textMenuTitle1: {
    padding: 0,
     color: '#48566A',
     fontSize: 14,
     fontFamily: 'segoe',
  },

  textMenuTitle2: {
    color: '#000000',
    fontSize: 18, 
    fontFamily: 'segoe_bold',
    marginLeft: 10,
  },

  textMenuTitle3: {
    color: '#94A3B8',
    fontSize: 12, 
    fontFamily: 'segoe',
    marginLeft: 5,
    alignItems: 'flex-start',
  },

  textTitle: {
     color: '#000',
    fontSize: 18, 
    fontFamily: 'segoe_bold',
    marginLeft: 5,
  },

  list: {
    padding: 0,
    marginTop: 20,
  },
})