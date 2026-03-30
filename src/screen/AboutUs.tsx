import React from 'react';
import { View, Text } from 'react-native';
import CommonHeader  from '../components/CommonHeader';

const AboutUs = () => {
  return (
    <View>
       <View style={{ flex: 1 }}>
          <CommonHeader
            title="About us"
            showLogo={false}
            onMenuPress={() => console.log('menu press')}
          />
        </View>
    </View>
  );
};

export default AboutUs;