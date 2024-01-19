import { ADD_LIKE, REMOVE_LIKE } from "../actions";

const initialState = {
  songs: [],
};

const like = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        songs: state.songs.filter((elem) => elem !== action.payload),
      };
    default:
      return state;
  }
};

export default like;
