import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {getHoldings} from '../../redux/actions/holdActions';

import {Main} from '../';
import {BalanceInfo, Chart} from '../../components';
import {holdings} from '../../constants/dummy';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {styles} from './style';

const Portfolio = props => {
  const {myHoldings, getHold} = props;

  useFocusEffect(
    React.useCallback(() => {
      getHold(holdings);
    }, []),
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0,
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 10;

  const renderWalletSection = () => {
    return (
      <View style={styles.walletSection}>
        <Text style={styles.headerFolio}>Portfolio</Text>
        <BalanceInfo
          title="Balance Crurrent"
          displayAmount={totalWallet / 1000}
          changePct={percChange}
          containerStyle={styles.customBalance}
        />
      </View>
    );
  };

  return (
    <Main>
      <View style={styles.container}>
        {renderWalletSection()}
        <Chart
          containerStyle={styles.chart}
          chartPrices={myHoldings[0]?.sparkline_in_7d?.value}
        />
        <View>
          <Text style={styles.title}>Your Assets</Text>
          <View style={styles.assetLabel}>
            <Text style={styles.label}>Asset</Text>
            <Text style={[styles.label, {textAlign: 'right'}]}>Price</Text>
            <Text style={[styles.label, {textAlign: 'right'}]}>Holding</Text>
          </View>
          <FlatList
            data={myHoldings}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              marginTop: SIZES.base,
              marginHorizontal: SIZES.padding,
            }}
            renderItem={({item}) => {
              let priceColor =
                item.price_change_percentage_7d_in_currency === 0
                  ? COLORS.lightGray3
                  : item.price_change_percentage_7d_in_currency > 0
                  ? COLORS.lightGreen
                  : COLORS.red;
              return (
                <TouchableOpacity style={styles.containerAsset}>
                  <View style={styles.itemAsset}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.iconAssetCrypto}
                    />
                    <Text
                      style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                        marginLeft: SIZES.font,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.flexJustCenter}>
                    <Text style={styles.priceAndHold}>
                      ${item.current_price.toLocaleString()}
                    </Text>
                    <View style={styles.arrowState}>
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
                  <View style={styles.flexJustCenter}>
                    <Text style={styles.priceAndHold}>
                      $ {item.total.toFixed(3) / 1000}
                    </Text>
                    <Text style={styles.txtSymbol}>
                      {item.symbol.toUpperCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    myHoldings: state.hold.myHoldings,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
