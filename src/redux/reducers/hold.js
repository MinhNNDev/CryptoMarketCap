import {
  GET_HOLDING_BEGIN,
  GET_HOLDING_SUCCESS,
  GET_HOLDING_FAILURE,
  getHoldings,
} from '../actions/holdActions';

const initialState = {
  myHoldings: [],
  coins: [],
  error: null,
  loading: false,
};

const hold = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOLDING_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_HOLDING_SUCCESS:
      return {
        ...state,
        myHoldings: action.payload.myHoldings,
      };
    case GET_HOLDING_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default hold;
