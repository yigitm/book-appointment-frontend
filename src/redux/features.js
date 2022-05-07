const SIGN_UP = 'book-appointment/features/SIGN_UP';
const LOGIN = 'book-appointment/features/LOGIN';
const CREATE = 'book-appointment/features/CREATE';

const baseURL = 'http://localhost:3000/api/v1/users';
const loginURL = 'http://localhost:3000/api/v1/login';
const createURL = 'http://localhost:3000/api/v1/courses';

const initialState = [];
let TOKEN = '';

export const signUp = (state) => ({
  type: SIGN_UP,
  payload: state,
});

export const login = (state) => ({
  type: LOGIN,
  payload: state,
});

export const create = (state) => ({
  type: CREATE,
  payload: state,
});

export const postLogin = (userInputs) => async (dispatch) => {
  TOKEN = localStorage.getItem('TOKEN', user.token);
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
  localStorage.setItem('TOKEN', user.token);
  dispatch(signUp(user));
};

export const postCreate = (userInputs) => async (dispatch) => {
  TOKEN = localStorage.getItem('TOKEN');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      course: {
        course_type: userInputs.type,
        info: userInputs.info,
        course_name: userInputs.name,
        summary: userInputs.summary,
      },
    }),
  };
  const response = await fetch(createURL, requestOptions);
  const course = await response.json();
  dispatch(create(course));
  return response.status;
};

const featuresReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign(action.payload);
    case LOGIN:
      return Object.assign(action.payload);
    case CREATE:
      return Object.assign(action.payload);
    default:
      return state;
  }
};

export default featuresReducers;