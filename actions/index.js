import * as types from '../constants/ActionTypes'

export function addList(text) {
  return { 
    type: types.ADD_LIST,
    text: text 
  }
}

export function deleteList(id) {
  return { 
    type: types.DELETE_LIST,
    id 
  }
}

export function inputEmailChange(id, active) {
  return { 
    type: types.EMAIL_ACTIVE,
    id,
    active 
  }
}

export function activeLables(list) {
  return { 
    type: types.ACTIVE_LABLES,
    list
  }
}

export function delLables(label) {
  return { 
    type: types.DELETE_LABLES,
    label
  }
}

export function showDel(email) {
  return (dispatch, getState) => {
    dispatch({type: 'SHOW_DEL', getstate: getState().email})
  }
}



