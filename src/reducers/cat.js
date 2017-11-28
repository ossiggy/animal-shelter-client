import * as actions from '../actions/cat';

const initialState ={
  data: null,
  loading: false,
  error: null
};

export const catReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      loading: false
    })
  }
  if(action.type === actions.ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
    })
  }
  if(action.type === actions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if(action.type ===actions.ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
};