import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  flex1: {
    flex: 1,
  },
  walletSection: {
    paddingHorizontal: SIZES.padding,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.gray,
  },
  customBalance: {marginTop: 20, marginBottom: 0},
  buttonSection: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: -15,
    paddingHorizontal: SIZES.radius,
  },
  customButton: {
    flex: 1,
    height: 40,
  },
  chart: {
    marginTop: 40,
  },
  containerFlatlist: {
    paddingHorizontal: SIZES.padding,
  },
  headerFlatlist: {
    marginHorizontal: SIZES.padding,
    marginVertical: 10,
  },
  titleFlatlist: {
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconTopCrypto: {
    width: 20,
    height: 20,
  },
  containerTopCrypto: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChangePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  currentPrice: {
    color: COLORS.white,
    ...FONTS.h4,
  },
  iconArrow: {
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
});
