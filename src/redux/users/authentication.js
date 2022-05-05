const SIGN_UP = 'book-appointment/header/SIGN_UP';
/*const LOGIN = 'book-appointment/header/LOGIN';*/

const baseURL = 'http://localhost:3000/api/v1/users';

const initialState = [];

export const signUp = (state) => ({
  type: SIGN_UP,
  payload: state,
});

export const postSignUp = async (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: 'Jane Doe',
        password: '123456',
      },
    }),
  };
  const response = await fetch(baseURL, requestOptions);
  const user = await response.json();
  dispatch(signUp(user));
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducers;
