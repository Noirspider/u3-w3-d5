import { QUERY_PARAM, SET_SEARCH } from "../actions";

const initialState = {
  queryParam: "",
  activeSearch: false,
  searchResults: [],
};

const generalReducers = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_PARAM:
      return {
        ...state,
        queryParam: action.payload,
        activeSearch: true,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
export default generalReducers;
