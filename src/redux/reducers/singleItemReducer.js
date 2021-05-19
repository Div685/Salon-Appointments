import { ADD_SINGLE_ITEM, REMOVE_SINGLE_ITEM } from '../actions/actionTypes';

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
    case REMOVE_SINGLE_ITEM:
      return {};
    default:
      return state;
  }
};

export default singleItemsReducers;
