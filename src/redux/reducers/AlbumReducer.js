import { ALBUM_DETAILS } from "../actions";

const albumState = (state = { obj: null }, action) => {
  switch (action.type) {
    case ALBUM_DETAILS: {
      return {
        obj: action.payload,
      };
    }
    default:
      return state;
  }
};
export default albumState;
