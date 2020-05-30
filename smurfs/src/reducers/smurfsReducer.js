import axios from 'axios';
import { ADD_NEW_SMURF, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS, UPDATE_NAME, UPDATE_AGE, UPDATE_HEIGHT } from '../actions';



export const initialState = {
  name: '',
  age: '',
  height: '',
  error: '',
  smurfs: []
};

axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    initialState.smurfs = res.data
  })

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_SMURF:
      const newSmurf = {
        name: state.name,
        age: state.age,
        height: state.height
      }
      axios.post('http://localhost:3333/smurfs', newSmurf)
      return {
        ...state,
        name: '',
        age: '',
        height: ''
      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
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
