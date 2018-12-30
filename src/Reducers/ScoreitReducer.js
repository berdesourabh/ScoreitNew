
import {
  FETCH_TOPIC_DATA,
  FETCH_TOPIC_DATA_SUCCESS,
  FETCH_TOPIC_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
}

export default function( state = [], action) {

  switch(action.type) {
    case FETCH_TOPIC_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      });

      case FETCH_TOPIC_DATA_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          data: action.payload,
          hasError: true,
          errorMessage: action.err
        });

      default:
        return state;
  }
}
