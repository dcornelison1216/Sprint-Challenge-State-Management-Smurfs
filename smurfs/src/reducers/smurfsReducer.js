import { ADD_NEW_SMURF, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS, DELETE_SMURF, DELETE_SMURF_FAIL } from '../actions';

export const initialState = {
  name: '',
  age: '',
  height: '',
  error: '',
  deleteError: '',
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
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        deleteError: action.payload.toString()
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
    default:
      return state;
  }
}
