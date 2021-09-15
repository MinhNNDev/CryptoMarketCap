/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const IconTextButton = ({label, icon, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}>
      <Image source={icon} resizeMode="contain" style={styles.iconStyle} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  iconStyle: {width: 20, height: 20},
  label: {
    marginHorizontal: SIZES.base,
    ...FONTS.h3,
  },
});
