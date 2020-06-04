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

export const deleteSmurf = id => dispatch => {
  console.log(id)
}

export const addNewSmurf = smurf => dispatch => {
  const newSmurf = {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  }
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: ADD_NEW_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err })
    })

};
