import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_REQUEST ='FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError =(err) => ({
  type: FETCH_DOG_ERROR,
  error: err
})

export const fetchDog = () => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/dog`).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(dog => {
    dispatch(fetchDogSuccess(dog));
  });
};

export const ADOPT_DOG = 'ADOPT_DOG';
export const adoptDog = () => dispatch => {
  return fetch(`${REACT_APP_API_BASE_URL}/api/dog`, {
    method: 'delete'
  }).then(() => {
    dispatch(fetchDog())
  });
};

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
  type: ADOPT_DOG_SUCCESS,
  dog
});

export const ADOPT_DOG_REQUEST ='ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError =() => ({
  type: ADOPT_DOG_ERROR
})