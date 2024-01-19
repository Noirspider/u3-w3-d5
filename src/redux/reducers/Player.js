import { SELECTED_SONG } from "../actions";

const initalState = {
  songTitle: "",
  albumTitle: "",
  albumCover: "",
};

const player = (state = initalState, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return {
        ...state,
        songTitle: action.payload.songTitle,
        albumTitle: action.payload.albumTitle,
        albumCover: action.payload.albumCover,
      };
    default:
      return state;
  }
};

export default player;
