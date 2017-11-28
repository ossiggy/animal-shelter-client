import * as actions from '../actions/dog';

const initialState ={
  data: null,
  loading: false,
  error: null
};

export const dogReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      loading: false
    })
  }
  if(action.type === actions.ADOPT_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
    })
  }
  if(action.type === actions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if(action.type ===actions.ADOPT_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
};