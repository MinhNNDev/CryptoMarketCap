import React, {useEffect, useRef} from 'react';
import {Animated, View, Modal} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './style';
import {IconTextButton} from '../../components';
import {icons, SIZES} from '../../constants';

const Main = ({isTradeModalVisible, children}) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible, modalAnimatedValue]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 250],
  });

  return (
    <View style={styles.container}>
      {children}
      {/* Overlay  */}
      {isTradeModalVisible && (
        <Animated.View style={styles.overlay} opacity={modalAnimatedValue} />
      )}

      {/* Modal */}
      <Animated.View style={[styles.animated, {top: modalY}]}>
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log('Transfer')}
        />
        <IconTextButton
          label="Withdraw"
          icon={icons.withdraw}
          containerStyle={{marginTop: SIZES.base}}
          onPress={() => console.log('Withdraw')}
        />
      </Animated.View>
    </View>
  );
};

const mapStateToProps = state => ({
  isTradeModalVisible: state.tab.isTradeModalVisible,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Main);
