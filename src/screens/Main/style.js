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
});
