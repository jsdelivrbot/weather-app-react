import * as types from '../contants/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case types.FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
