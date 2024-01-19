import { Link, useLocation } from "react-router-dom";
import { addFav, addLike, removeFav, removeLike, selectSong } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AlbumDetails = ({ album }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.Like.songs);
  const fav = useSelector((state) => state.favourites.songs);

  const location = useLocation();

  return album.tracks.data.map((elem, i) => (
    <div className="py-3 trackHover d-flex" key={`track${i}`}>
      <div
        onClick={() => {
          likes.includes(elem.id) ? dispatch(removeLike(elem.id)) : dispatch(addLike(elem.id));
        }}
        style={{ color: likes.includes(elem.id) ? "red" : "white" }}
      >
        <i className={`bi bi-heart${likes.includes(elem.id) ? "-fill" : ""}`}></i>
      </div>

      <Link
        style={{ textDecoration: "none" }}
        to={`/album_page.html${location.search}`}
        className="card-title trackHover text-white px-3"
        onClick={() => {
          dispatch(selectSong(elem.title, elem.album.title, elem.album.cover_medium));
        }}
      >
        {elem.title}
      </Link>

      <small className="duration" style={{ color: "white" }}>
        {`${Math.floor(parseInt(elem.duration) / 60)}:${parseInt(elem.duration) % 60 < 10 ? "0" : ""}${
          parseInt(elem.duration) % 60
        }`}
      </small>

      <div className="ms-3">
        <div
          style={{ color: "white" }}
          onClick={() => {
            fav.find((x) => x.songId === elem.id)
              ? dispatch(removeFav(elem.id))
              : dispatch(addFav(elem.title, elem.id, elem.album.cover_medium));
          }}
        >
          {" "}
          <i className={`bi bi-${fav.find((x) => x.songId === elem.id) ? "dash" : "plus"}-lg`}></i>
        </div>
      </div>
    </div>
  ));
};

export default AlbumDetails;
