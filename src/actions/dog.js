export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const fetchDog = () => dispatch => {
  return fetch('/api/dog').then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(dog => {
    dispatch(fetchDogSuccess(dog));
  });
};

