import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {LineChart} from 'react-native-chart-kit';
import {getCoinMarket} from '../../redux/actions/coinActions';

import {Main} from '../';
import {TextButton, HeaderBar} from '../../components';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {styles} from './style';

const marketTab = [
  {
    id: 1,
    title: 'Cryptoassets',
  },
  {
    id: 2,
    title: 'Exchanges',
  },
];

const marketTabs = marketTab.map(tab => ({
  ...tab,
  ref: React.createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = marketTabs.map((_, i) => i * SIZES.width);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });
  return (
    <Animated.View
      style={[
        styles.tabIndicator,
        {
          transform: [
            {
              translateX: translateX,
            },
          ],
        },
      ]}
    />
  );
};

const Tabs = ({scrollX, onPressTabsMarket}) => {
  const [measureLayout, setMeasureLayout] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    let ml = [];
    marketTabs.forEach(mt => {
      mt?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });
          if (ml.length === marketTabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, []);

  return (
    <View ref={containerRef} style={styles.row}>
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {marketTabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPressTabsMarket(index)}
            style={styles.flex}>
            <View ref={item.ref} style={styles.itemTabs}>
              <Text style={{color: COLORS.white, ...FONTS.h4}}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Market = props => {
  const {coins, getCoins} = props;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const marketTabScrollViewRef = useRef();
  const onPressTabsMarket = useCallback(tabIndex => {
    marketTabScrollViewRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  });

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  const renderTabBar = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gray,
        }}>
        <Tabs scrollX={scrollX} onPressTabsMarket={onPressTabsMarket} />
      </View>
    );
  };

  const renderList = () => {
    return (
      <Animated.FlatList
        ref={marketTabScrollViewRef}
        data={marketTabs}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemList}>
              <FlatList
                data={coins}
                keyExtractor={items => items.id}
                renderItem={({item, index}) => {
                  let priceColor =
                    item.price_change_percentage_7d_in_currency === 0
                      ? COLORS.lightGray3
                      : item.price_change_percentage_7d_in_currency > 0
                      ? COLORS.lightGreen
                      : COLORS.red;
                  return (
                    <View style={styles.containerItem}>
                      {/* Coins */}
                      <View style={styles.itemCoins}>
                        <Image
                          source={{uri: item.image}}
                          style={styles.iconCoinMarket}
                        />
                        <Text style={styles.nameCoinMarket}>{item.name}</Text>
                      </View>
                      {/* LineChart */}
                      <View style={styles.lineChart}>
                        <LineChart
                          withVerticalLabels={false}
                          withHorizontalLabels={false}
                          withDots={false}
                          withInnerLines={false}
                          withVerticalLines={false}
                          withOuterLines={false}
                          data={{
                            datasets: [
                              {
                                data: item.sparkline_in_7d.price,
                                strokeWidth: 1,
                              },
                            ],
                          }}
                          width={100}
                          height={50}
                          chartConfig={{color: () => priceColor}}
                          bezier
                          style={{paddingRight: 0}}
                        />
                      </View>
                      {/* Figures */}
                      <View style={styles.containerPrice}>
                        <Text style={{color: COLORS.white, ...FONTS.h4}}>
                          ${item.current_price}
                        </Text>
                        <View style={styles.containerChangePrice}>
                          {item.price_change_percentage_7d_in_currency !==
                            0 && (
                            <Image
                              source={icons.upArrow}
                              style={[
                                styles.iconArrow,
                                {
                                  tintColor:
                                    item.price_change_percentage_7d_in_currency >
                                    0
                                      ? COLORS.lightGreen
                                      : COLORS.red,
                                  transform:
                                    item.price_change_percentage_7d_in_currency >
                                    0
                                      ? [{rotate: '45deg'}]
                                      : [{rotate: '125deg'}],
                                },
                              ]}
                            />
                          )}
                          <Text
                            style={{
                              color: priceColor,
                              ...FONTS.h5,
                              marginLeft: SIZES.space,
                              lineHeight: SIZES.font,
                            }}>
                            {item.price_change_percentage_7d_in_currency.toFixed(
                              2,
                            )}
                            %
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    );
  };

  const renderButton = () => {
    return (
      <View style={styles.containerButton}>
        <TextButton label="USD" />
        <TextButton
          label="% 7d"
          containerStyle={{marginHorizontal: SIZES.base}}
        />
        <TextButton label="Top" />
      </View>
    );
  };

  return (
    <Main>
      <View style={styles.container}>
        {/* {Header} */}
        <HeaderBar title="Market" />
        {/* {Tabbar} */}
        {renderTabBar()}
        {/* {Button} */}
        {renderButton()}
        {/* {List} */}
        {renderList()}
      </View>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    coins: state.coin.coins,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoins: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page,
        ),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
