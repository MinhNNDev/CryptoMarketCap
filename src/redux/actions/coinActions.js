import axios from 'axios';
import {getHeader} from '../../api/Service';

export const GET_COIN_MARKET_BEGIN = 'GET_COIN_MARKET_BEGIN';
export const GET_COIN_MARKET_SUCCESS = 'GET_COIN_MARKET_SUCCESS';
export const GET_COIN_MARKET_FAILURE = 'GET_COIN_MARKET_FAILURE';

export const getCoinMarketBegin = () => ({
  type: GET_COIN_MARKET_BEGIN,
});

export const getCoinMarketSuccess = coins => ({
  type: GET_COIN_MARKET_SUCCESS,
  payload: {coins},
});

export const getCoinMarketFailure = error => ({
  type: GET_COIN_MARKET_FAILURE,
  payload: {error},
});

export const getCoinMarket = (
  currency = 'usd',
  orderBy = 'market_cap_desc',
  sparkline = true,
  priceChangePerc = '7d',
  perPage = 10,
  page = 1,
) => {
  return dispatch => {
    dispatch(getCoinMarketBegin());
    let apiURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`;

    return axios({
      url: apiURL,
      method: 'GET',
      headers: {
        Accept: 'Application/json',
      },
    })
      .then(res => {
        // console.log('$ = COIN: ', res);
        if (res.status === 200) {
          dispatch(getCoinMarketSuccess(res.data));
        } else {
          dispatch(getCoinMarketFailure(res.data));
        }
      })
      .catch(error => {
        dispatch(getCoinMarketFailure(error));
      });
  };
};
