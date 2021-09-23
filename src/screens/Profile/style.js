import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  flex1: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  containerInfo: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
  },
  info: {
    flex: 1,
  },
  containerVerify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVerified: {
    width: 20,
    height: 20,
  },
  containerOptions: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  valueOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconToRight: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
});
