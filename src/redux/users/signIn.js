const SIGN_UP = 'book-appointment/users/SIGN_UP';
const LOGIN = 'book-appointment/users/LOGIN';
const baseURL = 'http://localhost:3000/api/v1/users';
const loginURL = 'http://localhost:3000/api/v1/login';
let TOKEN = '';
const initialState = [];

export const signUp = (state) => ({
  type: SIGN_UP,
  payload: state,
});

export const login = (state) => ({
  type: LOGIN,
  payload: state,
});

export const postLogin = (userInputs) => async (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      user: {
        username: userInputs.username,
        password: userInputs.password,
      },
    }),
  };
  const response = await fetch(loginURL, requestOptions);
  const user = await response.json();
  dispatch(login(user));
};

export const postSignUp = (userInputs) => async (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: userInputs.username,
        password: userInputs.password,
      },
    }),
  };
  const response = await fetch(baseURL, requestOptions);
  const user = await response.json();
  TOKEN = user.token;
  dispatch(signUp(user));
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return (state = action.payload);
    case LOGIN:
      return (state = action.payload);
    default:
      return state;
  }
};

export default usersReducers;
