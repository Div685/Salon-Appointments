import { ADD_ITEMS, REMOVE_ITEMS } from '../actions/actionTypes';

const defaultItemsReducer = {
  items: [],
};

const itemsReducers = (state = defaultItemsReducer, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case REMOVE_ITEMS:
      return {};
    default:
      return state;
  }
};

export default itemsReducers;
