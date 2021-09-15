import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {setTradeModalVisibility} from '../redux/actions/tabActions';
import {Home, Portfolio, Market, Profile} from '../screens';
import {TabIcon} from '../components';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const Tabs = ({setTradeModalVisibility, isTradeModalVisible}) => {
  const tradeTabButtonOnClickHandle = () => {
    setTradeModalVisibility(!isTradeModalVisible);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => <View style={styles.backgroundTabBar} />,
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label="Home" />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label="Portfolio"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={isTradeModalVisible ? icons.close : icons.trade}
                iconStyle={isTradeModalVisible ? {width: 15, height: 15} : null}
                label={isTradeModalVisible ? 'Close' : 'Trade'}
                isTrade={true}
              />
            );
          },
          tabBarButton: props => (
            <TabBarCustomButton
              {...props}
              onPress={() => tradeTabButtonOnClickHandle()}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.market} label="Market" />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    isTradeModalVisible: state.tab.isTradeModalVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTradeModalVisibility: isVisible => {
      return dispatch(setTradeModalVisibility(isVisible));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

const styles = StyleSheet.create({
  containerButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  backgroundTabBar: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
