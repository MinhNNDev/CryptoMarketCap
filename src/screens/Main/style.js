import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animated: {
    position: 'absolute',
    left: 0,
    width: '100%',
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.transparentBlack,
  },
});
