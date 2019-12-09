import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
  userlogged: false,
  userLinks: [],
  newLink: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MY_LINKS':
      return {
        ...state,
        userLinks: action.payload
      };
    case 'NEW_LINK':
      return {
        ...state,
        newLink: action.payload,
        userLinks: state.usertLinks.concat(action.payload)
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(ReduxThunk));
