import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';
import icons from '../constants/icons';

const LandingPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
      <Text>Hi </Text>
    </View>
  );
};

export default LandingPage;
