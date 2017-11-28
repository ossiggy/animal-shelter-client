import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_REQUEST ='FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError =() => ({
  type: FETCH_CAT_ERROR
})

export const fetchCat = () => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/cat`).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(cat => {
    dispatch(fetchCatSuccess(cat));
  });
};

export const ADOPT_CAT = 'ADOPT_CAT';
export const adoptCat = () => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/cat`, {
    method: 'delete'
  }).then(() => {
    dispatch(fetchCat())
  });
};

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
  type: ADOPT_CAT_SUCCESS,
  cat
});

export const ADOPT_CAT_REQUEST ='ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError =(err) => ({
  type: ADOPT_CAT_ERROR,
  error: err
})