
/**
 * INITIAL STATE
 */
const defaultCauses = {
  causeList: [],
  currentCause: {}
}

/**
 * ACTION TYPES
 */
const GET_CAUSES = 'GET_CAUSES'
const GET_CAUSE = 'GET_CAUSE'

/**
 * ACTION CREATORS
 */
export const getCauses = function (causeList) {
  return {
    type: GET_CAUSES,
    payload: causeList
  }
}

export const getCause = function (cause) {
    return {
      type: GET_CAUSE,
      payload: cause
    }
  }

/**
 * THUNK CREATORS
 */

export const fetchCauseById = (id) => {
  return function thunk(dispatch) {
    return fetch(`http://127.0.0.1:8000/emails/cause/${id}`, {  // TODO: fix this
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
    })
    .then(res => res.data)
    .then(cause => {
        dispatch(getCause(cause))
    })
    .catch(error => console.warn(error))
  }
}

export function fetchCauses() {
  return function thunk(dispatch) {
    return fetch(`http://127.0.0.1:8000/emails/cause/`, {  // TODO: fix this
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
    })
    .then(res => res.data)
    .then(causes => {
      dispatch(getCauses(causes))
    })
    .catch(error => console.warn(error))
  }
}

/**
 * REDUCER
 */
export default function reducer(state = defaultCauses, action) {
  switch (action.type) {
    case GET_CAUSES:
      return {
        ...state,
        causeList: action.payload
      }
    case GET_CAUSE:
      return {
        ...state,
        currentCause: action.payload
      }
    default:
      return state;
  }
}
