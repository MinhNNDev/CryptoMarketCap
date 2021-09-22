import {
  GET_COIN_MARKET_BEGIN,
  GET_COIN_MARKET_SUCCESS,
  GET_COIN_MARKET_FAILURE,
  getCoinsMarket,
} from '../actions/coinActions';

const initialState = {
  coins: [],
  error: null,
  loading: false,
};

const coin = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_MARKET_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_COIN_MARKET_SUCCESS:
      return {
        ...state,
        coins: action.payload.coins,
      };
    case GET_COIN_MARKET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default coin;
