import { ADD_NEW_SMURF, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS, UPDATE_NAME, UPDATE_AGE, UPDATE_HEIGHT, DELETE_SMURF } from '../actions';

export const initialState = {
  name: '',
  age: '',
  height: '',
  error: '',
  smurfs: []
};

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_SMURF:
      return {
        ...state,
        error: '',
        smurfs: action.payload
      }
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload.toString()
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload
      }
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_AGE:
      return {
        ...state,
        age: action.payload
      }
    case UPDATE_HEIGHT:
      return {
        ...state,
        height: action.payload
      }
    default:
      return state;
  }
}
