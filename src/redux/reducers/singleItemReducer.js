import { ADD_SINGLE_ITEM } from '../actions/actionTypes';

const defaultItemsReducer = {
  item: {},
};

const singleItemsReducers = (state = defaultItemsReducer, action) => {
  switch (action.type) {
    case ADD_SINGLE_ITEM:
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default singleItemsReducers;
