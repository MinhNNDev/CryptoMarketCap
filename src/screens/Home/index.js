import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {getHoldings} from '../../redux/actions/holdActions';
import {getCoinMarket} from '../../redux/actions/coinActions';

import {styles} from './style';
import {Main} from '../';
import {dummyData} from '../../constants';
import {holdings} from '../../constants/dummy';

const Home = ({getHoldings, getCoinMarkets, myHoldings, coins}) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     getHoldings(holdings);
  //     getCoinMarket();
  //   }, []),
  // );

  useFocusEffect(
    React.useCallback(() => {
      // getHoldings((holdings = dummyData.holdings));
      getCoinMarket();
    }, []),
  );

  // useEffect(() => {
  //   getHoldings(holdings);
  //   getCoinMarket();
  // }, []);

  return (
    <Main>
      <View>
        <Text>Home Ahihihi</Text>
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
    getHodings: (
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
    getCoinsMarket: (
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
