import React from 'react';
import {  View, 
          StyleSheet,
          ScrollView,
          Image,
          ImageBackground,
          Text,
          Platform,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader  from '../components/CommonHeader';

const HomeScreen = ( { navigation }: any ) => {
return (
  <View style={styles.root}>
      <SafeAreaView style={styles.screen} edges={['top','left', 'right', 'bottom']}>
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
              <View style={styles.bannerWrapper}>
                <Image
                  source={require('../assets/images/home_banner.png')}
                  style={styles.bannerImage}
                />
                </View>
              <ImageBackground
                    source={require('../assets/images/home_banner1.png')}
                    style={styles.bannerImageBackWithText}
                    imageStyle={styles.bannerRadius}
                  >
                    <View style={styles.overlayContent}>
                      <Text style={styles.titleText}>PROBLEM</Text>
                      <Text style={styles.subtitleText}>
                        Clinical research is essential. Today, 
                        it is too slow and costly. Conventional 
                        technology is not the answer.
                      </Text>
                    </View>
              </ImageBackground>
              <ImageBackground
                    source={require('../assets/images/home_banner2.png')}
                    style={styles.bannerImageBackWithText}
                    imageStyle={styles.bannerRadius}
                  >
                    <View style={styles.overlayContent}>
                      <Text style={styles.titleText}>IDEA</Text>
                      <Text style={styles.subtitleText}>
                        AI can complement humans in clinical 
                        research but, for the foreseeable future, 
                        cannot replace them.
                      </Text>
                    </View>
              </ImageBackground>
              <ImageBackground
                    source={require('../assets/images/home_banner3.png')}
                    style={styles.bannerImageBackWithText}
                    imageStyle={styles.bannerRadius}
                  >
                    <View style={styles.overlayContent}>
                      <Text style={styles.titleText}>SOLUTION</Text>
                      <Text style={styles.subtitleText}>
                        ClIntegrated Intelligence — combining the 
                        best aspects of human and artificial intelligence — 
                        can achieve results superior to either alone.
                      </Text>
                    </View>
              </ImageBackground>
              <View style={styles.textContent}>
                <Text style={styles.titleTextHeader}>About Portolo</Text>
                <Text style={[styles.subtitleTextContent, {marginTop: 5}]}>
                          Have you ever wondered about the chaos AI is layering onto 
                          an already messy industry? Portolo brings order to the chaos 
                          by applying integrated intelligence (people + AI) in a world 
                          model of clinical research to enable business processes, 
                          messages and data to flow smoothly within and across 
                          organizations. When you implement your processes on 
                          Portolo, you gain speed, efficiency, reliability, quality, control, 
                          transparency and more. In simple terms, if you think of AI 
                          agents as raisins, Portolo is the raisin bread, and a lot more.
                </Text>
            </View>
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
    padding: 10
},
scrollContent: {
    padding: 0,
    width: '100%',
  },
  
bannerImage: {
    width:'100%',
    height: 200,
    borderRadius: 20,
    resizeMode: 'contain',
    overflow: 'hidden',
    marginBottom: 5,
},
bannerImageBackWithText: {
    height: 100,
    resizeMode: 'contain',
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 5,
    padding:5,
},

bannerWrapper: {
    width: '100%',
},
bannerRadius: {
    borderRadius: 10,
    padding: 0,
  },
overlayContent: {
    paddingLeft: 15,
    paddingRight: 40,
    justifyContent: 'center',
  },  
titleText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 3,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },

 subtitleText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
    marginRight: '16%',
  },

  textContent: {
    justifyContent: 'center',
    marginTop:10,
  }, 

  titleTextHeader: {
    fontSize: 16,
    color: '#000',
    marginBottom: 3,
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI-Bold' : 'segoe_bold',
  },

  subtitleTextContent: {
    fontSize: 12,
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'SegoeUI' : 'segoe',
  },

})