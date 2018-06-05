import { FETCH_WEATHER } from '../actions/MainPageActions'

export function weather (state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload
  }

  return state
}
