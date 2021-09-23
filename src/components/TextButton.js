import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({label, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {...containerStyle}]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: COLORS.gray1,
  },
  label: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});
