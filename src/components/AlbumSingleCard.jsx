import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectSong } from "../redux/actions";

const AlbumSingleCard = ({ songInfo }) => {
  const dispatch = useDispatch();

  const truncateTitle = (title) => (title.length < 16 ? title : `${title.substring(0, 16)}...`);

  return (
    <>
      <Link to={`/album_page.html?id=${songInfo.album.id}`}>
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="Album Cover" />
      </Link>
      <p>
        <Link
          style={{ textDecoration: "none" }}
          to=""
          onClick={() => dispatch(selectSong(songInfo.title, songInfo.album.title, songInfo.album.cover_medium))}
        >
          Track: "{truncateTitle(songInfo.title)}"
        </Link>
      </p>
      <p>
        <Link style={{ textDecoration: "none" }} to={`/album_page.html?id=${songInfo.album.id}`}>
          Album: "{truncateTitle(songInfo.album.title)}"
        </Link>
      </p>
    </>
  );
};

export default AlbumSingleCard;
