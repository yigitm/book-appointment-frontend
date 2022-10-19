const SIGN_UP = 'book-appointment/features/SIGN_UP';
const LOGIN = 'book-appointment/features/LOGIN';
const CREATE = 'book-appointment/features/CREATE';
const LIST = 'book-appointment/features/LIST';
const DEL = 'book-appointment/features/DELETE';
/* If you wish to use locally please un-comment lines 7 to 9,
   and remove lines 12 to 14 (only left delURL).
const baseURL = 'http://localhost:3000/api/v1/users';
const loginURL = 'http://localhost:3000/api/v1/login';
const courseURL = 'http://localhost:3000/api/v1/courses';
*/

const baseURL = 'https://dark-flower-106.fly.dev/api/v1/users';
const loginURL = 'https://dark-flower-106.fly.dev/api/v1/login';
const courseURL = 'https://dark-flower-106.fly.dev/api/v1/courses';
const delURL = `${courseURL}/delete`;

const initialState = [];
let TOKEN = '';
/* eslint-disable no-unused-expressions */
export const loginStatus = (status) => {
  !!status;
};
/* eslint-enable no-unused-expressions */
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

export const del = (state) => ({
  type: DEL,
  payload: state,
});

export const postLogin = (userInputs) => async (dispatch) => {
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
  const response = await fetch(loginURL, requestOptions);
  const user = await response.json();
  sessionStorage.setItem('USER_ID', user.user.id);
  sessionStorage.setItem('TOKEN', user.token);
  sessionStorage.setItem('LOGIN?', true);
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
  sessionStorage.setItem('USER_ID', user.user.id);
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
  const filteredCourses = [];
  /* eslint-disable no-unused-expressions, radix, no-confusing-arrow */
  /* eslint-disable implicit-arrow-linebreak, function-paren-newline */
  courses.filter((item) =>
    parseInt(sessionStorage.getItem('USER_ID')) === item.user_id
      ? filteredCourses.push(item)
      : null,
  );
  /* eslint-enable no-unused-expressions, radix, no-confusing-arrow */
  /* eslint-enable implicit-arrow-linebreak, function-paren-newline */
  dispatch(list(filteredCourses));
};

export const delCourse = (data) => async (dispatch) => {
  TOKEN = sessionStorage.getItem('TOKEN');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      course: {
        course_type: data,
        info: '',
        course_name: '',
        summary: '',
      },
    }),
  };
  const response = await fetch(delURL, requestOptions);
  const result = await response.json();
  dispatch(del(result));
};

const featuresReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return Object.assign(action.payload);
    case LOGIN:
      /* eslint-disable no-unused-expressions */
      action.payload.token
        ? sessionStorage.setItem('LOGIN?', true)
        : sessionStorage.setItem('LOGIN?', false);
      /* eslint-enable no-unused-expressions */
      return Object.assign(action.payload);
    case CREATE:
      return Object.assign(action.payload);
    case LIST:
      return action.payload;
    case DEL:
      return action.payload;
    default:
      return state;
  }
};

export default featuresReducers;
