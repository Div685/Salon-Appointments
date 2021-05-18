import { ADD_SINGLE_ITEM } from '../redux/actions/actionTypes';
import SingleItemReducer from '../redux/reducers/singleItemReducer';

const exampleItems = [{
  name: 'dagger',
  description: 'kills the vampire',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71h4eTlkeNL._AC_SX425_.jpg',
}];

const initialState = {
  item: {},
};

const itemAction = {
  type: ADD_SINGLE_ITEM,
  item: exampleItems,
};

describe('SingleItemReducer', () => {
  it('it shoud check initialState', () => {
    expect(SingleItemReducer(undefined, {})).toEqual(initialState);
  });

  it('should check Single Item Action', () => {
    const result = SingleItemReducer(initialState, itemAction);
    expect(result.item).toEqual(exampleItems);
  });
});
