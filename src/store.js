import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
  userlogged: false,
  userLinks: [],
  newLink: ''
};
const reducer = (state = initialState, action) => {
  console.log(action.payload);
  // console.log(initialState.userLinks);
  switch (action.type) {
    case 'GET_MY_LINKS':
      return {
        ...state,
        userLinks: action.payload
      };
    case 'DELETE_LINK':
      return {
        ...state,
        userLinks: state.userLinks.filter(l => l._id != action.payload)
      };
    case 'NEW_LINK':
      return {
        ...state,
        newLink: action.payload,
        userLinks: state.userLinks.concat(action.payload)
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(ReduxThunk));
