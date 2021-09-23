import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const HeaderBar = ({title}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.white,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
