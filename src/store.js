import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"

const initialState = {
  userlogged: false,
  myLinks: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOP_PALETTES":
      return {
        ...state,
        topPalettes: action.payload
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(ReduxThunk))
