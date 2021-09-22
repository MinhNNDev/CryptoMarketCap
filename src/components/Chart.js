import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';
import moment from 'moment';
import {COLORS, FONTS, SIZES} from '../constants';

const Chart = ({containerStyle, chartPrices}) => {
  let startUnixTimestamp = moment().subtract(7, 'day').unix();
  let data = chartPrices
    ? chartPrices?.map((item, index) => {
        // console.log('x: ', startUnixTimestamp + (index + 1) * 3600, 'y:', item);
        return {
          x: startUnixTimestamp + (index + 1) * 3600,
          y: item,
        };
      })
    : [];
  let points = monotoneCubicInterpolation({data, range: 40});

  const formatNumber = (value, roundingPoint) => {
    if (value > 1e9) {
      return `${(value / 1e9).toFixed(roundingPoint)}B`;
    } else if (value > 1e6) {
      return `${(value / 1e6).toFixed(roundingPoint)}M`;
    } else if (value > 1e3) {
      return `${(value / 1e3).toFixed(roundingPoint)}K`;
    } else {
      return value.toFixed(roundingPoint);
    }
  };

  const getAxisLabelValue = () => {
    if (chartPrices !== undefined) {
      let min = Math.min(...chartPrices);
      let max = Math.max(...chartPrices);

      let mid = (min + max) / 2;
      let minMid = (min + mid) / 2;
      let maxMid = (max + mid) / 2;

      let roundingPoint = 2;
      return [
        formatNumber(max, roundingPoint),
        formatNumber(maxMid, roundingPoint),
        formatNumber(minMid, roundingPoint),
        formatNumber(min, roundingPoint),
      ];
    } else {
      return [];
    }
  };

  return (
    <View style={{...containerStyle}}>
      <View style={styles.Axis}>
        {getAxisLabelValue().map((item, index) => {
          return (
            <Text key={index} style={styles.labelAxis}>
              {item}
            </Text>
          );
        })}
      </View>
      {data.length > 0 && (
        <ChartPathProvider data={{points, smoothingStrategy: 'bezier'}}>
          <ChartPath
            height={150}
            width={SIZES.width}
            stroke={COLORS.lightGreen}
            strokeWidth={2}
          />
          <ChartDot style={styles.descDot}>
            <View style={styles.dot}>
              <View style={styles.insideDot} />
            </View>
            <ChartYLabel style={styles.ylabel} />
            <ChartXLabel style={styles.xlabel} />
          </ChartDot>
        </ChartPathProvider>
      )}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  descDot: {
    position: 'absolute',
    left: -35,
    width: 80,
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  insideDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGreen,
  },
  xlabel: {
    marginTop: 5,
    color: COLORS.lightGray2,
    lineHeight: 15,
    ...FONTS.h5,
  },
  ylabel: {
    color: COLORS.white,
    ...FONTS.h5,
  },
  Axis: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  labelAxis: {
    color: COLORS.lightGray3,
    ...FONTS.h5,
  },
});
