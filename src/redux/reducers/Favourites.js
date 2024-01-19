import { ADD_FAV, REMOVE_FAV } from "../actions";

const initialState = {
  songs: [],
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...state,
        songs: [
          ...state.songs,
          { songTitle: action.payload.songTitle, songId: action.payload.songId, albumCover: action.payload.albumCover },
        ],
      };
    }
    case REMOVE_FAV: {
      return {
        ...state,
        songs: state.songs.filter((elem) => elem.songId !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default favourites;
