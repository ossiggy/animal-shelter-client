export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const fetchCat = () => dispatch => {
  return fetch('/api/cat').then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  }).then(cat => {
    dispatch(fetchCatSuccess(cat));
  });
};