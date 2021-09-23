import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  walletSection: {
    paddingHorizontal: SIZES.padding,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.gray,
  },
  customBalance: {marginTop: 0, marginBottom: 10},
  headerFolio: {
    ...FONTS.h1,
    color: COLORS.white,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  chart: {
    marginTop: 20,
  },
  title: {
    color: COLORS.white,
    marginTop: 30,
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
    fontWeight: 'bold',
  },
  assetLabel: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
  },
  label: {
    flex: 1,
    color: COLORS.lightGray3,
  },
  containerAsset: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconAssetCrypto: {
    width: 20,
    height: 20,
  },
  itemAsset: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexJustCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  priceAndHold: {
    color: COLORS.white,
    ...FONTS.h4,
    textAlign: 'right',
    lineHeight: 15,
  },
  arrowState: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconArrow: {
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  txtSymbol: {
    color: COLORS.lightGray3,
    textAlign: 'right',
    ...FONTS.body5,
    lineHeight: 15,
  },
});
