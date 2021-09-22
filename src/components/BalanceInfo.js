import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const BalanceInfo = ({title, displayAmount, changePct, containerStyle}) => {
  return (
    <View style={{...containerStyle}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.figures}>
        <Text style={styles.unit}>$ </Text>
        <Text style={styles.amount}>{displayAmount.toLocaleString()}</Text>
        <Text style={styles.unit}> USD</Text>
      </View>
      <View style={styles.figures}>
        {changePct !== 0 && (
          <Image
            source={icons.upArrow}
            style={[
              styles.iconArrow,
              {
                tintColor: changePct > 0 ? COLORS.lightGreen : COLORS.red,
                transform:
                  changePct > 0 ? [{rotate: '45deg'}] : [{rotate: '125deg'}],
              },
            ]}
          />
        )}
        <Text
          style={[
            styles.percen,
            {
              color:
                changePct === 0
                  ? COLORS.lightGray3
                  : changePct > 0
                  ? COLORS.lightGreen
                  : COLORS.red,
            },
          ]}>
          {changePct.toFixed(2)}%
        </Text>
        <Text style={styles.dayChange}>7day change</Text>
      </View>
    </View>
  );
};

export default BalanceInfo;

const styles = StyleSheet.create({
  title: {
    color: COLORS.lightGray3,
    ...FONTS.h3,
  },
  figures: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  unit: {
    ...FONTS.h3,
    color: COLORS.lightGray3,
  },
  amount: {
    marginLeft: SIZES.base,
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  iconArrow: {
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  percen: {
    marginLeft: SIZES.base,
    alignSelf: 'flex-end',
    ...FONTS.h4,
  },
  dayChange: {
    marginLeft: SIZES.radius,
    alignSelf: 'flex-end',
    color: COLORS.lightGray3,
    ...FONTS.h5,
  },
});
