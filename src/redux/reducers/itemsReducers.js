import { ADD_ITEMS } from '../actions/actionTypes';

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
    default:
      return state;
  }
};

export default itemsReducers;
