import * as tabActionsTypes from '../actions/tabActions';

const initialState = {
  isTradeModalVisible: false,
};

const tab = (state = initialState, action) => {
  switch (action.type) {
    case tabActionsTypes.SET_TRADE_MODAL_VISIBILITY:
      return {
        ...state,
        isTradeModalVisible: action.payload.isVisible,
      };
    default:
      return state;
  }
};

export default tab;
