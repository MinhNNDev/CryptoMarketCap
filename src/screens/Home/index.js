import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {getHoldings} from '../../redux/actions/holdActions';
import {getCoinMarket} from '../../redux/actions/coinActions';

import {Main} from '../';
import {BalanceInfo, IconTextButton, Chart} from '../../components';
import {holdings} from '../../constants/dummy';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {styles} from './style';

const Home = props => {
  const {getHold, getCoins, myHoldings, coins} = props;

  const [selectCoin, setSelectCoin] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getHold(holdings);
      getCoins();
    }, []),
  );

  // console.log('$ Coins $: ', coins);

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0,
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 10;

  const renderWalletSection = () => {
    return (
      <View style={styles.walletSection}>
        <BalanceInfo
          title="Your wallet"
          displayAmount={totalWallet / 1000}
          changePct={percChange}
          containerStyle={styles.customBalance}
        />
        <View style={styles.buttonSection}>
          <IconTextButton
            label="Transfer"
            icon={icons.send}
            containerStyle={{flex: 1, height: 40, marginRight: SIZES.radius}}
            onPress={() => console.log('Transfer')}
          />
          <IconTextButton
            label="Withdraw"
            icon={icons.withdraw}
            containerStyle={styles.customButton}
            onPress={() => console.log('Withdraw')}
          />
        </View>
      </View>
    );
  };

  return (
    <Main>
      <View style={styles.container}>
        {renderWalletSection()}
        <Chart
          containerStyle={styles.chart}
          chartPrices={
            selectCoin
              ? selectCoin?.sparkline_in_7d?.price
              : coins[0]?.sparkline_in_7d?.price
          }
        />
        <View style={styles.headerFlatlist}>
          <Text style={styles.titleFlatlist}>Top Cryptocurrency</Text>
        </View>
        <FlatList
          data={coins}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.containerFlatlist}
          renderItem={({item}) => {
            let priceColor =
              item.price_change_percentage_7d_in_currency === 0
                ? COLORS.lightGray3
                : item.price_change_percentage_7d_in_currency > 0
                ? COLORS.lightGreen
                : COLORS.red;
            return (
              <>
                <TouchableOpacity
                  onPress={() => setSelectCoin(item)}
                  style={styles.containerTopCrypto}>
                  <View style={{width: 35}}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.iconTopCrypto}
                    />
                  </View>
                  <View style={styles.flex1}>
                    <Text style={{color: COLORS.white, ...FONTS.h3}}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.currentPrice}>
                      ${item.current_price.toLocaleString()}
                    </Text>
                    <View style={styles.containerChangePrice}>
                      {item.price_change_percentage_7d_in_currency !== 0 && (
                        <Image
                          source={icons.upArrow}
                          style={[
                            styles.iconArrow,
                            {
                              tintColor:
                                item.price_change_percentage_7d_in_currency > 0
                                  ? COLORS.lightGreen
                                  : COLORS.red,
                              transform:
                                item.price_change_percentage_7d_in_currency > 0
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
                        {item.price_change_percentage_7d_in_currency.toFixed(2)}
                        %
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    myHoldings: state.hold.myHoldings,
    coins: state.coin.coins,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHold: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page,
    ) => {
      return dispatch(
        getHoldings(
          holdings,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
