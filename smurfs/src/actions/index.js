import axios from 'axios';

export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';
export const UPDATE_HEIGHT = 'UPDATE_HEIGHT';

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err })
    })
}

export const addNewSmurf = () => dispatch => {
  dispatch({ type: ADD_NEW_SMURF });
};

export const updateName = name => dispatch => {
  dispatch({ type: UPDATE_NAME, payload: name })
}

export const updateAge = age => dispatch => {
  dispatch({ type: UPDATE_AGE, payload: age })
}

export const updateHeight = height => dispatch => {
  dispatch({ type: UPDATE_HEIGHT, payload: height })
}
