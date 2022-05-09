const SIGN_UP = 'book-appointment/features/SIGN_UP';
const LOGIN = 'book-appointment/features/LOGIN';
const CREATE = 'book-appointment/features/CREATE';
const LIST = 'book-appointment/features/LIST';

const baseURL = 'http://localhost:3000/api/v1/users';
const loginURL = 'http://localhost:3000/api/v1/login';
const courseURL = 'http://localhost:3000/api/v1/courses';

const initialState = [];
let TOKEN = '';

export const loginStatus = (status) => {
  status ? true : false;
};

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

export const list = (state) => ({
  type: LIST,
  payload: state,
});

export const postLogin = (userInputs) => async (dispatch) => {
  TOKEN = sessionStorage.getItem('TOKEN');
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
  sessionStorage.setItem('TOKEN', user.token);
  sessionStorage.setItem('LOGIN?', true);
  dispatch(signUp(user));
};

export const postCreate = (userInputs) => async (dispatch) => {
  TOKEN = sessionStorage.getItem('TOKEN');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      course: {
        course_type: userInputs.dataType,
        info: userInputs.dataInfo,
        course_name: userInputs.dataName,
        summary: userInputs.dataSummary,
      },
    }),
  };
  const response = await fetch(courseURL, requestOptions);
  const course = await response.json();
  dispatch(create(course));
  return response.status;
};

export const getList = async (dispatch) => {
  TOKEN = sessionStorage.getItem('TOKEN');
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${TOKEN}`,
    },
  };
  const response = await fetch(courseURL, requestOptions);
  const courses = await response.json();
  dispatch(list(courses));
};

const featuresReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign(action.payload);
    case LOGIN:
      !!action.payload.token
        ? sessionStorage.setItem('LOGIN?', true)
        : sessionStorage.setItem('LOGIN?', false);
      return Object.assign(action.payload);
    case CREATE:
      return Object.assign(action.payload);
    case LIST:
      return action.payload;
    default:
      return state;
  }
};

export default featuresReducers;
