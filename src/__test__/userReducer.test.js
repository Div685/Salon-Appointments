import { LOG_IN, SIGN_UP } from '../redux/actions/actionTypes';
import UserReducer from '../redux/reducers/usersReducer';

const exampleLogin = [{
  logIn: true,
}];

const exampleSignUp = [{
  user: {
    username: 'Div',
    password: 'Div',
  },
}];

const initialState = {
  logIn: true,
  user: {},
};

const logInAction = {
  type: LOG_IN,
  logIn: exampleLogin,
};

const signUpAction = {
  type: SIGN_UP,
  user: exampleSignUp,
};

describe('AppointmentItemsReducer', () => {
  it('it shoud check initialState', () => {
    expect(UserReducer(undefined, {})).toEqual(initialState);
  });

  it('should check UserReducer for logIn', () => {
    const result = UserReducer(initialState, logInAction);
    expect(result.logIn).toEqual(exampleLogin);
  });

  it('should check UserReducer for Sign up user', () => {
    const result = UserReducer(initialState, signUpAction);
    expect(result.user).toEqual(exampleSignUp);
  });
});
