import {StyleSheet} from 'react-native';
import {Chart} from '../../components';
import {COLORS, SIZES, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  itemTabs: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  tabIndicator: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: (SIZES.width - SIZES.radius * 2) / 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray,
  },
  containerButton: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.radius,
  },
  itemList: {
    flex: 1,
    width: SIZES.width,
  },
  containerItem: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  itemCoins: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCoinMarket: {
    width: 20,
    height: 20,
  },
  nameCoinMarket: {
    marginLeft: SIZES.radius,
    color: COLORS.white,
    ...FONTS.h4,
  },
  lineChart: {
    flex: 1,
    alignItems: 'center',
  },
  containerPrice: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  containerChangePrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconArrow: {
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
});
