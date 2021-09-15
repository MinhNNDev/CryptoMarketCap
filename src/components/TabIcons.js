import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {FONTS, COLORS} from '../constants';

const TabIcon = props => {
  const {focused, icon, iconStyle, label, isTrade} = props;
  if (isTrade) {
    return (
      <View style={styles.container}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              tintColor: COLORS.white,
              ...iconStyle,
            },
          ]}
        />
        <Text style={styles.txtTrade}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.center}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              tintColor: focused ? COLORS.white : COLORS.secondary,
              ...iconStyle,
            },
          ]}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h5,
          }}>
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.black,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  txtTrade: {
    color: COLORS.white,
    ...FONTS.h5,
  },
});
